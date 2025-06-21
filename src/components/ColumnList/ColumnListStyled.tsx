import styled from "styled-components";

export const ColumnListContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;

    mark {
        background-color: yellow;
        width: fit-content;
        padding: .5rem;
        align-self: flex-start;
        margin-left: -15px;
    }
`