import { ICardNews } from "../../vite-env";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";

export function Card({ title, subtitle, category, banner }: ICardNews) {
    return (
        <CardContainer>
            <CardBody >
                <div>
                    <CardHeader>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </CardHeader>
                    <CardFooter>
                            <span>#{category}</span>
                    </CardFooter>
                </div>
                <img src={banner} alt="Imagem da Notícia" />
            </CardBody>

        </CardContainer>
    )
}