import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getNewsByCategory } from "../../service/newsService";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryType, ICardColumn, INews } from "../../vite-env";
import { Card } from "../../components/Card/Card";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { BodyHead, CardsHead, Column, LoadCard, NewsAndColumn } from "./NewsbyCategoryStyled";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton";
import { CardBanner } from "../../components/CardBanner/CardBanner";
import { useBackground } from "../../Context/useBackgroundCustomHook";
import { getColumnByCategory } from "../../service/columnService";
import { CardColumn } from "../../components/CardColumn/CardColumn";
import { Button } from "../../components/Button/Button";

export function NewsbyCategory() {
    const { category } = useParams<{ category: CategoryType }>()

    const [news, setNews] = useState<INews[]>([])
    const [column, setColumn] = useState<ICardColumn[]>([])
    const [hasMoreNews, setHasMoreNews] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const limitNews = 10
    const limitColumn = 3
    const { updateBackground } = useBackground()
    const navigate = useNavigate()

    const loadNews = async (category: string, offset: number) => {
        try {
            setIsLoading(true)
            const newsResponse = await getNewsByCategory(category, limitNews, offset)

            if (offset === 0)
                setNews(newsResponse.data.news)
            else
                setNews(news.concat(newsResponse.data.news))

            setOffset(newsResponse.data.nextOffset)
            setHasMoreNews(newsResponse.data.hasMore)
        } catch (error) {
            console.error("Erro ao carregar notícias:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const loadColumn = async (category: string, offset: number) => {
        try {
            setIsLoading(true)
            const columnResponse = await getColumnByCategory(category, limitColumn, offset, false)
            setColumn(columnResponse.data.column)

        } catch (error) {
            console.error("Erro ao carregar coluna:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleClick = () => {
        navigate(`/columnByCategory/${category}`)
    }

    useEffect(() => {
        if (category) {
            setNews([])
            setColumn([])
            setOffset(0)
            setHasMoreNews(true)
            updateBackground(category)
            loadColumn(category, 0)
            loadNews(category, 0)
        }
    }, [category])

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement

            if (!isLoading && hasMoreNews && scrollHeight - scrollTop <= clientHeight + 100) {
                loadNews(category as string, offset)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isLoading, hasMoreNews, offset, category])

    return (
        <>
            <Navbar />
            <NavbarHome />

            <BodyHead>
                <NewsAndColumn>

                        {news.length > 0 && (
                            <CardBanner
                                news={news[0]}
                                key={news[0]._id}
                                type="grey"
                                cardTitle="ÚLTIMA NOTÍCIA"
                            />
                        )}

                    <Column>
                        <h4>Coluna</h4>
                        {column.length && (
                            column.map((columnItem) => (
                                <CardColumn
                                    key={columnItem._id}
                                    _id={columnItem._id}
                                    title={columnItem.title}
                                    publishedAt={columnItem.publishedAt}
                                />
                            ))
                        )}
                        <Button type="button" text={"Ver mais"} onClick={handleClick} />
                    </Column>
                </NewsAndColumn>

                <CardsHead>
                    {news.length > 1 && (
                        news.slice(1, 5).map((newsItem) => (
                            <CardBanner
                                news={newsItem}
                                key={newsItem._id}
                            />
                        ))
                    )}
                </CardsHead>
            </BodyHead>

            <LoadCard>
                {news.length > 5 && (
                    news.slice(5).map((newsItem) => (
                        <Card
                            title={newsItem.title}
                            key={newsItem._id}
                            subtitle={newsItem.subtitle}
                            banner={newsItem.banner}
                            _id={newsItem._id}
                            publishedAt={newsItem.publishedAt}
                            edited={newsItem.edited}
                            type="news"
                        />
                    ))
                )}
            </LoadCard>

            {isLoading && <Spinner />}
            {!hasMoreNews && <span>Não há mais notícias.</span>}
            <ScrollToTopButton />
        </>
    )
}