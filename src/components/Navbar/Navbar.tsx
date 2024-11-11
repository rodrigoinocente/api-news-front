import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/icons/icon-logo.png"
import lupa from "../../images/icons/icon-lupa.png"
import { ErrorSpan, ImageLogo, InputSpace, Nav, UserLoggedSpace } from "./NavbarStyled"
import { useForm } from "react-hook-form"
import { ISearchNews } from "../../vite-env"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/searchSchema"
import Cookies from "js-cookie"
import { useUser } from "../../Context/userCustomHook"

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<ISearchNews>({ resolver: zodResolver(searchSchema) });
    const navigate = useNavigate()
    const { user, setUser } = useUser()

    function onSearch(data: ISearchNews) {
        navigate(`/search/${data.title}`);
        reset();
    }

    function signout() {
        Cookies.remove("token")
        setUser(null)
        navigate("/")
    }

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
            </Nav>
            <Outlet />
        </>
    )
} 