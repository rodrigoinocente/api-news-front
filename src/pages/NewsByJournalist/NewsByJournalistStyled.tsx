import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
`

export const JournlisSection = styled.section`
    width: 90%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 1.5rem;

    img {
        width: 25%;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            font-size: 1.1rem;
        }
    }
`

export const InfoHead = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
`

export const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h3 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        text-align: center;
        padding: .5rem;
    }

    img {
        cursor: pointer;
        width: 3rem;
        align-self: end;
        margin: -1.5rem 1.5rem 0 0 ;
        background-color: #ffffff;
        transition: transform 0.3s ease;
        
        &:hover {
        transform: scale(1.2);
        }
    }
`

export const LoadCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    width: 95%;
    
    span {
        background: #6d84eb;
        align-self: center;
        text-align: center;
        font-size: 2rem;
        width: 90%;
        padding: .5rem;
        border-radius: 5px;
    }
`