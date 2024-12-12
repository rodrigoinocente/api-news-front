import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getJournalistById, getNewsByJournalist } from "../../service/newsService"
import { IJournalist, INews } from "../../vite-env"
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner"
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton"
import { Card } from "../../components/Card/Card"
import { Navbar } from "../../components/Navbar/Navbar"
import { NavbarHome } from "../../components/NavBarHome/NavBarHome"
import { JournlisSection, LoadCard } from "./NewsByJournalistStyled"

export function NewsByJournalist() {
    const { journalistId } = useParams<{ journalistId: string }>()
    const [news, setNews] = useState<INews[]>([])
    const [journalist, setJournalist] = useState<IJournalist | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [offset, setOffset] = useState(0)
    const limit = 10

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

            <LoadCard>

                <mark>Publicações</mark>

                {news.length && (
                    news.map((newsItem) => (
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