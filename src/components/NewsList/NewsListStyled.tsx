import styled from "styled-components";

export const NewsListContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    padding-bottom: 1rem;

    mark {
        background-color: #E2E2E2;
        width: fit-content;
        padding: .5rem;
        margin-left: 1rem;
    }
`

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    cursor: pointer;
    
    &:not(:last-child)::after {
        content: '';
        width: 30%;
        border-bottom: 3px dashed #E2E2E2;
        margin-top: .5rem;
    }

    h2 {
        transition: color 0.3s ease;
    }

    &:hover h2 {
       color: #888686;
    }

    p {
        margin-bottom: -.5rem;
        color: #555;
    }
`