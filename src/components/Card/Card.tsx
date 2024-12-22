import { useNavigate } from "react-router-dom";
import { ICardNews } from "../../vite-env";
import { CardBody, CardContainer, CardHeader } from "./CardStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";

export function Card({ title, subtitle, banner, _id, publishedAt, edited }: ICardNews) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/news/${_id}`);
    };
    return (
        <CardContainer onClick={handleClick}>
            <CardBody >
                <div>
                    <CardHeader>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </CardHeader>

                        <NewsTimestamps
                            publishedAt={publishedAt}
                            edited={edited}
                            type= "card"
                        />
                </div>
                <img src={banner} alt="Imagem da Notícia" />
            </CardBody>

        </CardContainer>
    )
}