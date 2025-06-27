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
    mark {
        position: relative;
        z-index: 1;
        top: 5px;
        left: 10px;
        padding: .5rem; 
    }
`

export const InfoPosition = styled.div<{ type?: string }>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.type === "noSubtitle" ? "none" : ".6rem")};
    margin: -30px 0 0 15px;
    width: 90%;
    
    h2 {
        letter-spacing: .04rem;
        background-color: #fff;
        padding: .5rem 1rem;
        transition: transform 1s ease;
    }

    p {
        color: #555;
        margin-left: ${(props) => (props.type === "noSubtitle" ? "1rem" : "none")};
    }   
`