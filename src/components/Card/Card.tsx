import { INews } from "../../vite-env";
import { CardBody, CardContainer, CardFooter } from "./CardStyled";
import like from "../../images/icons/icon-like.png"
import comments from "../../images/icons/icon-comments.png"

export function Card({ title, text, banner, likeCount, commentCount }: INews) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <img src={banner} alt="Imagem da Notícia" />
            </CardBody>
            <CardFooter>
                <div>
                    <img src={like} alt="Icone do Like" />
                    <span>{likeCount}</span>
                </div>
                <div>
                    <img src={comments} alt="Icone dos Comentários" />
                    <span>{commentCount}</span>
                </div>
            </CardFooter>
        </CardContainer>
    )
}