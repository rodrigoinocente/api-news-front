import styled from "styled-components";

export const CardContainer = styled.section<{ type?: string }>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-color: ${(props) => (props.type === "grey" ? "#E4E4E4" : "transparent")};
    padding: ${(props) => (props.type === "grey" ? " 1rem " : "")};
    
    img {
        width: 100%;
        aspect-ratio: 7/4;
        object-fit: cover;
        }
`

export const CardTitle = styled.div`
    margin-bottom: 1rem;
    margin-top: -25px;
    
    mark {
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
    }

    p {
        color: #555;
        margin-left: ${(props) => (props.type === "noSubtitle" ? "1rem" : "none")};
    }   
`