import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/icons/icon-logo.png"
import lupa from "../../images/icons/icon-lupa.png"
import { ErrorSpan, ImageLogo, InputSpace, Nav, UserLoggedSpace } from "./NavbarStyled"
import { useForm } from "react-hook-form"
import { ISearchNews, IUser } from "../../vite-env"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/searchSchema"
import { userLogged } from "../../service/userService"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<ISearchNews>({ resolver: zodResolver(searchSchema) });
    const navigate = useNavigate()
    const [user, setUser] = useState<IUser | null>(null)

    function onSearch(data: ISearchNews) {
        navigate(`/search/${data.title}`);
        reset();
    }

    async function findUserLogged() {
        try {
            const response = await userLogged()
            setUser(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    function signout() {
        Cookies.remove("token")
        setUser(null)
        navigate("/")
    }

    useEffect(() => {
        if (Cookies.get("token")) findUserLogged()
    }, [])

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <input {...register("title")} type="text" placeholder="Buscar" />
                        <button type="submit">
                            <img className="icon-lupa" src={lupa} alt="Logo Lupa" />
                        </button>
                    </InputSpace>
                    {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
                </form>

                <Link to="/">
                    <ImageLogo src={logo} alt="Logo News" />
                </Link>

                {user ? (
                    <UserLoggedSpace>
                        <h4>{`Olá, ${user.name}`}</h4>

                        <button onClick={signout}>sair</button>
                    </UserLoggedSpace>

                ) :
                    <Link to="auth">
                        <Button type="button" text="Entrar"></Button>
                    </Link>
                }
            </Nav>
            <Outlet />
        </>
    )
} 