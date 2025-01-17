import styled from "styled-components";

export const ColumnListContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;

    mark {
        background-color: yellow;
        width: fit-content;
        padding: .5rem;
        margin: 0 0 .5rem 1rem;
    }
`