import styled from "styled-components";

export const JournlisSection = styled.section`
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 1.5rem;
    margin-bottom: 4rem;

    img {
        width: 200px;
        border-radius: 10%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const InfoHead = styled.div`
    display: flex;
    justify-content: center;
    gap: 8rem;
    margin-bottom: 4rem;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: .7rem;

    h3 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        text-align: center;
        background: #E4E4E4;
        padding: .5rem;
    }
`

export const LoadCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    width: 70%;

    span {
        align-self: center;
        text-align: center;
        font-size: 2rem;
        color: #555;
        width: 12rem;
        padding: .5rem;
        margin-bottom: 1rem;
        background-color: #E4E4E4;
    }
`

export const LastNewsCard = styled.div`
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