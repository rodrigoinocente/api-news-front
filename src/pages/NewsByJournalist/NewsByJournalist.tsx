import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getJournalistById, getNewsByJournalist } from "../../service/newsService"
import { IColumn, IJournalist, INews } from "../../vite-env"
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner"
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton"
import { Card } from "../../components/Card/Card"
import { Navbar } from "../../components/Navbar/Navbar"
import { NavbarHome } from "../../components/NavBarHome/NavBarHome"
import { Column, InfoHead, JournlisSection, LastNewsCard, LoadCard } from "./NewsByJournalistStyled"
import { getColumnByJournalist } from "../../service/columnService"
import { CardColumn } from "../../components/CardColumn/CardColumn"
import { CardBanner } from "../../components/CardBanner/CardBanner"

export function NewsByJournalist() {
    const { journalistId } = useParams<{ journalistId: string }>()
    const [news, setNews] = useState<INews[]>([])
    const [journalist, setJournalist] = useState<IJournalist | null>(null)
    const [column, setColumn] = useState<IColumn[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [offset, setOffset] = useState(0)
    const limit = 10

    const loadColumn = async (journalistId: string) => {
        try {
            const newsResponse = await getColumnByJournalist(journalistId, 5, 0)
            setColumn(newsResponse.data.column)
        } catch (error) {
            console.log("Erro ao carregar coluna:", error);
        }
    }

    const loadJournalist = async (journalistId: string) => {
        try {
            const newsResponse = await getJournalistById(journalistId)
            setJournalist(newsResponse.data)
        } catch (error) {
            console.log("Erro ao carregar jornalista:", error);
        }
    }

    const loadNews = async (journalistId: string, offset: number) => {
        try {
            setIsLoading(true)
            const newsResponse = await getNewsByJournalist(journalistId, limit, offset)

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
        if (journalistId) {
            setNews([])
            setOffset(0)
            setHasMore(true)
            loadJournalist(journalistId)
            loadColumn(journalistId)
            loadNews(journalistId, 0)
        }
    }, [journalistId])

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement

            if (!isLoading && hasMore && scrollHeight - scrollTop <= clientHeight + 100) {
                loadNews(journalistId as string, offset)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isLoading, hasMore, offset, journalistId])

    return (
        <>
            <Navbar />
            <NavbarHome />

            {journalist && (
                <JournlisSection>
                    <img src={journalist.profilePicture} alt="Foto do Jornalista" />

                    <div>
                        <h2>{journalist.name}</h2>
                        <p>{journalist.bio}</p>
                    </div>
                </JournlisSection>
            )}

            <InfoHead>
                <LastNewsCard>
                    <mark>ÚLTIMA NOTÍCIA</mark>
                    {news.length && (
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
                    <h3>Coluna</h3>

                    {column.length && (
                        column.map((columnItem) => (
                            <CardColumn
                                title={columnItem.title}
                                key={columnItem._id}
                                _id={columnItem._id}
                                publishedAt={columnItem.publishedAt}
                                type="card"
                            />
                        ))
                    )}

                    <span>Ver mais</span>

                </Column>
            </InfoHead>

            <LoadCard>
                <span>Publicações</span>

                {news.length && (
                    news.slice(1).map((newsItem) => (
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
            {!hasMore && <span>Não há mais notícias.</span>}
            <ScrollToTopButton />
        </>
    )
}