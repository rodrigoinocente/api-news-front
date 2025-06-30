import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-self: center;
    width: 95%;
    gap: 1rem;
    margin: 1rem 0;
`

export const TextResults = styled.section`
    
    h3{
        word-wrap: break-word;

        span{
            color: #807e7e;
            font-size: 1.5rem;
            text-decoration: underline;
        }
    }

`
export const ContainerResults = styled.section`
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
`