import { INews } from "../../vite-env";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";
import like from "../../images/icons/icon-like.png"
import comments from "../../images/icons/icon-comments.png"
import { TextLimit } from "../TextLimit/TextLimit";

export function Card({ title, text, banner, likeCount, commentCount, top }: INews) {
    return (
        <CardContainer>
            <CardBody >
                <div>
                    <CardHeader top={top}>
                        <h2>{title}</h2>
                        <TextLimit text={text} limit={255} />
                    </CardHeader>
                    <CardFooter>
                        <section>
                            <img src={like} alt="Icone do Like" />
                            <span>{likeCount}</span>
                        </section>
                        <section>
                            <img src={comments} alt="Icone dos Comentários" />
                            <span>{commentCount}</span>
                        </section>
                    </CardFooter>
                </div>
                <img src={banner} alt="Imagem da Notícia" />
            </CardBody>

        </CardContainer>
    )
}