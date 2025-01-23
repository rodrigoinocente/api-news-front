import { useNavigate } from "react-router-dom";
import { CardBannerProps } from "../../vite-env";
import { CardContainer } from "./VerticalCardStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";
import { reduceText } from "../../utils/textUtils";

export function VerticalCard({ news, type, maxTitleLength, maxSubtitleLength }: CardBannerProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/news/${news._id}`)
    }

    return (
        <CardContainer onClick={handleClick} type={type} key={news._id}>
            <img src={news.banner} alt="Imagem da Notícia" />

            {maxTitleLength ? (
                <h2>{reduceText(news.title, maxTitleLength)}</h2>
            ) : (
                <h2>{news.title}</h2>
            )}

            {news.subtitle && maxSubtitleLength ? (
                <p>{reduceText(news.subtitle, maxSubtitleLength)}</p>
            ) : (
                <p>{news.subtitle}</p>
            )}

            <NewsTimestamps
                publishedAt={news.publishedAt}
                type="card"
            />

        </CardContainer>
    )
}