import { INews } from "../../vite-env";
import { CardBody, CardContainer, CardFooter } from "./CardStyled";
import like from "../../images/icons/icon-like.png"
import comments from "../../images/icons/icon-comments.png"
import { TextLimit } from "../TextLimit/TextLimit";

export function Card({ title, text, banner, likeCount, commentCount }: INews) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{title}</h2>
                    <img src={banner} alt="Imagem da Notícia" />
                </div>
                <TextLimit text={text} limit={255}/>
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