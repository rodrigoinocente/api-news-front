import styled, { keyframes } from "styled-components";

const moveStripe = keyframes`
   0% { background-position: 100% 0; }
   100% { background-position: 0 0; }
`

export const CardContainer = styled.section<{ $banner?: string }>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    filter: grayscale(50%);
    background-image: 
    linear-gradient(#2423231d, #080808a9, #000), 
    ${(props) => `url(${props.$banner})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 8/5;
    justify-content: flex-end;
`

export const FakeNewsTag = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 2rem;
    justify-self: center;
    margin-bottom: 1rem;
    background: repeating-linear-gradient(
        -45deg,
        #0000001c,
        #000000 10px,
        #f0e10b40 10px,
        #f0e10b6c 20px
    );
    background-size: 200% 200%;
    animation: ${moveStripe} 40s linear infinite;

    p {
        color: #fff;
        text-shadow: 2px 2px 0px black;
        font-weight: bold;
        text-align: center;
        letter-spacing: .1rem;
    }
`

export const InfoPosition = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    padding: .5rem;
    
    h2 {
        color: #ebe8e8;
        letter-spacing: .04rem;
        font-size: 1.5rem;
        z-index: 1;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    p {
        color: #fff;
    }   
`