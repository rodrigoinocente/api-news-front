import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getNewsByCategory } from "../../service/newsService";
import { useParams } from "react-router-dom";
import { INews } from "../../vite-env";
import { Card } from "../../components/Card/Card";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { CategoryBody } from "./CategoryStyled";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";

export function Category() {
    const { category } = useParams<{ category: string }>()
    const [news, setNews] = useState<INews[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const limit = 10

    const loadNews = async (category: string, offset: number) => {
        try {
            setIsLoading(true)
            const newsResponse = await getNewsByCategory(category, limit, offset)

            if (offset === 0)
                setNews(newsResponse.data.news)
            else
                setNews(news.concat(newsResponse.data.news))

            setOffset(newsResponse.data.nextOffset)
            setHasMore(newsResponse.data.hasMore)
        } catch (error) {
            console.error("Erro ao carregar notícias:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (category) {
            setNews([])
            setOffset(0)
            setHasMore(true)
            loadNews(category, 0)
        }
    }, [category])

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

            if (!isLoading && hasMore && scrollHeight - scrollTop <= clientHeight + 100) {
                loadNews(category as string, offset)
            }
        };

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [isLoading, hasMore, offset, category])
    
    return (
        <>
            <Navbar />
            <NavbarHome />

            <CategoryBody>
                {news.map((newsItem) => (
                    <Card
                        title={newsItem.title}
                        key={newsItem._id}
                        subtitle={newsItem.subtitle}
                        banner={newsItem.banner}
                        category={newsItem.category}
                        _id={newsItem._id}
                    />
                ))}

                {isLoading && <Spinner />}
                {!hasMore && <span>Não há mais notícias.</span>}
            </CategoryBody>
        </>
    )
}