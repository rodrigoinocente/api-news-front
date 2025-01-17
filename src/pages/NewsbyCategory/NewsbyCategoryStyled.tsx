import styled from "styled-components";

export const BodyHead = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 90%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-bottom: 1px dashed #c5c2c2;
`

export const CardsHead = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem 3rem;
    margin: 0 auto;
    padding: 2rem; 
`

export const NewsAndColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-right: 1px dashed #c5c2c2;
    padding: 2rem;

    button {
        align-self: flex-start;
        margin-top: -2rem;
    }
`

export const LoadCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 70%;
    align-content: center;
    margin: 0 auto;
    padding-top: 3rem;
`