import { useNavigate } from "react-router-dom";
import { CardBannerProps } from "../../vite-env";
import { CardContainer, SubtitlePosition, TitlePosition } from "./CardBannerStyled";


export function CardBanner({ news, type }: CardBannerProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/news/${news._id}`)
    }

    return (
        <CardContainer onClick={handleClick} >
            <img src={news.banner} alt="Imagem da Notícia" />
            <TitlePosition type={type}>
                <p>{news.title}</p>
            </TitlePosition>

            {news.subtitle && (
                <SubtitlePosition>
                    <span>{news.subtitle}</span>
                </SubtitlePosition>
            )}
        </CardContainer>
    )
}