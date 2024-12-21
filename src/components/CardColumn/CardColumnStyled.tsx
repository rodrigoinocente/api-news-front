import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    max-width: 40rem;
    border-bottom: 1px solid #ddd;
    padding: 5px 0;
    margin-bottom: .7rem;
    cursor: pointer;
    
    &:last-child {
        border-bottom: none;
    }
    
    h2 {
        font-size: 1.3rem;
        color: #434343;
    }
`