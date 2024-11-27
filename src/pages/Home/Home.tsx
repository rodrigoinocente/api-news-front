import { Card } from "../../components/Card/Card";
import { HomeBody } from "./HomeStyled";
import { getAllNews } from "../../service/newsService";
import { useEffect, useState } from "react";
import { INews } from "../../vite-env";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";

export function Home() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    async function findNews() {
        try {
            const newsResponse = await getAllNews()
            setNews(newsResponse.data.news)

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
                    <HomeBody>
                        {news.map((news: INews) => {
                            return <Card
                                title={news.title}
                                key={news._id}
                                subtitle={news.subtitle}
                                banner={news.banner}
                                category={news.category}
                                _id={news._id}
                            />
                        })}
                    </HomeBody>
                </>
            )}
        </>
    )
}