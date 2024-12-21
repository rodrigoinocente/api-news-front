import styled from "styled-components"

export const ColumnBody = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 70%;
    margin: 0 auto ;
    margin-top: 2rem;
    line-height: 1.5;

    .columnCategory {
        width: 100%;
        background-color: #6d84eb;
        text-align: center;
        padding: .5rem;
        font-size: 2rem;
        letter-spacing: .2rem;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
`

export const ColumnHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 80%;
    
    h1 {
        line-height: 1.3; 
    }

    .subtitle {
        font-size: .9rem;
        color: #3a3939;
    }

    img {
        display: flex;
        width: 100%;
        margin: 0rem 0 2rem ;
    }

    figcaption {
        margin-top: -2rem;
        font-size: .8rem;
        color: #4f5257;
        text-align: end;
        margin-right: 1rem;
    }
`

export const JournalistSection = styled.section`
    display: flex;
    gap: 1rem;
    align-items: center;
    
    img {
        width: 70px;
        height: 70px;
        border-radius: 10%;
        object-fit: cover;
        margin-top: 1rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
        transition: transform 0.5s ease;

        &:hover {
            transform: scale(1.2);
        }
    }

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        margin-bottom: 1rem;
        span {
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;

            &:hover {
                text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
            }
        }
    }
`

export const ColmunContent = styled.div`
    div {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        gap: 1.5rem;
        width: 80%;

        p {
            font-size: 1.1rem;
        }
    }
    
`