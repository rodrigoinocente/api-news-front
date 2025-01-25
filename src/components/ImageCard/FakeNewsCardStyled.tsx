import styled, { keyframes } from "styled-components";

const moveStripe = keyframes`
   0% { background-position: 0 0; }
   100% { background-position: -500% 0; }
`

export const CardContainer = styled.section<{ $banner?: string }>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-image: 
    linear-gradient(#47444413, #000000b5), 
    ${(props) => `url(${props.$banner})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    
    &.hovered {
        animation: ${moveStripe} 130s linear infinite;
    }
`

export const FakeNewsTag = styled.div<{ type?: string }>`
    position: relative;
    bottom: ${(props) => (props.type === "bigTitle" ? "4rem" : "0")};
    padding: ${(props) => (props.type === "bigTitle" ? ".2rem" : "0")};
    background: repeating-linear-gradient(
        -45deg,
        #0000001c,
        #000000 10px,
        #f0e10b40 10px,
        #f0e10b6c 20px
    );
    background-size: 200% 100%;

    &.hovered {
        animation: ${moveStripe} 130s linear infinite;
    }

    p {
        color: #fff;
        text-shadow: 2px 2px 0px black;
        font-weight: bold;
        text-align: center;
        letter-spacing: .1rem;
    }
`

export const InfoPosition = styled.div<{ type?: string }>`
    display: flex; 
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    padding: ${(props) => (props.type === "bigTitle" ? " 0 0 2rem 2rem " : ".5rem")};
    
    h2 {
        color: #fff;
        letter-spacing: .04rem;
        font-size: ${(props) => (props.type === "bigTitle" ? " 2rem " : "1rem")};
        margin-bottom: ${(props) => (props.type === "bigTitle" ? "none" : "-.5rem")};
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