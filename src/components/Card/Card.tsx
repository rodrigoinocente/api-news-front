import { useNavigate } from "react-router-dom";
import { ICard } from "../../vite-env";
import { CardBody, CardInfo } from "./CardStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";

export function Card({ title, subtitle, banner, _id, publishedAt, edited }: ICard) {
    const navigate = useNavigate()

    return (
        <CardBody onClick={()=>navigate(`/news/${_id}`)}>
            <CardInfo>
                <h2>{title}</h2>
                <div id="underTitle">

                    <section id="subtitleAndTimes">
                        <p>{subtitle}</p>
                        <NewsTimestamps
                            publishedAt={publishedAt}
                            edited={edited}
                            type="card"
                        />
                    </section>

                    <img src={banner} alt="Imagem da Notícia" />
                </div>
            </CardInfo>
        </CardBody>

    )
}