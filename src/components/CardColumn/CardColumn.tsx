import { useNavigate } from "react-router-dom";
import { ICardColumn } from "../../vite-env";
import { NewsTimestamps } from "../NewsTimestamps/NewsTimestamps";
import { CardContainer } from "./CardColumnStyled";

export function CardColumn({ title, _id, publishedAt }: ICardColumn) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/column/${_id}`);
    };

    return (
        <CardContainer onClick={handleClick}>
            <h2>{title}</h2>

            {publishedAt && (
                <NewsTimestamps
                    publishedAt={publishedAt}
                    type="card"
                />
            )}
        </CardContainer>
    )
}