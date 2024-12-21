import { useNavigate, useParams } from "react-router-dom"
import { ColmunContent, ColumnBody, ColumnHead, JournalistSection } from "./ColumnStyled";
import { useEffect, useState } from "react";
import { IColumn } from "../../vite-env";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { useBackground } from "../../Context/useBackgroundCustomHook";
import { NewsTimestamps } from "../../components/NewsTimestamps/NewsTimestamps";
import { getColumnById } from "../../service/columnService";

export function Column() {
    const { columnId } = useParams<{ columnId: string }>()
    const [column, setColumn] = useState<IColumn | null>(null)
    const { updateBackground } = useBackground()
    const navigate = useNavigate()

    const findColumn = async () => {
        if (!columnId) return console.error("columnId is undefined")

        try {
            const columnResponse = await getColumnById(columnId)
            setColumn(columnResponse.data)
        } catch (error) {
            console.error("Erro ao carregar coluna:", error)
        }
    }

    const handleClick = () => {
        navigate(`/newsByJournalist/${column?.authorId._id}`);
    }

    useEffect(() => {
        updateBackground(null)
        findColumn();
    }, [columnId]);

    return (
        <>
            <Navbar />
            <NavbarHome />
            {column && (
                <ColumnBody>
                    <ColumnHead>
                        <p className="columnCategory">Coluna {column.category}</p>
                        <h1>{column.title}</h1>
                        <p className="subtitle">{column.subtitle}</p>

                        <JournalistSection>
                            <img src={column.authorId.profilePicture} alt="Foto do Jornalista" onClick={handleClick} />
                            <div>
                                <p>Por: <span onClick={handleClick}>{column.authorId.name}</span></p>
                                <NewsTimestamps
                                    publishedAt={column.publishedAt}
                                    edited={column.edited}
                                    type="full"
                                />
                            </div>
                        </JournalistSection>

                        <figure>
                            <img src={column.banner} alt={column.bannerAlt} />
                            <figcaption>{column.bannerFigcaption}</figcaption>
                        </figure>
                    </ColumnHead>
                    <ColmunContent>
                        <div dangerouslySetInnerHTML={{ __html: column.content }} />
                    </ColmunContent>
                </ColumnBody>
            )}
        </>
    )
}