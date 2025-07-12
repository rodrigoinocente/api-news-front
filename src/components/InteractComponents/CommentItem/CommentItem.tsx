import { ApiCommentData } from "../../../vite-env";
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
import { sendReply } from "../../../service/interact";
import { Button } from "../../Button/Button";
import axios from "axios";

interface CommentItemProps {
	comment: ApiCommentData;
	onDeleteComment: (dataCommentId: string, commentId: string) => void;
	onLikeComment: (dataCommentId: string, commentId: string) => void;
}

type IReply = z.infer<typeof interactSchema>;

export function CommentItem({ comment, onDeleteComment, onLikeComment }: CommentItemProps) {
	const { user } = useUser()
	const isOwner = user?._id === comment.user._id;
	const [showReplyInput, setShowReplyInput] = useState(false)
	const [isSendReply, setIsSendReply] = useState(false)
	const [replyError, setReplyError] = useState<string | null>(null)

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
			console.log("reponseSenReply: ", response);
			reset()
			setShowReplyInput(false)


		} catch (error: unknown) {
			if (axios.isAxiosError(error)) setReplyError(error.response?.data.message || "Ocorreu um erro desconhecido")
			else setReplyError("Ocorreu um erro desconhecido")
			console.error(error)
		} finally {
			setIsSendReply(false)
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
					<span>Ver repostas</span>
					// TODO: FAZER MESAGEM DE COMMIT
					// FAZER  GET DAS RESPOSTAS PAGINADSS E VERIFICAÇÃO SE O USUARIO LOGADO JÁ CURTIU OU NÃO A REPOSTA
				}

				<span onClick={() =>  setShowReplyInput(prev => !prev)}>
					<strong>Responder</strong>
				</span>
			</Footer>

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