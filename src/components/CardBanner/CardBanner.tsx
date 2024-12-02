import { ICardNews } from "../../vite-env";
import { CardContainer, CardInfo } from "./CardBannerStyled";

export function CardBanner({ title, subtitle, banner }: ICardNews) {
    return (
        <CardContainer>
            <img src={banner} alt="Imagem da Notícia" />
            <CardInfo>
                <p>{title}</p>
                <span>{subtitle}</span>
            </CardInfo>
        </CardContainer>
    )
}