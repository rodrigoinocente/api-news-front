import { useNavigate } from "react-router-dom";
import { ICard } from "../../vite-env";
import { CardBody, CardInfo } from "./CardStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";

export function Card({ title, subtitle, banner, _id, publishedAt, edited, journalistProfile, journalistName, type }: ICard) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (type === "column") {
            navigate(`/column/${_id}`)
            return
        }
        navigate(`/news/${_id}`)
    }

    return (
        <CardBody onClick={handleClick}>
            {type === "column" && (
                <p className="column">COLUNA</p>
            )}

            <CardInfo>
                <h2>{title}</h2>
                <div id="underTitle">
                    <section id="subtitleAndTimes">

                        <p lang="pt-BR">{subtitle}</p>
                        <NewsTimestamps
                            publishedAt={publishedAt}
                            edited={edited}
                            type="card"
                        />

                        {type === "column" && (
                            <div className="journalist">

                                <p>Por:  <span>{journalistName}</span></p>
                                <img src={journalistProfile} alt="Foto do jornalista" />
                            </div>
                        )}


                    </section>


                    <img src={banner} alt="Imagem da Notícia" />
                </div>
            </CardInfo>
        </CardBody>

    )
}