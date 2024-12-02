import styled from "styled-components";

export const BodyHead = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px dashed #c5c2c2;
`

export const CardsHead = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem 4rem;
    margin: 0 auto;
    padding: 1rem; 
    justify-items: center;
    align-items: center;
`

export const LastNewsCard = styled.div`
    border-left: 1px dashed #c5c2c2;
    justify-items: center;    
    align-content: center;
    
    section {
        padding: 1rem;
        background-color: #E4E4E4;
    }

    mark {
        margin-left: -9rem;
        text-align: justify;
        padding: .5rem;
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