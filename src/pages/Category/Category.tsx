import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getNewsByCategory } from "../../service/newsService";
import { useParams } from "react-router-dom";
import { INews } from "../../vite-env";
import { Card } from "../../components/Card/Card";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { BodyHead, CardsHead, LastNewsCard, LoadCard } from "./CategoryStyled";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton";
import { CardBanner } from "../../components/CardBanner/CardBanner";

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
            <BodyHead>

                <CardsHead>
                    {news.length > 1 && (
                        news.slice(1, 5).map((newsItem) => (
                            <CardBanner
                                title={newsItem.title}
                                key={newsItem._id}
                                subtitle={newsItem.subtitle}
                                banner={newsItem.banner}
                                category={newsItem.category}
                                _id={newsItem._id} />
                        ))
                    )}
                </CardsHead>

                <LastNewsCard>
                    <mark>ÚLTIMA NOTÍCIA</mark>
                    {news.length > 0 && (
                        <CardBanner
                            title={news[0].title}
                            key={news[0]._id}
                            subtitle={news[0].subtitle}
                            banner={news[0].banner}
                            category={news[0].category}
                            _id={news[0]._id} />
                    )}
                </LastNewsCard>
            </BodyHead>

            <LoadCard>
                {news.length > 5 && (
                    news.slice(5).map((newsItem) => (
                        <Card
                            title={newsItem.title}
                            key={newsItem._id}
                            subtitle={newsItem.subtitle}
                            banner={newsItem.banner}
                            category={newsItem.category}
                            _id={newsItem._id}
                        />
                    ))
                )}  
            </LoadCard>

            {isLoading && <Spinner />}
            {!hasMore && <span>Não há mais notícias.</span>}
            <ScrollToTopButton />
        </>
    )
}