import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { HomeBody } from "./HomeStyled";
import { getAllPosts } from "../../service/postsService";
import { useEffect, useState } from "react";
import { INews } from "../../vite-env";

export function Home() {
    const [news, setNews] = useState([])

    async function findAllNews() {
        const reponse = await getAllPosts()
        setNews(reponse.data.news)
    }
    
    useEffect(() => {
        findAllNews()
    }, [])
    console.log(news);

    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map((news: INews) => {
                    return <Card title={news.title}
                        key={news._id}
                        text={news.text}
                        banner={news.banner}
                        user={news.user}
                        likeCount={news.likeCount}
                        commentCount={news.commentCount} _id={""} />


                })}
            </HomeBody>
        </>
    )
}