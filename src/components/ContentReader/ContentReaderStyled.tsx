import styled from "styled-components"

export const PublicationBody = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0 3rem 0;
    line-height: 1.5;
`

export const PublicationHead = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    
    h1 {
        line-height: 1.3;
    }

    .subtitle {
        color: #3a3939;
        hyphens: auto;
    }

    .columnCategory {
        /* width: 100%; */
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
        width: 100%;
        aspect-ratio: 7/4;
        object-fit: cover;
        object-fit: cover;
    }

    figcaption {
        font-size: .9rem;
        color: #4f5257;
        text-align: end;
        margin: 0 1rem 1rem 0;
        width: 95%;
        line-height: 1rem;
    }
`

export const PublicationContent = styled.div`
    div {
        display: flex;
        flex-direction: column;
        justify-self: center;
        gap: 1.5rem;
        width: 90%;

        p {
            font-size: 1.3rem;
            hyphens: auto;
        text-align: justify;

        }
    }
`