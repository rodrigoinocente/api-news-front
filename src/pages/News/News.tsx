import { useParams } from "react-router-dom"
import { getNewsById } from "../../service/newsService";
import { useEffect, useState } from "react";
import { IJournalist, INews } from "../../vite-env";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { useBackground } from "../../Context/useBackgroundCustomHook";
import { ContentRead } from "../../components/ContentReader/ContentReader";

export function News() {
    const { newsId } = useParams<{ newsId: string }>()
    const [news, setNews] = useState<INews | null>()
    const [journalist, setJournalist] = useState<IJournalist | null>(null)
    const { updateBackground } = useBackground()

    const findNews = async () => {
        if (!newsId) return console.error("newsId is undefined")

        try {
            const newsResponse = await getNewsById(newsId)
            setNews(newsResponse.data)
            setJournalist(newsResponse.data.authorId)
        } catch (error) {
            console.error("Erro ao carregar notícias:", error)
        }
    }

    useEffect(() => {
        updateBackground(null)
        findNews();
    }, [newsId]);

    return (
        <>
            <Navbar />
            <NavbarHome />
            {news && journalist && (
                <ContentRead
                    publication={news}
                    journalist={journalist}
                    type="news"
                />
            )}
        </>
    )
}