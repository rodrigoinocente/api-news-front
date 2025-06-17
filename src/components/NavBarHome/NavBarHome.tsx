import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/icons/icon-logo.svg";
import { ButtonCategory, LogoBanner, NavHome } from "./NavBarHomeStyled";
import { useBackground } from "../../Context/useBackgroundCustomHook";

export function NavbarHome() {
    const navigate = useNavigate()
    const location = useLocation()
    const { bgImage, updateBackground } = useBackground()

    const categories = ["Tecnologia", "FakeNews", "Esportes", "Ciência", "Política", "Saúde", "Arte", "Outros"]

    const categoryClick = (category: string) => {
        navigate(`/category/${category}`)
    }

    const logoClick = () => {
        updateBackground(null)
        navigate("/")
    }

    return (
        <>
            <NavHome>
                <LogoBanner>
                    <div style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}>
                        {/* <Link to="" onClick={logoClick}> */}
                            <img src={logo} alt="Logo" onClick={logoClick} />
                        {/* </Link> */}
                    </div>
                </LogoBanner>

                <ButtonCategory>
                    {categories.map((category) => {
                        const isActive = location.pathname.includes(`/category/${category}`)
                        return (
                            <button
                                key={category}
                                onClick={() => categoryClick(category)}
                                className={isActive ? "active" : ""}
                            >
                                {category}
                            </button>
                        )
                    })}
                </ButtonCategory>
            </NavHome>
        </>
    )
}