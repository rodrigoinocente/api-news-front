import styled from "styled-components";

export const JournlisSection = styled.section`
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 1.5rem;
    margin-bottom: 4rem;

    img {
        width: 100px;
        border-radius: 10%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const LoadCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    width: 70%;

    mark {
        align-self: center;
        text-align: center;
        font-size: 2rem;
        color: #555;
        width: 12rem;
        padding: .5rem;
        border-radius: 10px;
        margin-bottom: 1rem;
    }
`