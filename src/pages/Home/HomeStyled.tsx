import { styled } from "styled-components";

export const HomeBody = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 80%;
`

export const HeaderSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: start;
    align-items: start;    
    justify-items: center;
    gap: 3rem;
    margin: 0 auto;
    border-bottom: 1px solid #CECECE;
    margin-bottom: 1rem;
`

export const LittleBanner = styled.div`
    display: flex;
    gap: 2rem;
    border-bottom: 1px solid #CECECE;
    margin: .5rem 0;
    width: 100%;
`