import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchNews } from "../../service/newsService"
import { Card } from "../../components/Card/Card"
import { INews } from "../../vite-env"
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled"

export function Search() {
    const { title } = useParams()
    const [news, setNews] = useState<INews[]>([])

    useEffect(() => {
        async function search() {
            try {
                const newsResponse
                    = await searchNews(title || "")
                setNews(newsResponse.data)
            } catch (err) {
                console.log(err);
                setNews([])
            }
        }
        search()
    }, [title])

    return (
        <>
            <TextResults>
                {news.length ? <h3>Exibindo {news.length} resultados para <span>{title}</span></h3> :
                    <h3>Não encontramos resultado para <span>{title}</span></h3>}
            </TextResults>
            <ContainerResults>
                <SearchNews>
                    {news && news.map((news: INews) => {
                        return <Card title={news.title}
                            key={news._id}
                            text={news.text}
                            banner={news.banner}
                            user={news.user}
                            likeCount={news.likeCount}
                            commentCount={news.commentCount} _id={news._id}
                        />
                    })}
                </SearchNews>
            </ContainerResults>

        </>
    )
}