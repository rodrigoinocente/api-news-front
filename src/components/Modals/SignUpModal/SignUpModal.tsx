import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { AuthData } from '../../../vite-env';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../../schemas/signupSchema';
import { Input } from '../../Input/Input';
import { ErrorSpan } from '../../Navbar/NavbarStyled';
import { Button } from '../../Button/Button';
import { singUp } from "../../../service/userService";
import { constructUserFromLocalStorage, upDateLocalStorage } from '../../../utils/utils';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../../Context/userCustomHook';
import { ObjectModal } from '../ObjectModal/ObjectModal';

interface SignUpModalProps {
    isOpenSignUp: boolean;
    onCloseModal: () => void;
}

export function SignUpModal({ isOpenSignUp, onCloseModal }: SignUpModalProps) {
    const [emailError, setEmailError] = useState<string | null>(null)
    const { setUser } = useUser()

    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: { errors: errorsSignup },
        watch } = useForm<AuthData>({ resolver: zodResolver(signupSchema) })

    useEffect(() => {
        setEmailError(null)
    }, [watch("email")])

    if (!isOpenSignUp) return null

    async function onSignUpSubmit(data: AuthData) {
        try {
            const response = await singUp(data)
            upDateLocalStorage(response.data)
            setUser(constructUserFromLocalStorage())
            onCloseModal()
            
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) setEmailError(error.response?.data.message || "Ocorreu um erro desconhecido")
            else setEmailError("Ocorreu um erro desconhecido")

            console.log(error)
        }
    }

    return ReactDOM.createPortal(
        <>
            <ObjectModal title={"Login"} onCloseModal={onCloseModal}  >

                <form onSubmit={handleSubmitSignup(onSignUpSubmit)}>
                    <Input type="text" placeholder="Nome" name="name" register={registerSignup} />
                    {errorsSignup.name && <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>}

                    <Input type="email" placeholder="Email" name="email" register={registerSignup} />
                    {errorsSignup.email && <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>}
                    {emailError && <ErrorSpan>{emailError}</ErrorSpan>}

                    <Input type="password" placeholder="Senha" name="password" register={registerSignup} />
                    {errorsSignup.password && <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>}

                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerSignup} />
                    {errorsSignup.confirmPassword && <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>}

                    <Button type="submit" text="Cadastrar" />
                </form>

            </ObjectModal>
        </>,
        document.getElementById("modal")!
    )
}