import { Outlet } from "react-router-dom"
import logo from "../../images/icons/icon-logo.png"
import lupa from "../../images/icons/icon-lupa.png"
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled"

export function Navbar() {
    return (
        <>
            <Nav>
                <InputSpace>
                    <input type="text" placeholder="Buscar" />
                    <img className="icon-lupa" src={lupa} alt="Logo Lupa" />
                </InputSpace>
                <ImageLogo src={logo} alt="Logo News" />
                <Button>Loggin</Button>
            </Nav>
            <Outlet/>
        </>
    )
} 