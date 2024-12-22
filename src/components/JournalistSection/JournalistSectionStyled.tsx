import styled from "styled-components";

export const JournalistSectionStyled = styled.section`
    display: flex;
    gap: 1rem;
    align-items: center;
    
    img {
        width: 70px;
        height: 70px;
        border-radius: 10%;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
        transition: transform 0.5s ease;

        &:hover {
            transform: scale(1.2);
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    p {
        span {
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`