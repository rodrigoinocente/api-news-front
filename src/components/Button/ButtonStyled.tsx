import styled from "styled-components"

export const ButtonSpace = styled.button`
    border: 2px solid #16151536;
    font-size: 1rem;
    padding: .4rem 2rem;
    cursor: pointer;
    border-radius: 1rem;
    letter-spacing: .1rem;
    transition: all .6s ease-in-out;
    
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
            background-color: #cdcdcd;
        }
`