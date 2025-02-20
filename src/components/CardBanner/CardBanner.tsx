import { useNavigate } from "react-router-dom";
import { CardBannerProps } from "../../vite-env";
import { CardContainer, CardTitle, InfoPosition } from "./CardBannerStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";
import { reduceText } from "../../utils/utils";

export function CardBanner({ news, type, cardTitle, maxTitleLength, maxSubtitleLength }: CardBannerProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/news/${news._id}`)
    }

    return (
        <CardContainer onClick={handleClick} type={type}>
            {cardTitle && (
                <CardTitle>
                    <mark>{cardTitle}</mark>
                </CardTitle>
            )}
            <img src={news.banner} alt="Imagem da Notícia" />

            <InfoPosition type={type}>
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
            </InfoPosition>

        </CardContainer>
    )
}