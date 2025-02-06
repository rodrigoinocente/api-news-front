import { Link, Outlet, useNavigate } from "react-router-dom"
import lupa from "../../images/icons/icon-lupa.png"
import menu from "../../images/icons/icon-menu.png"
import { ErrorSpan, InputSpace, MenuNav, Nav, RightNav, UserLoggedSpace } from "./NavbarStyled"
import { useForm } from "react-hook-form"
import { ISearchNews, IUser } from "../../vite-env"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/searchSchema"
import { useUser } from "../../Context/userCustomHook"
import { useEffect } from "react"
import { logout } from "../../service/userService"

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<ISearchNews>({ resolver: zodResolver(searchSchema) });
    const navigate = useNavigate()
    const { user, setUser } = useUser()

    function CurrentDate() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        const formattedDateWithCapitalizedWeekday =
            formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        return <p>{formattedDateWithCapitalizedWeekday}</p>;
    }

    function profile() {
        navigate("/profile")
    }

    function onSearch(data: ISearchNews) {
        navigate(`/search/${data.title}`);
        reset();
    }

    async function signoutHandler() {
        await logout()
        localStorage.clear()
        setUser(null)
        navigate("/")
    }

    useEffect(() => {
        CurrentDate()
        const name = localStorage.getItem("name");
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");

        if (name && username && email) {
            const userData: IUser = { name, username, email };
            setUser(userData);
        }
    }, [])

    return (
        <>
            <Nav>
                <MenuNav>
                    <img src={menu} alt="Menu" />
                    <span>MENU</span>
                </MenuNav>

                <CurrentDate />

                <RightNav>
                    <form onSubmit={handleSubmit(onSearch)}>
                        <InputSpace>
                            <input {...register("title")} type="text" placeholder="Buscar" />
                            <button type="submit">
                                <img className="icon-lupa" src={lupa} alt="Logo Lupa" />
                            </button>
                        </InputSpace>
                        {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
                    </form>
                    {user ? (
                        <UserLoggedSpace>
                            <Link to="/profile">
                                <h4>{`Olá, ${user.name}`}</h4>
                            </Link>

                            <button onClick={signoutHandler}>sair</button>
                            <button onClick={profile}>editar</button>
                        </UserLoggedSpace>

                    ) :
                        <Link to="auth">
                            <Button type="button" text="Entrar"></Button>
                        </Link>
                    }
                </RightNav>
            </Nav>
            <Outlet />
        </>
    )
}