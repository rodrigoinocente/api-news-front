import styled from "styled-components"

export const ButtonSpace = styled.button`
    color: #4d4c4c;
    background: #E4E4E4;
    font-weight: 600;
    border: none;
    font-size: 1rem;
    padding: .4rem .4rem;
    cursor: pointer;
    letter-spacing: .1rem;
    transition: all .6s ease-in-out;
    
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
            background-color: #cdcdcd;
        }
`