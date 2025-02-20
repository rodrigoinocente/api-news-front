import { useNavigate } from "react-router-dom";
import { CardBannerProps } from "../../vite-env";
import { CardContainer, FakeNewsTag, InfoPosition } from "./FakeNewsCardStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";
import { reduceText } from "../../utils/utils";
import { useState } from "react";

export function FakeNewsCard({ news, maxTitleLength, type }: CardBannerProps) {
    const [hovered, setHovered] = useState(false)
    const navigate = useNavigate()
    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setTimeout(() => setHovered(false), 1000)

    return (
        <CardContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/news/${news._id}`)}
            $banner={news.banner}
        >
            <FakeNewsTag
                className={` ${hovered ? "hovered" : ""}`}
                type={type}
            >
                <p>FAKE NEWS</p>
            </FakeNewsTag>

            <InfoPosition type={type}>
                {maxTitleLength ? (
                    <h2>{reduceText(news.title, maxTitleLength)}</h2>
                ) : (
                    <h2>{news.title}</h2>
                )}

                <NewsTimestamps publishedAt={news.publishedAt} type="card" />
            </InfoPosition>
        </CardContainer>
    )
}