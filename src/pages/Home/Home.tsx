import { BannerList, FakeNewsSection, FifthPart, HeaderSection, HomeBody, LittleBanner, ThirdPart } from "./HomeStyled";
import { getDataHome } from "../../service/newsService";
import { useEffect, useState } from "react";
import { IDataHome } from "../../vite-env";
import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
import { CardBanner } from "../../components/CardBanner/CardBanner";
import { ColumnList } from "../../components/ColumnList/ColumnList";
import { NewsList } from "../../components/NewsList/NewsList";
import { Card } from "../../components/Card/Card";
import { HorizontalCard } from "../../components/VerticalCard/HorizontalCard";
import { FakeNewsCard } from "../../components/ImageCard/FakeNewsCard";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [data, setData] = useState<IDataHome>(
        { bigHome: [], littleBanner: [], thirdPartLittle: [], thirdPartWithBanner: [], fakeNewsSection: [], fifthPart: [], column: [] })
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    async function findDataHome() {
        try {
            const newsResponse = await getDataHome()
            setData({
                bigHome: newsResponse.data[0].bigHome,
                littleBanner: newsResponse.data[0].littleBanner,
                thirdPartLittle: newsResponse.data[0].thirdPartLittle,
                thirdPartWithBanner: newsResponse.data[0].thirdPartWithBanner,
                fakeNewsSection: newsResponse.data[0].fakeNewsSection,
                fifthPart: newsResponse.data[0].fifthPart,
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
                        <div id="bigHome">
                            {data.bigHome && (
                                <CardBanner
                                    news={data.bigHome[0]}
                                    key={data.bigHome[0]._id}
                                />
                            )}
                        </div>

                        {data.column && (
                            <ColumnList
                                title="ÚLTIMAS COLUNAS"
                                columns={data.column}
                            />
                        )}
                    </HeaderSection>

                    <LittleBanner className="little-banner">
                        {data.littleBanner.map((listItem) => (
                            <div className="little-banner" key={listItem._id}>
                                <CardBanner
                                    news={listItem}
                                    type="noSubtitle"
                                />
                            </div>
                        ))}
                    </ LittleBanner>

                    <ThirdPart>
                        <div className="newsList">
                            <NewsList
                                news={data.thirdPartLittle}
                                title="MUNDO"
                            />
                        </div>

                        <BannerList>
                            {data && (
                                data.thirdPartWithBanner.map((newsItem) => {
                                    return (
                                        <Card
                                            key={newsItem._id}
                                            _id={newsItem._id}
                                            banner={newsItem.banner}
                                            publishedAt={newsItem.publishedAt}
                                            subtitle={newsItem.subtitle}
                                            title={newsItem.title} 
                                            edited={newsItem.edited}                                        />
                                    )
                                })
                            )}
                        </BannerList>
                    </ThirdPart>

                    <FakeNewsSection>
                        {data && (
                            <>
                                <div id="topFake">
                                    <h4>RADAR FAKE NEWS</h4>
                                    <p onClick={()=> navigate("/category/FakeNews")}>Ver mais</p>
                                </div>

                                {data.fakeNewsSection.map((newsItem) => (
                                    <FakeNewsCard
                                        key={newsItem._id}
                                        news={newsItem}
                                    />
                                ))}
                            </>
                        )}
                    </FakeNewsSection>

                    <FifthPart>
                        {data && (
                            data.fifthPart.map((newsItem) => {
                                return (
                                    <HorizontalCard
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