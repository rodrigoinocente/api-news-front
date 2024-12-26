import { ButtonSpace } from "./ButtonStyled";

interface IButton{
    type: "button" | "submit" | "reset";
    text: string;
    onClick?: () => void;
}

export function Button ({type, text, onClick}: IButton){
    
    return <ButtonSpace type={type} onClick={onClick}>{text}</ButtonSpace>
}