import { useUser } from "../../Context/userCustomHook";
import { constructUserFromLocalStorage, upDateLocalStorage } from "../../utils/utils";
import { useEffect, useState } from "react";
import { userLogged } from "../../service/userService";
import { Navbar } from "../../components/Navbar/Navbar";
import { UserAvatar } from "../../components/UserAvatar/UserAvatar";
import axios from "axios";

export function Profile() {
    const { user, setUser } = useUser()
    const [loginError, setLoginError] = useState<string | null>(null)

    useEffect(() => {
        const initializeUser = async () => {
            try {
                const response = await userLogged()
                localStorage.clear()
                upDateLocalStorage(response.data)

                setUser(constructUserFromLocalStorage())
            } catch (error: unknown) {
                console.error("Erro ao verificar usuário:", error)
                if (axios.isAxiosError(error)) setLoginError(error.message || "Ocorreu um erro desconhecido")
                else setLoginError("Ocorreu um erro desconhecido")
            }
        }

        initializeUser()
    }, [setUser])

    return (
        <>
            <Navbar />
            {loginError ? (
                <h3>{loginError}</h3>
            ) : (
                <>
                    {user ? (
                        <div>
                            <h1>Conta</h1>
                            <UserAvatar user={user} />
                            <h3>{user.name}</h3>
                            <p>@{user.username}</p>

                        </div>
                    ) : (
                        <h3>Sem Usuário</h3>
                    )}

                    {loginError &&
                        <h3>{loginError}</h3>
                    }
                </>
            )
            }
        </>
    )
}