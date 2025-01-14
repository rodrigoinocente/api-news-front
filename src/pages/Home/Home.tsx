import { HeaderSection, HomeBody, LittleBanner } from "./HomeStyled";
import { getDataHome } from "../../service/newsService";
import { useEffect, useState } from "react";
import { IDataHome } from "../../vite-env";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { CardBanner } from "../../components/CardBanner/CardBanner";
import { ColumnList } from "../../components/ColumnList/ColumnList";

export function Home() {
    const [data, setData] = useState<IDataHome>({ newsFull: [], newsMini: [], column: [] })
    const [loading, setLoading] = useState(true)

    async function findDataHome() {
        try {
            const newsResponse = await getDataHome()
            setData({
                newsFull: newsResponse.data[0].newsFull,
                newsMini: newsResponse.data[0].newsMini,
                column: newsResponse.data[1].column,
            })
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        findDataHome()
    }, [])

    return (
        <>
            <NavbarHome />
            {loading ? <Spinner /> : (
                <>
                    <HomeBody>

                        <HeaderSection>
                            {data.newsFull && (
                                <CardBanner
                                    news={data.newsFull[0]}
                                    key={data.newsFull[0]._id}
                                    type="full"
                                />
                            )}

                            {data.column && (
                                <ColumnList
                                    title="ÚLTIMAS COLUNAS"
                                    columns={data.column}
                                />
                            )}
                        </HeaderSection>

                        <LittleBanner>
                            {data.newsMini.slice(0, 3).map((newsItem) => (
                                <CardBanner
                                    news={newsItem}
                                    key={newsItem._id}
                                />
                            ))}
                        </ LittleBanner>

                    </HomeBody>
                </>
            )}
        </>
    )
}