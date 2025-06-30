import { useUser } from "../../Context/userCustomHook";
import { constructUserFromLocalStorage, upDateLocalStorage } from "../../utils/utils";
import { useEffect, useState } from "react";
import { updateUser, userLogged } from "../../service/userService";
import { Navbar } from "../../components/Navbar/Navbar";
import { UserAvatar } from "../../components/UserAvatar/UserAvatar";
import axios from "axios";
import { ContainerForm, ContainerInput, Icon, Initial, ProfileContainer } from "./ProfileStyled";
import { useForm } from "react-hook-form";
import { AuthData } from "../../vite-env";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfilePictureSchema, updateEmailSchema, updateNameSchema, updatePasswordSchema } from "../../schemas/updateUser";
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
                            {updateResults &&
                                <h3>{updateResults}</h3>
                            }
                            {networkError &&
                                <h3>{networkError}</h3>
                            }

                            <h1>Conta</h1>
                            <UserAvatar user={user} size="7rem" />

                            {!isEditingProfilePicture ? (
                                <Icon id="icon-update-picture" >
                                    <button type="button" className="edit" onClick={() => setIsEditingProfilePicture(true)}>
                                        <img src={iconEdit} alt="Ícone para atualizar a foto de perfil" />
                                    </button>
                                </Icon>
                            ) : (
                                <ContainerForm>
                                    <form onSubmit={handleSubmitupdateProfilePicture((data) => onUpdateSubmit(data, resetUpdateProfilePicture, setIsEditingProfilePicture))}>
                                        <label htmlFor="profilePicture">Foto de Perfil</label>

                                        <ContainerInput>
                                            <Input type="text" placeholder="Insira a URL da imagem" name="profilePicture" id="profilePicture" register={registerUpdateProfilePicture} />

                                            <Icon typeof="submit">
                                                <button type="submit" className="confirm">
                                                    <img src={iconConfirm} alt="Ícone para atualizar o nome do usuario" />
                                                </button>
                                            </Icon>

                                            <Icon>
                                                <button type="button" className="cancel" onClick={() => {
                                                    setIsEditingProfilePicture(false)
                                                    resetUpdateProfilePicture()
                                                }}>
                                                    <img src={iconCancel} alt="Ícone para cancelar a atualização" />
                                                </button>
                                            </Icon>
                                        </ContainerInput>
                                        {errorsupdatProfilePicture.profilePicture && <ErrorSpan className="zodError">{errorsupdatProfilePicture.profilePicture.message}</ErrorSpan>}
                                    </form>
                                </ContainerForm>

                            )}

                            {!isEditingName ? (
                                <Initial>
                                    <span>Nome:</span> {user.name}
                                    <Icon >
                                        <button type="button" className="edit" onClick={() => setIsEditingName(true)}>
                                            <img src={iconEdit} alt="Ícone para atualizar a foto de perfil" />

                                        </button>
                                    </Icon>
                                </Initial>
                            ) : (
                                <ContainerForm>
                                    <form onSubmit={handleSubmitupdateName((data) => onUpdateSubmit(data, resetUpdateName, setIsEditingName))}>
                                        <label htmlFor="name">Nome: </label>

                                        <ContainerInput>
                                            <Input type="text" placeholder={user.name} name="name" id="name" autoComplete="name" register={registerUpdateName} />

                                            <Icon typeof="submit">
                                                <button type="submit" className="confirm" >
                                                    <img src={iconConfirm} alt="Ícone para atualizar o nome do usuario" />
                                                </button>
                                            </Icon>

                                            <Icon>
                                                <button type="button" className="cancel" onClick={() => {
                                                    setIsEditingName(false)
                                                    resetUpdateName()
                                                }}>
                                                    <img src={iconCancel} alt="Ícone para cancelar a atualização" />
                                                </button>
                                            </Icon>

                                        </ContainerInput>
                                        {errorsupdateName.name && <ErrorSpan className="zodError">{errorsupdateName.name.message}</ErrorSpan>}
                                    </form>
                                </ContainerForm>
                            )}

                            {!isEditingEmail ? (
                                <Initial>
                                    <span>Email:</span>{user.email}
                                    <Icon >
                                        <button type="button" className="edit" onClick={() => { setIsEditingEmail(true) }}>
                                            <img src={iconEdit} alt="Ícone para atualizar a foto de perfil" />
                                        </button>
                                    </Icon>

                                </Initial>
                            ) : (

                                <ContainerForm>
                                    <label htmlFor="email">Email: </label>
                                    <form onSubmit={handleSubmitupdateEmail((data) => onUpdateSubmit(data, resetUpdateUpdateEmail, setIsEditingEmail))}>

                                        <ContainerInput>
                                            <Input type="email" placeholder={user.email} name="email" id="email" autoComplete="email" register={registerUpdateEmail} />
                                            {emailError && <ErrorSpan>{emailError}</ErrorSpan>}

                                            <Icon typeof="submit" >
                                                <button type="submit" className="confirm">
                                                    <img src={iconConfirm} alt="Ícone para atualizar o nome do usuario" />
                                                </button>
                                            </Icon>

                                            <Icon>
                                                <button type="button" className="cancel" onClick={() => {
                                                    setIsEditingEmail(false)
                                                    resetUpdateUpdateEmail()
                                                }}>
                                                    <img src={iconCancel} alt="Ícone para cancelar a atualização" />
                                                </button>
                                            </Icon>

                                        </ContainerInput>
                                        {errorsupdateEmail.email && <ErrorSpan className="zodError">{errorsupdateEmail.email.message}</ErrorSpan>}
                                    </form>
                                </ContainerForm>
                            )}

                            {!isEditingPassword ? (
                                <Initial>
                                    <h4 id="initialPassword" onClick={() => {
                                        setIsEditingPassword(true)
                                    }}>Atualizar Senha</h4>
                                </Initial>
                            ) : (
                                <ContainerForm>
                                    <form onSubmit={handleSubmitupdatePassword((data) => onUpdateSubmit(data, resetUpdateUpdatePassword, setIsEditingPassword))}>
                                        <ContainerInput>
                                            <div id="containerPassword">
                                                <h4>Cadastrar nova senha</h4>

                                                <section>
                                                    <label htmlFor="password">Digite a nova senha </label>
                                                    <Input type="password" placeholder="Senha" name="password" id="password" autoComplete="new-password" register={registerUpdatePassword} />
                                                    {errorsupdatePassword.password && <ErrorSpan className="zodError">{errorsupdatePassword.password.message}</ErrorSpan>}
                                                </section>

                                                <section>
                                                    <label htmlFor="confirmPassword">Digite novamente a nova senha </label>
                                                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" id="confirmPassword" autoComplete="new-password" register={registerUpdatePassword} />
                                                    {errorsupdatePassword.confirmPassword && <ErrorSpan className="zodError">{errorsupdatePassword.confirmPassword.message}</ErrorSpan>}
                                                </section>

                                                <div id="iconPassword">
                                                    <Icon typeof="submit">
                                                        <button type="submit" className="confirm">
                                                            <img src={iconConfirm} alt="Ícone para atualizar o nome do usuario" />
                                                        </button>
                                                    </Icon>

                                                    <Icon>
                                                        <button type="button" className="cancel" onClick={() => {
                                                            setIsEditingPassword(false)
                                                            resetUpdateUpdatePassword()
                                                        }}>
                                                            <img src={iconCancel} alt="Ícone para cancelar a atualização" />
                                                        </button>
                                                    </Icon>

                                                </div>


                                            </div>
                                        </ContainerInput>
                                    </form>
                                </ContainerForm>
                            )}

                            {loginError &&
                                <h3>{loginError}</h3>
                            }
                        </>
                    ) : (
                        <h3>Sem Usuário</h3>
                    )}
                </ProfileContainer>
            )}
        </>
    )
}