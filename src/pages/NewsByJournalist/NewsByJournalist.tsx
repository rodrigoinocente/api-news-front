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
import arrowDown from "../../images/icons/icon-arrowDown.png"

export function NewsByJournalist() {
    const { journalistId } = useParams<{ journalistId: string }>()
    const [journalist, setJournalist] = useState<IJournalist | null>(null)
    const [news, setNews] = useState<INews[]>([])
    const [column, setColumn] = useState<IColumn[]>([])

    const [isLoading, setIsLoading] = useState(false)

    const [hasMoreColumn, setHasMoreColumn] = useState(true)
    const [hasMoreNews, setHasMoreNews] = useState(true)

    const [offsetNews, setOffsetNews] = useState(0)
    const [offsetColumn, setOffsetColumn] = useState(0)

    const limitNews = 10
    const limitColumn = 4

    const loadColumn = async (journalistId: string, offsetColumn: number) => {
        try {
            const columnResponse = await getColumnByJournalist(journalistId, limitColumn, offsetColumn)
            if (offsetColumn === 0)
                setColumn(columnResponse.data.column)
            else
                setColumn(column.concat(columnResponse.data.column))

            setOffsetColumn(columnResponse.data.nextOffset)
            setHasMoreColumn(columnResponse.data.hasMore)
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

    const loadNews = async (journalistId: string, offsetNews: number) => {
        try {
            setIsLoading(true)
            const newsResponse = await getNewsByJournalist(journalistId, limitNews, offsetNews)

            if (offsetNews === 0)
                setNews(newsResponse.data.news)
            else
                setNews(news.concat(newsResponse.data.news))

            setOffsetNews(newsResponse.data.nextOffset)
            setHasMoreNews(newsResponse.data.hasMore)
        } catch (error) {
            console.error("Erro ao carregar notícias:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (journalistId) {
            loadJournalist(journalistId)
            loadColumn(journalistId, 0)
            loadNews(journalistId, 0)
        }
    }, [journalistId])

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement

            if (!isLoading && hasMoreNews && scrollHeight - scrollTop <= clientHeight + 100) {
                loadNews(journalistId as string, offsetNews)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isLoading, hasMoreNews, offsetNews, journalistId])

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
                            />
                        ))
                    )}
                    {hasMoreColumn && (
                        <img src={arrowDown} alt="Imagem de uma seta para baixo. Para carregamento de mais Colunas"
                            onClick={() => loadColumn(journalistId as string, offsetColumn)} />
                    )}
                    {!hasMoreColumn && <span>Não há mais Coluna.</span>}
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