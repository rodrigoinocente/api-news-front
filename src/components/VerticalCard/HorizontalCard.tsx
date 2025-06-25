import { useNavigate } from "react-router-dom";
import { CardBannerProps } from "../../vite-env";
import { CardContainer } from "./HorizontalCardStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";

export function HorizontalCard({ news, type }: CardBannerProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/news/${news._id}`)
    }

    return (
        <CardContainer onClick={handleClick} type={type} key={news._id}>
            <img src={news.banner} alt="Imagem da Notícia" />

            <div id="info" lang="pt-BR">
            <h2>{news.title}</h2>
            <NewsTimestamps
                publishedAt={news.publishedAt}
                type="card"
            />
            </div>
        </CardContainer>
    )
}