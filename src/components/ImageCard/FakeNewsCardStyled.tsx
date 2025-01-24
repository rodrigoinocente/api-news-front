import styled from "styled-components";

export const CardContainer = styled.section<{ $banner?: string }>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    overflow: hidden;
    background-image: 
    linear-gradient(#47444413, #000000b5), 
    ${(props) => `url(${props.$banner})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`

export const InfoPosition = styled.div<{ type?: string }>`
    display: flex; 
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    padding: ${(props) => (props.type === "bigTitle" ? " 0 0 2rem 2rem " : ".5rem")};
    
    h2 {
        color: #fff;
        letter-spacing: .04rem;
        font-size: ${(props) => (props.type === "bigTitle" ? " 2rem " : "1rem")};
        margin-bottom: ${(props) => (props.type === "bigTitle" ? "none" : "-.5rem")};
    }

    p {
        color: #fff;
    }   
`