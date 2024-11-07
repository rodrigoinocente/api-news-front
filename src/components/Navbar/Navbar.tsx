import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/icons/icon-logo.png"
import lupa from "../../images/icons/icon-lupa.png"
import { ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled"
import { useForm } from "react-hook-form"
import { ISearchNews } from "../../vite-env"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/searchSchema"


export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<ISearchNews>({ resolver: zodResolver(searchSchema) });
    const navigate = useNavigate()

    function onSearch(data: ISearchNews) {
        const { title } = data
        navigate(`/search/${title}`)
        reset()
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
                <Link to="auth">
                    <Button type="button" text="Entrar"></Button>
                </Link>
            </Nav>
            <Outlet />
        </>
    )
} 