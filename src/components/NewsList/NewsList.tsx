import { useNavigate } from "react-router-dom";
import { INews } from "../../vite-env";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";
import { CardItem, NewsListContainer } from "./NewsListStyled";

interface NewsListListProps {
    title: string;
    news: INews[];
}

export function NewsList({ title, news }: NewsListListProps) {
    const navigate = useNavigate()

    const handleClick = (_id: string) => {
        navigate(`/news/${_id}`);
    }

    return (
        <NewsListContainer>
            <mark>{title}</mark>
            {news.map((newsItem) => (
                <CardItem onClick={() => handleClick(newsItem._id)}>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.subtitle}</p>

                    <NewsTimestamps
                        publishedAt={newsItem.publishedAt}
                        type="card"
                    />
                </CardItem>
            ))}
        </NewsListContainer>
    )
}