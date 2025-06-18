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
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ISearchNews>({
        resolver: zodResolver(searchSchema)
    });
    const navigate = useNavigate()
    const { user, setUser } = useUser()
    const [showModalLogin, setShowModalLogin] = useState(false)
    const [showModalAvatar, setShowModalAvatar] = useState(false)
    const [isSearch, setIsSearch] = useState(false)

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
                    <InputSpace>
                        {isSearch ? (
                            <form onSubmit={handleSubmit(onSearch)}>
                                <input {...register("title")} type="text" placeholder="Buscar" autoFocus />
                                <button type="submit"
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    <img className="lupa-submit" src={lupa} alt="Logo Lupa" />
                                </button>
                            </form>
                        ) : (
                            <img src={lupa} alt="Logo Lupa" onClick={() => setIsSearch(true)}
                            />
                        )}
                    </InputSpace>

                    {user ? (
                        <>
                            <div onClick={() => setShowModalAvatar(true)} >
                                <UserAvatar user={user} size="1.8rem" />
                            </div>

                            {showModalAvatar &&
                                <UserAvatarModal isOpenAvatar={showModalAvatar} onCloseAvatar={() => setShowModalAvatar(false)} />
                            }
                        </>
                    ) : (
                        <>
                            <Button type="button" text="Entrar" onClick={() => setShowModalLogin(true)} ></Button>

                            {showModalLogin &&
                                <LoginModal isOpenLogin={showModalLogin} onCloseLogin={() => setShowModalLogin(false)} />
                            }
                        </>
                    )}
                </RightNav>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}

            <Outlet />
        </>
    )
}