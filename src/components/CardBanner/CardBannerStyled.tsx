import styled from "styled-components";

export const CardContainer = styled.section`
    width: 100%;
    height: auto;
    margin-bottom: -1rem;
    cursor: pointer;

    img {
        width: 100%;
        object-fit: cover;
    }
`

export const InfoPosition = styled.div<{ type?: string }>`
    display: flex;
    flex-direction: column;
    gap: .7rem;
    width: 95%;
    position: relative;
    top: ${(props)=>(props.type === "bigTitle" ? "-45px": "-30px")};
    right: -10px;


    h2 {
        letter-spacing: .04rem;
        font-size: ${(props)=>(props.type === "bigTitle" ? "2rem": "1.2rem")};
        background-color: #fff;
        padding: .5rem 1rem;
    }

    p {
        color: #555;
    }
`