import { useNavigate } from "react-router-dom";
import { ICardNews } from "../../vite-env";
import { CardContainer, CardInfo } from "./CardBannerStyled";

export function CardBanner({ title, subtitle, banner, _id }: ICardNews) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/news/${_id}`);
    };

    return (
        <CardContainer onClick={handleClick}>
            <img src={banner} alt="Imagem da Notícia" />
            <CardInfo>
                <p>{title}</p>
                <span>{subtitle}</span>
            </CardInfo>
        </CardContainer>
    )
}