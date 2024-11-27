import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getNewsByCategory } from "../../service/newsService";
import { useParams } from "react-router-dom";
import { INews } from "../../vite-env";
import { Card } from "../../components/Card/Card";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { CategoryBody } from "./CategoryStyled";

export function Category() {
    const { category } = useParams<{ category: string }>();
    const [news, setNews] = useState([])

    async function findNewsByCategory(category: string) {
        try {
            const newsResponse = await getNewsByCategory(category)
            setNews(newsResponse.data.news)
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    }

    useEffect(() => {
        if (category) {
            findNewsByCategory(category);
        }
    }, [category]);
    return (
        <>
            <Navbar />
            <NavbarHome />

            <CategoryBody>
                {news.map((news: INews) => {
                    return <Card
                        title={news.title}
                        key={news._id}
                        subtitle={news.subtitle}
                        banner={news.banner}
                        category={news.category}
                        _id={news._id}
                    />
                })}
            </CategoryBody>
        </>
    )
}