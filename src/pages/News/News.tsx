import { useParams } from "react-router-dom"
import { NewsBoby, NewsContent, NewsHead } from "./NewsStyled";
import { getNewsById } from "../../service/newsService";
import { useEffect, useState } from "react";
import { INews } from "../../vite-env";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { useBackground } from "../../Context/useBackgroundCustomHook";

export function News() {
    const { newsId } = useParams<{ newsId: string }>()
    const [news, setNews] = useState<INews | null>(null)
    const { updateBackground } = useBackground()

    const findNews = async () => {
        if (!newsId) return console.error("newsId is undefined")

        try {
            const newsResponse = await getNewsById(newsId)
            setNews(newsResponse.data)
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
            {news && (
                <NewsBoby>
                    <NewsHead>
                        <h1>{news.title}</h1>
                        <p className="subtitle">{news.subtitle}</p>
                        <p className="author">Por: {news.authorId.name}</p>
                        
                        <figure>
                        <img src={news.banner} alt={news.bannerAlt} />
                        <figcaption>{news.bannerFigcaption}</figcaption>
                        </figure>
                    </NewsHead>
                    <NewsContent>
                        <div dangerouslySetInnerHTML={{ __html: news.content }} />
                    </NewsContent>
                </NewsBoby>
            )}
        </>
    )
}