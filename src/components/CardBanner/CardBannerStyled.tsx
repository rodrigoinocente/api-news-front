import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20rem;
    height: 23rem;
    background-color: #fff;

    img {
        width: 100%;
        height: 12rem;
        object-fit: cover;
    }
`

export const CardInfo = styled.footer`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
    p {
        position: relative;
        top: -35px;
        left: -10px;
        font-weight: bold;
        font-size: 1.2rem;
        background-color: #fff;
        padding: .5rem;
    }

    span {
        position: relative;
        top: -25px;
        font-size: 1rem;
        color: #555;
    }
`
