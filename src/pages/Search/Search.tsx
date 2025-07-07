import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchNews } from "../../service/newsService"
import { Card } from "../../components/Card/Card"
import { INews } from "../../vite-env"
import { Container, ContainerResults, TextResults } from "./SearchStyled"
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner"
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton"

export function Search() {
    const { title } = useParams()
    const [news, setNews] = useState<INews[]>([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        async function search() {
            try {
                const newsResponse = await searchNews(title as string)
                setNews(newsResponse.data)
            } catch (err) {
                console.log(err);
                setNews([])
            } finally {
                setIsloading(false)
            }
        }
        search()
    }, [title])

    return (
        <>
            {isLoading ? <Spinner /> :
                <Container>
                    <TextResults>
                        {news.length > 0 ? <h3>Exibindo {news.length} resultados para <span>{title}</span></h3> :
                            <h3>Não encontramos resultado para <span>{title}</span></h3>}
                    </TextResults>

                    <ContainerResults>
                        {news && news.map((newsItem: INews) => {
                            return <Card
                                title={newsItem.title}
                                key={newsItem._id}
                                subtitle={newsItem.subtitle}
                                banner={newsItem.banner}
                                category={newsItem.category}
                                _id={newsItem._id}
                                publishedAt={newsItem.publishedAt} 
                                edited={newsItem.edited}                                />
                        })}
                    </ContainerResults>
                </Container>
            }
            <ScrollToTopButton />
        </>
    )
}