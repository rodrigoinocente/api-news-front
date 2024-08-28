import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../../Data";

export function Home() {
    return (
        <>
            <Navbar />
            {news.news.map((news) => {
                return <Card title={news.title} key={0} text={news.text} banner={news.banner} user={news.user} likeCount={news.likeCount} commentCount={news.commentCount} />
            })}
        </>)
}