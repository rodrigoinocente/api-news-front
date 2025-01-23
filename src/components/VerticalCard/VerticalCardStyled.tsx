import styled from "styled-components";

export const CardContainer = styled.section<{ type?: string }>`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;

    img {
        width: 100%;
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    h2 {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    p {
        color: #555;
    }
`