import { ApiCommentData, ApiReplyData } from "../../../vite-env";
import { NewsTimestamps } from "../../NewsTimestamps/NewsTimestamps";
import { UserAvatar } from "../../UserAvatar/UserAvatar";
import iconLike from "../../../images/icons/icon-like.png";
import iconLikeCheck from "../../../images/icons/icon-likeCheck.png";
import iconComments from "../../../images/icons/icon-comments.png";
import iconTrash from "../../../images/icons/icon-trash.png";
import { Container, Footer, Header } from "./CommentItemStyled";
import { useUser } from "../../../Context/userCustomHook";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { interactSchema } from "../../../schemas/interactSchema";
import { z } from "zod";
import { getReplies, sendReply } from "../../../service/interact";
import { Button } from "../../Button/Button";
import axios from "axios";

interface CommentItemProps {
	comment: ApiCommentData;
	onDeleteComment: (dataCommentId: string, commentId: string) => void;
	onLikeComment: (dataCommentId: string, commentId: string) => void;
	onReplyComment: ( commentId: string) => void;
}

type IReply = z.infer<typeof interactSchema>;

export function CommentItem({ comment, onDeleteComment, onLikeComment, onReplyComment }: CommentItemProps) {
	const { user } = useUser()
	const isOwner = user?._id === comment.user._id;
	const [showReplyInput, setShowReplyInput] = useState(false)
	const [isSendReply, setIsSendReply] = useState(false)
	const [replyError, setReplyError] = useState<string | null>(null)
	const [replies, setReplies] = useState<ApiReplyData[]>([])
	const limitReplies = 6
	const [offset, setOffset] = useState(0)
	const [hasMoreReplies, setHasMoreReplies] = useState(false)
	const [loadReplies, setLoadReplies] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IReply>({ resolver: zodResolver(interactSchema) })

	const inHandleSubmit = async (data: IReply) => {
		setIsSendReply(true)
		try {
			const response = await sendReply(comment.documentId, comment._id, data)
			reset()
			setReplies((prevReplies) => [response.data.reply.reply[0], ...prevReplies ])
			onReplyComment(comment._id)
			setShowReplyInput(false)

		} catch (error: unknown) {
			if (axios.isAxiosError(error)) setReplyError(error.response?.data.message || "Ocorreu um erro desconhecido")
			else setReplyError("Ocorreu um erro desconhecido")
			console.error(error)
		} finally {
			setIsSendReply(false)
		}
	}

	const findReplies = async (dataCommentId: string, commentId: string) => {
		setLoadReplies(true)

		try {
			const response = await getReplies(dataCommentId, commentId, limitReplies, offset)
			setReplies(prev => [
				...(offset === 0 ? [] : prev),
				...response.data.replies
			])
			setHasMoreReplies(response.data.hasMore)
			setOffset(response.data.nextOffset)

		} catch (error: unknown) {
			if (axios.isAxiosError(error)) setReplyError(error.response?.data.message || "Ocorreu um erro desconhecido")
			else setReplyError("Ocorreu um erro desconhecido")

		} finally {
			setLoadReplies(false)
		}
	}

	return (

		<Container>
			<Header>
				<div id="right">
					<UserAvatar user={comment.user} size="2.5rem" />

					<div id="nameAndTime">
						<strong>{comment.user.username}</strong>
						<NewsTimestamps publishedAt={new Date(comment.createdAt)} type="card" />
					</div>
				</div>

				{isOwner &&
					<div id="trash" onClick={() => onDeleteComment(comment.documentId, comment._id)}>
						<img src={iconTrash} alt="Ícone para exclusão do comentário" />
					</div>
				}
			</Header>

			<div id="content">
				<p>{comment.content}</p>
			</div>

			<Footer>
				<div id="counts">
					<div className="countsIcon" onClick={() => onLikeComment(comment.documentId, comment._id)}>
						{!comment.isLiked ?
							<img src={iconLike} alt="Ícone para curtir o comentário" />
							:
							<img src={iconLikeCheck} alt="Ícone do comentário curtido" />
						}
						<span>{comment.likeCount}</span>
					</div>

					<div className="countsIcon">
						<img src={iconComments} alt="Ícone para responder o comentário" />
						<span>{comment.replyCount}</span>

					</div>
				</div>

				{comment.replyCount > 0 &&
					<span onClick={() => findReplies(comment.documentId, comment._id)}>Ver repostas</span>
				}

				<span onClick={() => setShowReplyInput(prev => !prev)}>
					<strong>Responder</strong>
				</span>
			</Footer>

			<div>
				{replies.map((reply) => (
					<div key={reply._id}>
						<br />
						<p>{reply.user.username}</p>
						<h3>{reply.content}</h3>
						<p>{reply.likeCount}</p>

					</div>
				))}

			</div>
			
			{loadReplies && <p> Carregando respostas ...</p>}
			{hasMoreReplies &&
				<button type="button" onClick={() => findReplies(comment.documentId, comment._id)}> ver mais respostas</button>
			}

			{showReplyInput &&
				<section>
					{isSendReply && <p>Enviando ...</p>}
					<form onSubmit={handleSubmit(inHandleSubmit)}>
						<textarea
							{...register("content")}
							placeholder="Escreva sua resposta..."
							rows={4}
						/>

						{errors.content && <span>{errors.content.message}</span>}
						{replyError && <span>{replyError} </span>}

						<Button text="Enviar" type="submit" />
					</form>

				</section>
			}
			
		</Container>
	)
}