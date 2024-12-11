import styled from "styled-components"

export const NewsBoby = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 70%;
    margin: 0 auto ;
    margin-top: 2rem;
    line-height: 1.5;
`

export const NewsHead = styled.div`
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
        }
    }
`

export const NewsContent = styled.div`
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