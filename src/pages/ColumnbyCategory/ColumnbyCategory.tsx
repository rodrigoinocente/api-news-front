    import { useEffect, useState } from "react";
    import { Navbar } from "../../components/Navbar/Navbar";
    import { useParams } from "react-router-dom";
    import { CategoryType, IColumn } from "../../vite-env";
    import { Card } from "../../components/Card/Card";
    import { NavbarHome } from "../../components/NavBarHome/NavBarHome";
    import { LoadCard, Top} from "./ColumnbyCategoryStyled";
    import { Spinner } from "../../components/LoadingSpinner/LoadingSpinner";
    import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton";
    import { useBackground } from "../../Context/useBackgroundCustomHook";
    import { getColumnByCategory } from "../../service/columnService";

    export function ColumnbyCategory() {
        const { category } = useParams<{ category: CategoryType }>()

        const [column, setColumn] = useState<IColumn[]>([])
        const [hasMoreColumn, setHasMoreColumn] = useState(true)
        const [isLoading, setIsLoading] = useState(false)
        const [offset, setOffset] = useState(0)
        const limitColumn = 10
        const { updateBackground } = useBackground()

        const loadColumn = async (category: string, offset: number) => {
            try {
                setIsLoading(true)
                const columnResponse = await getColumnByCategory(category, limitColumn, offset, true)

                if (offset === 0)
                    setColumn(columnResponse.data.column)
                else
                    setColumn(column.concat(columnResponse.data.column))

                setOffset(columnResponse.data.nextOffset)
                setHasMoreColumn(columnResponse.data.hasMore)
            } catch (error) {
                console.error("Erro ao carregar coluna:", error)
            } finally {
                setIsLoading(false)
            }
        }

        useEffect(() => {
            if (category) {
                setColumn([])
                setOffset(0)
                setHasMoreColumn(true)
                updateBackground(category)
                loadColumn(category, 0)
            }
        }, [category])

        useEffect(() => {
            const handleScroll = () => {
                const { scrollTop, clientHeight, scrollHeight } = document.documentElement

                if (!isLoading && hasMoreColumn && scrollHeight - scrollTop <= clientHeight + 100) {
                    loadColumn(category as string, offset)
                }
            }

            window.addEventListener("scroll", handleScroll)

            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        }, [isLoading, hasMoreColumn, offset, category])

        return (
            <>
                <Navbar />
                <NavbarHome />

                <Top>
                    <p>Coluna {category}</p>
                </Top>

                <LoadCard>
                    {column && (
                        <>
                            {column.map((columnItem) => (
                                <Card
                                    title={columnItem.title}
                                    key={columnItem._id}
                                    subtitle={columnItem.subtitle}
                                    banner={columnItem.banner}
                                    _id={columnItem._id}
                                    publishedAt={columnItem.publishedAt}
                                    type="column"
                                    journalistProfile={columnItem.authorId.profilePicture}
                                    journalistName={columnItem.authorId.name}
                                    category={columnItem.category}
                                />
                            ))}
                        </>
                    )}
                </LoadCard>

                {isLoading && <Spinner />}
                {!hasMoreColumn && <span>Não há mais notícias.</span>}
                <ScrollToTopButton />
            </>
        )
    }