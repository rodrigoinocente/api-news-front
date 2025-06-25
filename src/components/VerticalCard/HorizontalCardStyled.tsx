import styled from "styled-components";

export const CardContainer = styled.section<{ type?: string }>`
    display: flex;
    flex-flow: row nowrap;
    gap: .5rem;

    img {
        width: 120px;
        aspect-ratio: 6/4;
        object-fit: cover;
        border-radius: 5%;
    }

    #info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        hyphens: auto;
    }
`