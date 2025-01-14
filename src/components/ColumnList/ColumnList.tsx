import { IColumn } from "../../vite-env";
import { CardColumn } from "../CardColumn/CardColumn";
import { ColumnListContainer } from "./ColumnListStyled";

interface ColumnListProps {
    title: string;
    columns: IColumn[];
}

export function ColumnList({ title, columns }: ColumnListProps) {
    return (
        <>
            <ColumnListContainer>
                <mark>{title}</mark> 
                {columns.map((column) => (
                    <CardColumn
                        key={column._id}
                        _id={column._id}
                        title={column.title}
                        publishedAt={column.publishedAt}
                    />
                ))}
            </ColumnListContainer>
        </>
    )
}
