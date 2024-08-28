import { INews } from "../../vite-env";

export function Card({title, text, banner, likeCount, commentCount, user }: INews) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={banner} alt="Imagem da Notícia" />
            <span>{likeCount}</span>
            <span>{commentCount}</span>
            <footer>
                <span>{user.name}</span>
                <span>{user.username}</span>
            </footer>

        </section>
    )
}