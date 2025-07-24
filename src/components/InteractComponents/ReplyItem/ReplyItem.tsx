import { useUser } from "../../../Context/userCustomHook";
import { ApiReplyData } from "../../../vite-env";
import { NewsTimestamps } from "../../NewsTimestamps/NewsTimestamps";
import { UserAvatar } from "../../UserAvatar/UserAvatar";
import { Container, Footer, Header } from "./ReplyItemStyled";
import iconTrash from "../../../images/icons/icon-trash.png";
import iconLike from "../../../images/icons/icon-like.png";

interface ReplyItemProps {
  reply: ApiReplyData;
  onDeleteReply: (dataReplyId: string, replyId: string) => void;
}

export function ReplyItem({ reply, onDeleteReply }: ReplyItemProps) {
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

      <Footer>
          <img src={iconLike} alt="Ícone para curtir o comentário" />
          <span>{reply.likeCount}</span>
      </Footer>
    </Container>
  )
}