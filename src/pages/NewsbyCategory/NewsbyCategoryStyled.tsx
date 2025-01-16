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
`
export const Column = styled.div`
    border: 1px solid black;
    padding: 1rem;
    border-radius: 10px;

    h4 {
        position: relative;
        margin-top: -30px;
        border-radius: 5px;
        text-align: center;
        font-size: 1.5rem;
        white-space: 1rem;
        letter-spacing: .1rem;
        color: #fff;
        background-color: #6d84eb;
        padding: .3rem;
        width: 7rem;
        margin-bottom: 1rem;
    }

    button {
        position: absolute;
        margin-left: 150px;
        border-radius: 5px;
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