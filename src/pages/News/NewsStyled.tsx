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
        align-self: self-start;
    }

    .subtitle {
        font-size: .9rem;
        color: #3a3939;
    }

    img {
        width: 100%;
        margin: 2rem 0 2rem ;
    }

    figcaption {
        margin-top: -2.5rem;
        font-size: .8rem;
        color: #4f5257;
        text-align: end;
        margin-right: 1rem;
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