import { useParams } from "react-router-dom"

export function News() {
    const { newsId } = useParams()
    console.log("NEWSID: ", newsId);

    return (
        <>
            <h1>HELLO, WORD!</h1>
        </>
    )
}