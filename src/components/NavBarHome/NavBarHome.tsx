import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/icons/icon-logo.svg";
import { ButtonCategory, LogoBanner, NavHome } from "./NavBarHomeStyled";
import { useBackground } from "../../Context/useBackgroundCustomHook";

export function NavbarHome() {
    const navigate = useNavigate()
    const { bgImage, updateBackground } = useBackground()

    const categories = ["Tecnologia", "Esportes", "Ciência", "Política", "Saúde", "Arte", "Outros"]

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
                        <Link to="" onClick={logoClick}>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                </LogoBanner>

                <ButtonCategory>
                    {categories.map((category) => (
                        <button key={category} onClick={() => categoryClick(category)}>
                            {category}
                        </button>
                    ))}
                </ButtonCategory>
            </NavHome>
        </>
    )
}