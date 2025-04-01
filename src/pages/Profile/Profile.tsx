import { useUser } from "../../Context/userCustomHook";
import { constructUserFromLocalStorage, upDateLocalStorage } from "../../utils/utils";
import { useEffect, useState } from "react";
import { updateUser, userLogged } from "../../service/userService";
import { Navbar } from "../../components/Navbar/Navbar";
import { UserAvatar } from "../../components/UserAvatar/UserAvatar";
import axios from "axios";
import { IconCancel, IconConfirm, IconEdit, ProfileContainer } from "./ProfileStyled";
import { useForm } from "react-hook-form";
import { AuthData } from "../../vite-env";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfilePictureSchema, updateEmailSchema, updateNameSchema, updatePasswordSchema } from "../../schemas/updateUser";
import { SectionForm } from "./ProfileStyled";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import iconEdit from "../../images/icons/icon-edit.png";
import iconConfirm from "../../images/icons/icon-confirm.png";
import iconCancel from "../../images/icons/icon-cancel.png";

export function Profile() {
    const { user, setUser } = useUser()
    const [loginError, setLoginError] = useState<string | null>(null)
    const [userId, setUserId] = useState<string>("")
    const [emailError, setEmailError] = useState<string | null>(null)
    const [updateResults, setUpdateResults] = useState<string | null>(null)
    const [networkError, setNetworkError] = useState<string | null>(null)
    const [isEditingName, setIsEditingName] = useState(false)
    const [isEditingEmail, setIsEditingEmail] = useState(false)
    const [isEditingPassword, setIsEditingPassword] = useState(false)
    const [isEditingProfilePicture, setIsEditingProfilePicture] = useState(false)

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

    async function onUpdateSubmit(data: Partial<AuthData>, reset: () => void,
        setIsEditing: React.Dispatch<React.SetStateAction<boolean>>) {
        try {
            const response = await updateUser(userId, data)
            upDateLocalStorage(response.data.user)
            setUser(constructUserFromLocalStorage())
            setUpdateResults(response.data.message)
            reset()
            setIsEditing(false)
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
                            <SectionForm>
                                {updateResults &&
                                    <h3>{updateResults}</h3>
                                }
                                {networkError &&
                                    <h3>{networkError}</h3>
                                }

                                <h1>Conta</h1>
                                <UserAvatar user={user} size="7rem" />

                                {!isEditingProfilePicture ? (
                                    <>
                                        <IconEdit className="icon-update-picture" onClick={() => setIsEditingProfilePicture(true)}>
                                            <img src={iconEdit} alt="Ícone para atualizar a foto de perfil" />
                                        </IconEdit>
                                    </>
                                ) : (
                                    <form onSubmit={handleSubmitupdateProfilePicture((data) => onUpdateSubmit(data, resetUpdateProfilePicture, setIsEditingProfilePicture))}>
                                        <label htmlFor="profilePicture">Atualizar foto de Perfil</label>
                                        <Input type="text" placeholder="Insira a URL da imagem" name="profilePicture" id="profilePicture" register={registerUpdateProfilePicture} />
                                        {errorsupdatProfilePicture.profilePicture && <ErrorSpan>{errorsupdatProfilePicture.profilePicture.message}</ErrorSpan>}

                                        <IconConfirm typeof="submit">
                                            <button type="submit">
                                                <img src={iconConfirm} alt="Ícone para atualizar o nome do usuario" />
                                            </button>
                                        </IconConfirm>

                                        <IconCancel>
                                            <button type="button" onClick={() => {
                                                setIsEditingProfilePicture(false)
                                                resetUpdateProfilePicture()
                                            }}>
                                                <img src={iconCancel} alt="Ícone para cancelar a atualização" />
                                            </button>
                                        </IconCancel>
                                    </form>
                                )}

                                {!isEditingName ? (
                                    <>
                                        <span>Nome: {user.name}</span>
                                        <IconEdit onClick={() => setIsEditingName(true)}>
                                            <img src={iconEdit} alt="Ícone para atualizar a foto de perfil" />
                                        </IconEdit>
                                    </>
                                ) : (
                                    <form onSubmit={handleSubmitupdateName((data) => onUpdateSubmit(data, resetUpdateName, setIsEditingName))}>
                                        <label htmlFor="name">Nome: </label>
                                        <Input type="text" placeholder={user.name} name="name" id="name" autoComplete="name" register={registerUpdateName} />
                                        {errorsupdateName.name && <ErrorSpan>{errorsupdateName.name.message}</ErrorSpan>}

                                        <IconConfirm typeof="submit">
                                            <button type="submit" >
                                                <img src={iconConfirm} alt="Ícone para atualizar o nome do usuario" />
                                            </button>
                                        </IconConfirm>

                                        <IconCancel>
                                            <button type="button" onClick={() => {
                                                setIsEditingName(false)
                                                resetUpdateName()
                                            }}>
                                                <img src={iconCancel} alt="Ícone para cancelar a atualização" />
                                            </button>
                                        </IconCancel>
                                    </form>
                                )}

                                {!isEditingEmail ? (
                                    <>
                                        <span>Email: {user.email}</span>

                                        <IconEdit onClick={() => {
                                            setIsEditingEmail(true)
                                        }}>
                                            <img src={iconEdit} alt="Ícone para atualizar a foto de perfil" />
                                        </IconEdit>
                                    </>
                                ) : (
                                    <form onSubmit={handleSubmitupdateEmail((data) => onUpdateSubmit(data, resetUpdateUpdateEmail, setIsEditingEmail))}>
                                        <label htmlFor="email">Email: </label>
                                        <Input type="email" placeholder={user.email} name="email" id="email" autoComplete="email" register={registerUpdateEmail} />
                                        {errorsupdateEmail.email && <ErrorSpan>{errorsupdateEmail.email.message}</ErrorSpan>}
                                        {emailError && <ErrorSpan>{emailError}</ErrorSpan>}

                                        <IconConfirm typeof="submit">
                                            <button type="submit">
                                                <img src={iconConfirm} alt="Ícone para atualizar o nome do usuario" />
                                            </button>
                                        </IconConfirm>

                                        <IconCancel>
                                            <button type="button" onClick={() => {
                                                setIsEditingEmail(false)
                                                resetUpdateUpdateEmail()
                                            }}>
                                                <img src={iconCancel} alt="Ícone para cancelar a atualização" />
                                            </button>
                                        </IconCancel>
                                    </form>
                                )}

                                {!isEditingPassword ? (
                                    <h5 onClick={() => {
                                        setIsEditingPassword(true)
                                    }}>Atualizar Senha</h5>
                                ) : (
                                    <>
                                        <h5>Cadastrar nova senha</h5>
                                        <form onSubmit={handleSubmitupdatePassword((data) => onUpdateSubmit(data, resetUpdateUpdatePassword, setIsEditingPassword))}>
                                            <label htmlFor="password">Digite a nova senha </label>
                                            <Input type="password" placeholder="Senha" name="password" id="password" autoComplete="new-password" register={registerUpdatePassword} />
                                            {errorsupdatePassword.password && <ErrorSpan>{errorsupdatePassword.password.message}</ErrorSpan>}

                                            <label htmlFor="confirmPassword">Digite novamente a nova senha </label>
                                            <Input type="password" placeholder="Confirmar senha" name="confirmPassword" id="confirmPassword" autoComplete="new-password" register={registerUpdatePassword} />
                                            {errorsupdatePassword.confirmPassword && <ErrorSpan>{errorsupdatePassword.confirmPassword.message}</ErrorSpan>}

                                            <IconConfirm typeof="submit">
                                                <button type="submit">
                                                    <img src={iconConfirm} alt="Ícone para atualizar o nome do usuario" />
                                                </button>
                                            </IconConfirm>

                                            <IconCancel>
                                                <button type="button" onClick={() => {
                                                    setIsEditingPassword(false)
                                                    resetUpdateUpdatePassword()
                                                }}>
                                                    <img src={iconCancel} alt="Ícone para cancelar a atualização" />
                                                </button>
                                            </IconCancel>
                                        </form>
                                    </>
                                )}

                                {loginError &&
                                    <h3>{loginError}</h3>
                                }
                            </SectionForm>
                        </>
                    ) : (
                        <h3>Sem Usuário</h3>
                    )}
                </ProfileContainer>
            )}
        </>
    )
}

//TODO=> VALIDAR O E-MAIL EM TEMPO DE DIGITAÇÃO, SEM PRECISAR FAZER O SUBMIT
//      HTML AJUSTADO OS FORMULARIOS ESTÃO FUNCIONANDO, FALTA ADICIONAR A ESTILIZAÇÃO.
//      O EFEITO DO INPU DO NAME ESTÁ IMPLEMENTADO O EFEITO VISUAL

//TODO: PREPARA MENSAFGEM DE COMMIT DAS ALTERAÇÕES DA PAGINA PROFILE