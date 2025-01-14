import { useNavigate } from "react-router-dom";
import { CardBannerProps } from "../../vite-env";
import { CardContainer, InfoPosition } from "./CardBannerStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";


export function CardBanner({ news, type }: CardBannerProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/news/${news._id}`)
    }

    return (
        <CardContainer onClick={handleClick} >
            <img src={news.banner} alt="Imagem da Notícia" />

            <InfoPosition type={type}>
                <h2>{news.title}</h2>

                {news.subtitle && (
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