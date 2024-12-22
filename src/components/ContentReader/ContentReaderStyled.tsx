import styled from "styled-components"

export const PublicationBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 70%;
    margin: 0 auto ;
    margin-top: 1rem;
    line-height: 1.5;
`

export const PublicationHead = styled.header`
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
        margin-bottom: 1rem;
    }

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

    .newsCategory {
        color: #6d84eb;
        letter-spacing: .1rem;
    }
`

export const ImagePublication = styled.div`
    figure img {
        margin: 0 auto;
        width: 60vw;
        margin: 0rem 0 2rem ;
    }

    figcaption {
        margin-top: -2.4rem;
        font-size: .8rem;
        color: #4f5257;
        text-align: end;
        margin-right: 1rem;
    }
`

export const PublicationContent = styled.div`
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