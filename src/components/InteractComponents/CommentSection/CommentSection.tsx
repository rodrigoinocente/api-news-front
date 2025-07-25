import { Container, TextareaSection } from "./CommentSectionStyled";
import iconCommett from "../../../images/icons/icon-comments.png";
import { useUser } from "../../../Context/userCustomHook"
import { interactSchema } from '../../../schemas/interactSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { deleteComment, getComments, likeComment, sendComment } from "../../../service/interact";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { ApiCommentData } from "../../../vite-env";
import { CommentItem } from "../CommentItem/CommentItem";
import iconSend from "../../../images/icons/icon-send.png"

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

			setTimeout(() => {
				window.scrollBy({ top: 150, behavior: "smooth", })
			}, 300)

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
		const toggleCommentReplyLocally = () => {
			setComments((prev) =>
				prev.map((comment) =>
					comment._id === commentId
						? {
							...comment,
							isLiked: !comment.isLiked,
							likeCount: comment.isLiked ? comment.likeCount - 1 : comment.likeCount + 1
						}
						: comment
				)
			)
		}
		toggleCommentReplyLocally()

		try {
			await likeComment(dataCommentId, commentId)

		} catch (error: unknown) {
			toggleCommentReplyLocally()

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

	const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const textarea = e.target;
		textarea.style.height = "auto";
		textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
	}

	useEffect(() => {
		findComments(publicationId)
	}, [publicationId, user])

	return (
		<Container>
			<div id="comments">
				<img src={iconCommett} alt="Ícone de comentario" />
				<h4>{commentCount} comentários</h4>
			</div>

			{!user ? (
				<p>Faça o login para comentar</p>

			) : (
				<>
					<TextareaSection>
						{comments.length === 0 && !loadComments && <p>Seja o primeiro a comentar!</p>}
						<form onSubmit={handleSubmit(inHandleSubmit)}>
							<textarea
								{...register("content")}
								placeholder="Escreva seu comentário..."
								onChange={handleTextareaChange}
							/>

							{errors.content && <span>{errors.content.message}</span>}
							{commentError && <span>{commentError} </span>}

							<button type="submit">
								<img src={iconSend} alt="Ícone para enviar o comentário" />
							</button >
						</form>
					</TextareaSection>

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
				</>
			)}
		</Container>
	)
}