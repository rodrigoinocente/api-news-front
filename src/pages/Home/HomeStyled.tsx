import { styled } from "styled-components";

export const HomeBody = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 80%;
    gap: 1rem;
`

export const HeaderSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: start;     
    gap: 3rem;
    margin: 0 auto;
    border-bottom: 1px solid #CECECE;
    padding-bottom: 1.5rem;
`

export const LittleBanner = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    border-bottom: 1px solid #CECECE;
    margin: .5rem 0;
    padding-bottom: 1rem;
`