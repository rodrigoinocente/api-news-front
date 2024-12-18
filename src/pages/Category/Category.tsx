import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getNewsByCategory } from "../../service/newsService";
import { useParams } from "react-router-dom";
import { CategoryType, ICardColumn, INews } from "../../vite-env";
import { Card } from "../../components/Card/Card";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { BodyHead, CardsHead, Column, LastNewsCard, LoadCard, NewsAndColumn } from "./CategoryStyled";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton";
import { CardBanner } from "../../components/CardBanner/CardBanner";
import tecnologia from "../../images/banners/tecnologia.jpg";
import esportes from "../../images/banners/esporte.jpg";
import ciencia from "../../images/banners/ciencia.jpg";
import politica from "../../images/banners/politica.jpg";
import saude from "../../images/banners/saude.jpg";
import arte from "../../images/banners/arte.jpg";
import { useBackground } from "../../Context/useBackgroundCustomHook";
import { getColumnByCategory } from "../../service/columnService";
import { CardColumn } from "../../components/CardColumn/CardColumn";
import { Button } from "../../components/Button/Button";

export function Category() {
    const { category } = useParams<{ category: CategoryType }>()

    const [news, setNews] = useState<INews[]>([])
    const [column, setColumn] = useState<ICardColumn[]>([])
    const [hasMoreNews, setHasMoreNews] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const limitNews = 10
    const limitColumn = 3
    const { updateBackground } = useBackground()

    const categoryBackgrounds = {
        Tecnologia: tecnologia,
        Esportes: esportes,
        Ciência: ciencia,
        Política: politica,
        Saúde: saude,
        Arte: arte,
        Outros: null
    }

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
            const columnResponse = await getColumnByCategory(category, limitColumn, offset)
            setColumn(columnResponse.data.column)

        } catch (error) {
            console.error("Erro ao carregar coluna:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (category) {
            setNews([])
            setColumn([])
            setOffset(0)
            setHasMoreNews(true)
            updateBackground(categoryBackgrounds[category])
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
    console.log("COLUMN: ", column);
    console.log("HasMOre: ", hasMoreNews);
    return (
        <>
            <Navbar />
            <NavbarHome />

            <BodyHead>
                <NewsAndColumn>
                    <LastNewsCard>
                        <mark>ÚLTIMA NOTÍCIA</mark>
                        {news.length > 0 && (
                            <CardBanner
                                title={news[0].title}
                                key={news[0]._id}
                                subtitle={news[0].subtitle}
                                banner={news[0].banner}
                                _id={news[0]._id}
                            />
                        )}
                    </LastNewsCard>

                    <Column>
                        <h4>Coluna</h4>
                        {column.length && (
                            column.map((columnItem) => (
                                <CardColumn
                                    key={columnItem._id}
                                    _id={columnItem._id}
                                    title={columnItem.title}
                                    publishedAt={columnItem.publishedAt}
                                    type="card"
                                />
                            ))
                        )}
                        <Button type="button" text={"Ver mais"} />
                    </Column>
                </NewsAndColumn>

                <CardsHead>
                    {news.length > 1 && (
                        news.slice(1, 5).map((newsItem) => (
                            <CardBanner
                                title={newsItem.title}
                                key={newsItem._id}
                                subtitle={newsItem.subtitle}
                                banner={newsItem.banner}
                                _id={newsItem._id} />
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
                            type="card"
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