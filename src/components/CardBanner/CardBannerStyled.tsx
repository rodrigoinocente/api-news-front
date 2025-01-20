import styled from "styled-components";

export const CardContainer = styled.section<{ type?: string }>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-color: ${(props) => (props.type === "grey" ? "#E4E4E4" : "transparent")};
    padding: ${(props) => (props.type === "grey" ? " 1rem " : "")};
    overflow: hidden;

    img {
        width: 100%;
        aspect-ratio: 7/4;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    &:hover img {
        transform: scale(1.07);
    }
    
    &:hover h2 {
        transform: translateY(-5px);
    }
`

export const CardTitle = styled.div`
    margin-bottom: 1rem;
    margin-top: -25px;
    
    mark {
        position: absolute;
        z-index: 1;
        margin-top: -1rem;
        padding: .5rem; 
    }
`

export const InfoPosition = styled.div<{ type?: string }>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.type === "noSubtitle" ? "none" : ".6rem")};
    margin: ${(props) => (props.type === "bigTitle" ? "-35px 0 0 25px" : "-25px 0 0 10px")};
    width: 90%;
    
    h2 {
        letter-spacing: .04rem;
        font-size: ${(props) => (props.type === "bigTitle" ? "2rem" : "1.2rem")};
        background-color: #fff;
        padding: .5rem 1rem;
        transition: transform 1s ease;
    }

    p {
        color: #555;
        margin-left: ${(props) => (props.type === "noSubtitle" ? "1rem" : "none")};
    }   
`