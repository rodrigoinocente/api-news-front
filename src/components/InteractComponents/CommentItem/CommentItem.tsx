import { ApiCommentData } from "../../../vite-env";
import { NewsTimestamps } from "../../NewsTimestamps/NewsTimestamps";
import { UserAvatar } from "../../UserAvatar/UserAvatar";
import iconLike from "../../../images/icons/icon-like.png";
import iconLikeCheck from "../../../images/icons/icon-likeCheck.png";
import iconComments from "../../../images/icons/icon-comments.png";
import iconTrash from "../../../images/icons/icon-trash.png";
import { Container, Footer, Header } from "./CommentItemStyled";
import { useUser } from "../../../Context/userCustomHook";

interface CommentItemProps {
	comment: ApiCommentData;
	onDeleteComment: (dataCommentId: string, commentId: string) => void;
	onLikeComment: (dataCommentId: string, commentId: string) => void;
}

export function CommentItem({ comment, onDeleteComment, onLikeComment }: CommentItemProps) {
	const { user, } = useUser()
	const isOwner = user?._id === comment.user._id;

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
				}

				<strong>Responder</strong>
			</Footer>

		</Container>
	)
}