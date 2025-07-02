import { useNavigate } from "react-router-dom";
import { CardBody, CardInfo } from "./CardColumnPostStyled";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";
import { ICardColumnPost } from "../../vite-env";

export function CardColumnPost({ title, banner, _id, journalistProfile, journalistName, publishedAt }: ICardColumnPost) {
    const navigate = useNavigate()

    return (
        <CardBody onClick={() => navigate(`/column/${_id}`)}>
            <CardInfo>
                <span>COLUNA</span>
                <div id="info">
                    <h2>{title}</h2>

                    <div id="footer">
                        <div id="journalist">

                            <img src={journalistProfile} alt="Foto do Jornalista" />
                            <h4>{journalistName}</h4>
                        </div>
                        <NewsTimestamps publishedAt={publishedAt} type={"card"} />
                    </div>

                </div>
                <img id="banner" src={banner} alt="Imagem da Notícia" />
            </CardInfo>
        </CardBody>
    )
}