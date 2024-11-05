import { useParams } from "react-router-dom"

export function Search() {
    const {title} = useParams()

    return (
        <>
            <h1>Search</h1>
            <h2>{title}</h2>
        </>
    )
}