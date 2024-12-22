import { useNavigate } from "react-router-dom";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";
import { JournalistSectionStyled } from "./JournalistSectionStyled";
import { IJournalistSection } from "../../vite-env";

export function JournalistSection({ profilePicture, journalistName, journalistId, publishedAt, edited }: IJournalistSection) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/newsByJournalist/${journalistId}`);
    }

    return (
        <JournalistSectionStyled>
            <img src={profilePicture} alt="Foto do Jornalista" onClick={handleClick} />
            <div>
                <p>Por: <span onClick={handleClick}>{journalistName} </span></p>
                <NewsTimestamps
                    publishedAt={publishedAt}
                    edited={edited}
                    type="full"
                />
            </div>
        </JournalistSectionStyled>
    )
}