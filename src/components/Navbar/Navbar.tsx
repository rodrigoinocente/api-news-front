import { Outlet, useNavigate } from "react-router-dom"
import lupa from "../../images/icons/icon-lupa.png"
import menu from "../../images/icons/icon-menu.png"
import { ErrorSpan, InputSpace, MenuNav, Nav, RightNav } from "./NavbarStyled"
import { useForm } from "react-hook-form"
import { ISearchNews } from "../../vite-env"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/searchSchema"
import { useUser } from "../../Context/userCustomHook"
import { useEffect, useState } from "react"
import { UserAvatar } from "../UserAvatar/UserAvatar"
import { LoginModal } from "../Modals/LoginModal/LoginModal"
import { UserAvatarModal } from "../Modals/UserAvatarModal/UserAvatarModal"
import { constructUserFromLocalStorage } from "../../utils/utils"

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<ISearchNews>({ resolver: zodResolver(searchSchema) });
    const navigate = useNavigate()
    const { user, setUser } = useUser()
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalAvatar, setShowModalAvatar] = useState(false);

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

    useEffect(() => {
        setUser(constructUserFromLocalStorage())
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
                        <>
                            <div onClick={() => setShowModalAvatar(true)}>
                                <UserAvatar user={user} />
                            </div>

                            {showModalAvatar &&
                                <UserAvatarModal isOpenAvatar={showModalAvatar} onCloseAvatar={() => setShowModalAvatar(false)} />
                            }
                        </>
                    ) :
                        <>
                            <Button type="button" text="Entrar" onClick={() => setShowModalLogin(true)} ></Button>

                            {showModalLogin &&
                                <LoginModal isOpenLogin={showModalLogin} onCloseLogin={() => setShowModalLogin(false)} />
                            }
                        </>
                    }
                </RightNav>
            </Nav >
            <Outlet />
        </>
    )
}