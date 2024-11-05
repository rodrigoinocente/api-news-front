import { Card } from "../../components/Card/Card";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { getAllNews, getTopNews } from "../../service/newsService";
import { useEffect, useState } from "react";
import { INews } from "../../vite-env";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";

export function Home() {
    const [news, setNews] = useState([])
    const [newsTop, setNewsTop] = useState<INews | null>(null)
    const [loading, setLoading] = useState(true)

    async function findNews() {
        try {
            const newsResponse = await getAllNews()
            setNews(newsResponse.data.news)

            const newsTopResponse = await getTopNews()
            setNewsTop(newsTopResponse.data)
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        findNews()
    }, [])

    return (
        <>
            {loading ? <Spinner /> : (
                <>
                    <HomeHeader>
                        {newsTop && (
                            <Card
                                top={true}
                                title={newsTop.title}
                                key={newsTop._id}
                                text={newsTop.text}
                                banner={newsTop.banner}
                                user={newsTop.user}
                                likeCount={newsTop.likeCount}
                                commentCount={newsTop.commentCount}
                                _id={newsTop._id}
                            />
                        )}
                    </HomeHeader >
                    <HomeBody>
                        {news.map((news: INews) => {
                            return <Card title={news.title}
                                key={news._id}
                                text={news.text}
                                banner={news.banner}
                                user={news.user}
                                likeCount={news.likeCount}
                                commentCount={news.commentCount} _id={news._id}
                            />
                        })}
                    </HomeBody>
                </>
            )}
        </>
    )
}