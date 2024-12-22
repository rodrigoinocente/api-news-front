import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { IColumn, IJournalist } from "../../vite-env";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { useBackground } from "../../Context/useBackgroundCustomHook";
import { getColumnById } from "../../service/columnService";
import { ContentRead } from "../../components/ContentReader/ContentReader";

export function Column() {
    const { columnId } = useParams<{ columnId: string }>()
    const [column, setColumn] = useState<IColumn | null>(null)
    const [journalist, setJournalist] = useState<IJournalist | null>(null)
    const { updateBackground } = useBackground()

    const findColumn = async () => {
        if (!columnId) return console.error("columnId is undefined")

        try {
            const columnResponse = await getColumnById(columnId)
            setColumn(columnResponse.data)
            setJournalist(columnResponse.data.authorId)

        } catch (error) {
            console.error("Erro ao carregar coluna:", error)
        }
    }

    useEffect(() => {
        updateBackground(null)
        findColumn();
    }, [columnId]);

    return (
        <>
            <Navbar />
            <NavbarHome />
            {column && journalist && (
                <ContentRead
                    publication={column}
                    journalist={journalist}
                    type="column"
                />
            )}
        </>
    )
}