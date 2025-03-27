import { UseFormRegister } from "react-hook-form";
import { InputSpaceAuth } from "./InputStyled"
import { AuthData } from "../../vite-env";

interface IInputSpaceAuth {
    type: string;
    placeholder: string;
    register: UseFormRegister<AuthData>;
    name: keyof AuthData;
    id: string;
    autoComplete?: string;
}

export function Input({ type, placeholder, register, name, id, autoComplete }: IInputSpaceAuth) {
    return (
        <>
            <InputSpaceAuth type={type} placeholder={placeholder} {...register(name)} id={id} autoComplete={autoComplete} />
        </>
    )
}