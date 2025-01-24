import { BannerList, FifthPart, FourthPart, HeaderSection, HomeBody, LittleBanner, ThirdPart } from "./HomeStyled";
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
import { FakeNewsCard } from "../../components/ImageCard/FakeNewsCard";

export function Home() {
    const [data, setData] = useState<IDataHome>(
        { newsFull: [], newsMini: [], newsMiniThirdPart: [], newsFullThirdPart: [], newsVerticalCard: [], column: [] })
    const [loading, setLoading] = useState(true)

    async function findDataHome() {
        try {
            const newsResponse = await getDataHome()
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
    console.log(data.newsVerticalCard);
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
                            <>
                                <div id="topFake">
                                    <h4>RADAR FAKE NEWS</h4>
                                    <p>Ver mais</p>
                                </div>

                                <div id="gridFake">
                                    <FakeNewsCard
                                        news={data.newsVerticalCard[0]}
                                        type="bigTitle"
                                    />

                                    <div id="vertical">
                                        {data.newsVerticalCard.slice(1, 4).map((newsItem, index) => {
                                            return (
                                                <FakeNewsCard
                                                    key={index}
                                                    news={newsItem}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        )}
                    </FourthPart>

                    <FifthPart>
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

                    </FifthPart>

                </HomeBody>
            )}
        </>
    )
}
//TODO: CONTINUAR COM A SESSÃO DE FAKE NEWS. ADICIONAR PROPS DE BIGTITLE APARA AJUSTAR O TAMANHO
//      DO TITILE, PADDING. ADICIONAR UM TITULO, ALGO DO TIPO "STOP FAKE NEWS" OU "RADAR FAKE NEWS"