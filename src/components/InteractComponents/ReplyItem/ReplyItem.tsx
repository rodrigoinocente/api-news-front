import { useUser } from "../../../Context/userCustomHook";
import { ApiReplyData } from "../../../vite-env";
import { NewsTimestamps } from "../../NewsTimestamps/NewsTimestamps";
import { UserAvatar } from "../../UserAvatar/UserAvatar";
import { Container, Footer, Header } from "./ReplyItemStyled";
import iconTrash from "../../../images/icons/icon-trash.png";
import iconLike from "../../../images/icons/icon-like.png";
import iconLikeCheck from "../../../images/icons/icon-likeCheck.png";

interface ReplyItemProps {
  reply: ApiReplyData;
  onDeleteReply: (dataReplyId: string, replyId: string) => void;
  onLikeReply: (dataReplyId: string, replyId: string) => void;
}

export function ReplyItem({ reply, onDeleteReply, onLikeReply }: ReplyItemProps) {
  const { user } = useUser()
  const isOwner = user?._id === reply.user._id;

  return (
    <Container>
      <Header>
        <div id="right">
          <UserAvatar user={reply.user} size="2rem" />

          <div id="nameAndTime">
            <strong>{reply.user.username}</strong>
            <NewsTimestamps publishedAt={new Date(reply.createdAt)} type="card" />
          </div>
        </div>

        {isOwner &&
          <div id="trash" onClick={() => onDeleteReply(reply.documentId, reply._id)}>
            <img src={iconTrash} alt="Ícone para exclusão do comentário" />
          </div>
        }
      </Header>

      <div id="content">
        <p>{reply.content}</p>
      </div>

      <Footer onClick={() => onLikeReply(reply.documentId, reply._id)}>
          {!reply.isLiked ?
            <img src={iconLike} alt="Ícone para curtir o comentário" />
            :
            <img src={iconLikeCheck} alt="Ícone do comentário curtido" />
          }
          <span>{reply.likeCount}</span>
      </Footer>
    </Container>
  )
}