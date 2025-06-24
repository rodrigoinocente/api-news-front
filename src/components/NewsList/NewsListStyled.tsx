import styled from "styled-components";

export const NewsListContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;

    #title {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-end;
        justify-items: end;
    }

    #title span {
        border-bottom: 1px solid #CECECE;
        width: 100%;
    }
    
    mark {
        background-color: #E2E2E2;
        width: fit-content;
        padding: .5rem;
        align-self: flex-start;
        margin-left: -15px;
    }
`

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    cursor: pointer;
    
    &:not(:last-child)::after {
        content: '';
        width: 30%;
        border-bottom: 3px dashed #E2E2E2;
        margin-top: .5rem;
    }

    h2, p {
        transition: all 0.3s ease;
    }

    p {
        margin-bottom: -.5rem;
        color: #555;
    }

    &:hover h2 {
       text-shadow: 1px 1px 0px black;
    }

    &:hover p {
       color: #000;
    }
   
`