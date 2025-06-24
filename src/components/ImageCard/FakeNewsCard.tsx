import { useNavigate } from "react-router-dom";
import { CardBannerProps } from "../../vite-env";
import { CardContainer, FakeNewsTag, InfoPosition } from "./FakeNewsCardStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";

export function FakeNewsCard({ news }: CardBannerProps) {
    const navigate = useNavigate()

    return (
        <CardContainer
            onClick={() => navigate(`/news/${news._id}`)}
            $banner={news.banner}
        >

            <FakeNewsTag id="animation">
                <p>FAKE NEWS</p>
            </FakeNewsTag>

            <InfoPosition >
                <h2>{news.title}</h2>
                <NewsTimestamps publishedAt={news.publishedAt} type="card" />
            </InfoPosition>
        </CardContainer>
    )
}