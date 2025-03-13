import { useUser } from "../../Context/userCustomHook";
import { constructUserFromLocalStorage, upDateLocalStorage } from "../../utils/utils";
import { useEffect, useState } from "react";
import { updateUser, userLogged } from "../../service/userService";
import { Navbar } from "../../components/Navbar/Navbar";
import { UserAvatar } from "../../components/UserAvatar/UserAvatar";
import axios from "axios";
import { ProfileContainer } from "./ProfileStyled";
import { useForm } from "react-hook-form";
import { AuthData } from "../../vite-env";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfilePictureSchema, updateEmailSchema, updateNameSchema, updatePasswordSchema } from "../../schemas/updateUser";
import { SectionForm } from "../../components/Modals/ModalStyled";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { Button } from "../../components/Button/Button";

export function Profile() {
    const { user, setUser } = useUser()
    const [loginError, setLoginError] = useState<string | null>(null)
    const [userId, setUserId] = useState<string>("")
    const [emailError, setEmailError] = useState<string | null>(null)
    const [updateResults, setUpdateResults] = useState<string | null>(null)
    const [networkError, setNetworkError] = useState<string | null>(null)

    const {
        register: registerUpdateProfilePicture,
        handleSubmit: handleSubmitupdateProfilePicture,
        formState: { errors: errorsupdatProfilePicture },
        reset: resetUpdateProfilePicture
    } = useForm<AuthData>({ resolver: zodResolver(updateProfilePictureSchema) })

    const {
        register: registerUpdateName,
        handleSubmit: handleSubmitupdateName,
        formState: { errors: errorsupdateName },
        reset: resetUpdateName
    } = useForm<AuthData>({ resolver: zodResolver(updateNameSchema) })

    const {
        register: registerUpdateEmail,
        handleSubmit: handleSubmitupdateEmail,
        formState: { errors: errorsupdateEmail },
        reset: resetUpdateUpdateEmail
    } = useForm<AuthData>({ resolver: zodResolver(updateEmailSchema) })

    const {
        register: registerUpdatePassword,
        handleSubmit: handleSubmitupdatePassword,
        formState: { errors: errorsupdatePassword },
        reset: resetUpdateUpdatePassword
    } = useForm<AuthData>({ resolver: zodResolver(updatePasswordSchema) })

    useEffect(() => {
        const initializeUser = async () => {
            try {
                const response = await userLogged()
                upDateLocalStorage(response.data)
                setUserId(response.data._id)

                setUser(constructUserFromLocalStorage())
            } catch (error: unknown) {
                console.error("Erro ao verificar usuário:", error)
                if (axios.isAxiosError(error)) setLoginError(error.response?.data.message || "Ocorreu um erro desconhecido")
            }
        }

        initializeUser()
    }, [setUser])

    async function onUpdateSubmit(data: Partial<AuthData>, reset: () => void) {
        try {
            const response = await updateUser(userId, data)
            upDateLocalStorage(response.data.user)
            setUser(constructUserFromLocalStorage())
            setUpdateResults(response.data.message)
            reset()

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setEmailError(error.response?.data.message)
                setNetworkError(error.message)
            }

            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            {loginError ? (
                <h3>{loginError}</h3>
            ) : (
                <ProfileContainer>

                    {user ? (
                        <>
                            <SectionForm>{/* TODO: PROVISIONAL, REMOVE WHEN MAKE STYLE */}
                                {updateResults &&
                                    <h3>{updateResults}</h3>
                                }
                                {networkError &&
                                    <h3>{networkError}</h3>
                                }

                                <h1>Conta</h1>
                                <UserAvatar user={user} />
                                <p>Atualizar foto de Perfil</p>

                                <form onSubmit={handleSubmitupdateProfilePicture((data) => onUpdateSubmit(data, resetUpdateProfilePicture))}>
                                    <Input type="text" placeholder="Insira a URL da imagem" name="profilePicture" register={registerUpdateProfilePicture} />
                                    {errorsupdatProfilePicture.profilePicture && <ErrorSpan>{errorsupdatProfilePicture.profilePicture.message}</ErrorSpan>}
                                    <Button type="submit" text="Atualizar" />
                                </form>

                                <form onSubmit={handleSubmitupdateName((data) => onUpdateSubmit(data, resetUpdateName))}>
                                    <p><span>Nome: </span>{user.name}</p>
                                    <Input type="text" placeholder={user.name} name="name" register={registerUpdateName} />
                                    {errorsupdateName.name && <ErrorSpan>{errorsupdateName.name.message}</ErrorSpan>}
                                    <Button type="submit" text="Atualizar" />
                                </form>

                                <form onSubmit={handleSubmitupdateEmail((data) => onUpdateSubmit(data, resetUpdateUpdateEmail))}>
                                    <p><span>Email: </span>{user.email}</p>

                                    <Input type="email" placeholder={user.email} name="email" register={registerUpdateEmail} />
                                    {errorsupdateEmail.email && <ErrorSpan>{errorsupdateEmail.email.message}</ErrorSpan>}
                                    {emailError && <ErrorSpan>{emailError}</ErrorSpan>}
                                    <Button type="submit" text="Atualizar" />
                                </form>

                                <form onSubmit={handleSubmitupdatePassword((data) => onUpdateSubmit(data, resetUpdateUpdatePassword))}>
                                    <p>Atualizar Senha</p>
                                    <Input type="password" placeholder="Senha" name="password" register={registerUpdatePassword} />
                                    {errorsupdatePassword.password && <ErrorSpan>{errorsupdatePassword.password.message}</ErrorSpan>}

                                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerUpdatePassword} />
                                    {errorsupdatePassword.confirmPassword && <ErrorSpan>{errorsupdatePassword.confirmPassword.message}</ErrorSpan>}

                                    <Button type="submit" text="Atualizar" />
                                </form>

                                {loginError &&
                                    <h3>{loginError}</h3>
                                }

                            </SectionForm>
                        </>
                    ) : (
                        <h3>Sem Usuário</h3>
                    )}
                </ProfileContainer>
            )
            }
        </>
    )
}