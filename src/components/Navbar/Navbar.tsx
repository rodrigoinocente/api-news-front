import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/icons/icon-logo.png"
import lupa from "../../images/icons/icon-lupa.png"
import { Button, ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled"
import { useForm } from "react-hook-form"
import { SearchNews } from "../../vite-env"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const searchSchema = z.object({
    title: z.string()
        .min(1, { message: "A pesquisa não pode ser vazia" })
        .refine(value => !/^\s*$/.test(value), { message: "A pesquisa não pode ser vazia" }),
})

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<SearchNews>({ resolver: zodResolver(searchSchema) });
    const navigate = useNavigate()

    function onSearch(data: SearchNews) {
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

                <Button>Loggin</Button>
            </Nav>
            <Outlet />
        </>
    )
} 