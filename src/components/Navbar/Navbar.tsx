import { Link, Outlet, useNavigate } from "react-router-dom"
import lupa from "../../images/icons/icon-lupa.png"
import menu from "../../images/icons/icon-menu.png"
import { ErrorSpan, InputSpace, MenuNav, Nav, RightNav, UserLoggedSpace } from "./NavbarStyled"
import { useForm } from "react-hook-form"
import { ISearchNews } from "../../vite-env"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/searchSchema"
import Cookies from "js-cookie"
import { useUser } from "../../Context/userCustomHook"
import { useEffect } from "react"

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

    function onSearch(data: ISearchNews) {
        navigate(`/search/${data.title}`);
        reset();
    }

    function signout() {
        Cookies.remove("token")
        setUser(null)
        navigate("/")
    }

    useEffect(() => {
        CurrentDate()
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

                            <button onClick={signout}>sair</button>
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
//TODO: MELHORAR ORGANIZAÇÃO DA ESTILIZAÇÃO