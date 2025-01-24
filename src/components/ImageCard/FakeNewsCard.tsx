import { useNavigate } from "react-router-dom";
import { CardBannerProps } from "../../vite-env";
import { CardContainer, InfoPosition } from "./FakeNewsCardStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";
import { reduceText } from "../../utils/textUtils";

export function FakeNewsCard({ news, maxTitleLength, type }: CardBannerProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/news/${news._id}`)
    }

    return (
        <CardContainer onClick={handleClick} $banner={news.banner}>

            <InfoPosition type={type}>
                {maxTitleLength ? (
                    <h2>{reduceText(news.title, maxTitleLength)}</h2>
                ) : (
                    <h2>{news.title}</h2>
                )}

                <NewsTimestamps
                    publishedAt={news.publishedAt}
                    type="card"
                />
            </InfoPosition>

        </CardContainer>
    )
}