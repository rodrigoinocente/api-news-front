import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { AuthData } from '../../../vite-env';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../../schemas/signupSchema';
import { Input } from '../../Input/Input';
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
                    {errorsSignup.name && <span className="errorSpanModal" >{errorsSignup.name.message}</span>}

                    <Input type="email" placeholder="Email" name="email" register={registerSignup} />
                    {errorsSignup.email && <span className="errorSpanModal">{errorsSignup.email.message}</span>}
                    {emailError && <span >{emailError}</span>}

                    <Input type="password" placeholder="Senha" name="password" register={registerSignup} />
                    {errorsSignup.password && <span className="errorSpanModal" >{errorsSignup.password.message}</span>}

                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerSignup} />
                    {errorsSignup.confirmPassword && <span className="errorSpanModal" >{errorsSignup.confirmPassword.message}</span>}

                    <Button type="submit" text="Cadastrar" />
                </form>

            </ObjectModal>
        </>,
        document.getElementById("modal")!
    )
}