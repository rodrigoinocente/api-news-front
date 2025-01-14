import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #fff;
    cursor: pointer;

    img {
        width: 100%;
        object-fit: cover;
    }
`

export const TitlePosition = styled.div<{ type?: string }>`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
    p {
        position: relative;
        top: -35px;
        left: -10px;
        letter-spacing: .04rem;
        font-weight: bold;
        font-size: ${(props)=>(props.type === "full" ? "2rem": "1.2rem")};
        background-color: #fff;
        padding: .5rem 1rem;
    }
`

export const SubtitlePosition = styled.footer`
    span {
        position: relative;
        top: -25px;
        font-size: 1rem;
        color: #555;
    }
`