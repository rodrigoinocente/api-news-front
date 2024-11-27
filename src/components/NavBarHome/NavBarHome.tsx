import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/icons/icon-logo.svg"
import { ButtonCategory, NavHome } from "./NavBarHomeStyled";


export function NavbarHome() {
    const navigate = useNavigate();

    const categories = ["Tecnologia", "Esportes", "Ciência", "Política", "Saúde", "Arte", "Outros"];

    const categoryClick = (category: string) => {
        navigate(`/category/${category}`);
    };

    return (
        <>
            <NavHome>
                <div>
                    <Link to="/">
                    <img src={logo} alt="" />
                    </Link>
                </div>

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