import styled from "styled-components";

export const BodyHead = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
    margin: 2rem 0;
`

export const CardsHead = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
`

export const NewsAndColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    #columList {
        display: flex;
        flex-flow: column nowrap;
        width: 90%;
        border-bottom: dashed 2px #CECECE;
        border-top: dashed 2px #CECECE;
        padding: .5rem;
    
        button {
        align-self: flex-end;
        margin: -.7rem -15px 0 0;
        color: blue;
        padding: .5rem;
        }
    }
`

export const LoadCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;
    width: 95%;
    margin: 0 auto;
    padding-top: 3rem;
`