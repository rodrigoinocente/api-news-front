import { BannerList, FourthPart, HeaderSection, HomeBody, LittleBanner, ThirdPart } from "./HomeStyled";
import { getDataHome } from "../../service/newsService";
import { useEffect, useState } from "react";
import { IDataHome } from "../../vite-env";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { CardBanner } from "../../components/CardBanner/CardBanner";
import { ColumnList } from "../../components/ColumnList/ColumnList";
import { NewsList } from "../../components/NewsList/NewsList";
import { Card } from "../../components/Card/Card";
import { VerticalCard } from "../../components/VerticalCard/VerticalCard";

export function Home() {
    const [data, setData] = useState<IDataHome>(
        { newsFull: [], newsMini: [], newsMiniThirdPart: [], newsFullThirdPart: [], newsVerticalCard: [], column: [] })
    const [loading, setLoading] = useState(true)

    async function findDataHome() {
        try {
            const newsResponse = await getDataHome()
            console.log(newsResponse.data);
            setData({
                newsFull: newsResponse.data[0].newsFull,
                newsMini: newsResponse.data[0].newsMini,
                newsMiniThirdPart: newsResponse.data[0].newsMiniThirdPart,
                newsFullThirdPart: newsResponse.data[0].newsFullThirdPart,
                newsVerticalCard: newsResponse.data[0].newsVerticalCard,
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
                <HomeBody>

                    <HeaderSection>
                        {data.newsFull && (
                            <CardBanner
                                news={data.newsFull[0]}
                                key={data.newsFull[0]._id}
                                type="bigTitle"
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
                                maxTitleLength={69}
                                type="noSubtitle"
                            />
                        ))}
                    </ LittleBanner>

                    <ThirdPart>
                        <div className="newsList">
                            <NewsList
                                news={data.newsMiniThirdPart}
                                title="MUNDO"
                            />

                        </div>

                        <BannerList>
                            {data && (
                                data.newsFullThirdPart.map((newsItem) => {
                                    return (
                                        <Card
                                            key={newsItem._id}
                                            _id={newsItem._id}
                                            banner={newsItem.banner}
                                            publishedAt={newsItem.publishedAt}
                                            subtitle={newsItem.subtitle}
                                            title={newsItem.title}
                                            type="news"
                                        />
                                    )
                                })
                            )}
                        </BannerList>
                    </ThirdPart>

                    <FourthPart>
                        {data && (
                            data.newsVerticalCard.map((newsItem) => {
                                return (
                                    <VerticalCard
                                        news={newsItem}
                                        key={newsItem._id}
                                    />
                                )
                            })
                        )}

                    </FourthPart>

                </HomeBody>
            )}
        </>
    )
}
//TODO: NA PARTE 'VIDEOS' DO FIGMA, SUBISTITUIR POR UM BANNER. PENSAR EM COMO ESTILIZAR ELE. FourthPart VIRA FIFTH  