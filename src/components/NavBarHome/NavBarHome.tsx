import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/icons/icon-logo.svg";
import { ButtonCategory, LogoBanner, NavHome, Placart } from "./NavBarHomeStyled";
import { useBackground } from "../../Context/useBackgroundCustomHook";
import { useEffect, useState } from "react";

export function NavbarHome() {
    const navigate = useNavigate()
    const location = useLocation()
    const { bgImage, updateBackground } = useBackground()
    const [animateCategories, setAnimateCategories] = useState(false)

    useEffect(() => {
        setAnimateCategories(true);
    }, []);

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
                        <img src={logo} alt="Logo" onClick={logoClick} />
                    </div>
                </LogoBanner>

                <Placart onTouchStart={() => setAnimateCategories(false)} >
                    <ButtonCategory $animate={animateCategories}>
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
                </Placart>
            </NavHome>
        </>
    )
}