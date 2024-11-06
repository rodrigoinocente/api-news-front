import { ButtonSpace } from "./ButtonStyled";

interface IButton{
    type: "button" | "submit" | "reset";
    text: string;
}

export function Button ({type, text}: IButton){

    return <ButtonSpace type={type}>{text}</ButtonSpace>
}