import { Container } from "./CommentSectionStyled";
import iconCommett from "../../../images/icons/icon-comments.png";
import { useUser } from "../../../Context/userCustomHook"
import { Button } from "../../Button/Button";
import { interactSchema } from '../../../schemas/interactSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { deleteComment, getComments, likeComment, sendComment } from "../../../service/interact";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ApiCommentData } from "../../../vite-env";
import { CommentItem } from "../CommentItem/CommentItem";

export interface ICommentCard {
	publicationId: string;
	commentCount: number;
}

type IComment = z.infer<typeof interactSchema>;

export function CommentSection({ publicationId, commentCount }: ICommentCard) {
	const { user } = useUser()
	const [commentError, setCommentError] = useState<string | null>(null)
	const [comments, setComments] = useState<ApiCommentData[]>([])
	const [hasMoreComments, setHasMoreComments] = useState(false)
	const [offset, setOffset] = useState(0)
	const limitComments = 6
	const [loadComments, setLoadComments] = useState(false)
	const [sendComments, setSendComments] = useState(false)
	const commentsTopRef = useRef<HTMLDivElement>(null)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IComment>({ resolver: zodResolver(interactSchema) })

	const findComments = async (publicationId: string) => {
		if (!publicationId) return console.error("publicationId is undefined")
		setLoadComments(true)

		try {
			const response = await getComments(publicationId, limitComments, offset)
			setComments(prev => [
				...(offset === 0 ? [] : prev),
				...response.data.comments
			])
			setHasMoreComments(response.data.hasMore)
			setOffset(response.data.nextOffset)

		} catch (error) {
			if (axios.isAxiosError(error)) console.error(error.response?.data.message || "Ocorreu um erro desconhecido")
		} finally {
			setLoadComments(false)
		}
	}

	async function inHandleSubmit(data: IComment) {
		setSendComments(true)
		try {
			const response = await sendComment(publicationId, data)
			reset()
			setComments((prevComments) => [response.data.comment.comment[0], ...prevComments])
			commentsTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })

		} catch (error: unknown) {
			if (axios.isAxiosError(error)) setCommentError(error.response?.data.message || "Ocorreu um erro desconhecido")
			else setCommentError("Ocorreu um erro desconhecido")
			console.error(error)
		} finally {
			setSendComments(false)
		}
	}

	const inHandleDeleteComment = async (dataCommentId: string, commentId: string) => {
		try {
			await deleteComment(dataCommentId, commentId)
			setComments(prev => prev.filter(c => c._id !== commentId))
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) setCommentError(error.response?.data.message || "Ocorreu um erro desconhecido")
			else setCommentError("Ocorreu um erro desconhecido")
			console.error(error)
		}
	}

	const inHandleLikeComment = async (dataCommentId: string, commentId: string) => {
		setComments((prev) =>
			prev.map((comment) =>
				comment._id === commentId
					? {
						...comment,
						isLiked: !comment.isLiked,
						likeCount: comment.isLiked ? comment.likeCount-- : comment.likeCount++
					}
					: comment
			)
		)

		try {
			await likeComment(dataCommentId, commentId)

		} catch (error: unknown) {
			setComments((prev) =>
				prev.map((comment) =>
					comment._id === commentId
						? {
							...comment,
							isLiked: !comment.isLiked,
							likeCount: comment.isLiked ? comment.likeCount-- : comment.likeCount++
						}
						: comment
				)
			)

			if (axios.isAxiosError(error)) setCommentError(error.response?.data.message || "Ocorreu um erro desconhecido")
			else setCommentError("Ocorreu um erro desconhecido")
			console.error(error)
		}
	}

	const inHandleReplyComment = (commentId: string) => {
		setComments((prev) =>
			prev.map((comment) =>
				comment._id === commentId
					? {
						...comment,
						replyCount: comment.replyCount + 1
					}
					: comment
			)
		)
	}

	useEffect(() => {
		findComments(publicationId)
	}, [publicationId, user])

	return (
		<Container>
			<div id="comments" ref={commentsTopRef}>
				<img src={iconCommett} alt="Ícone de comentario" />
				<h4>{commentCount} comentários</h4>
			</div>

			{!user ? (
				<p>Faça o login para comentar</p>

			) : (
				<>
					{comments.length === 0 && !loadComments && <p>Seja o primeiro a comentar!</p>}
					<div >

						{comments.map((comment) => (
							<CommentItem
								comment={comment}
								key={comment._id}
								onDeleteComment={inHandleDeleteComment}
								onLikeComment={inHandleLikeComment}
								onReplyComment={inHandleReplyComment} />
						))}

						{loadComments && <p>Carregando ...</p>}
						{sendComments && <p>Enviando ...</p>}
						{hasMoreComments &&
							<button type="button" onClick={() => findComments(publicationId)}>
								Mais
							</button>
						}
					</div>

					<form onSubmit={handleSubmit(inHandleSubmit)}>
						<textarea
							{...register("content")}
							placeholder="Escreva seu comentário..."
							rows={4}
						/>

						{errors.content && <span>{errors.content.message}</span>}
						{commentError && <span>{commentError} </span>}

						<Button text="Enviar" type="submit" />
					</form>
				</>
			)}
		</Container>
	)
}