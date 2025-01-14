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
    transition: all 0.3s ease;
    
    &:last-child {
        border-bottom: none;
    }
    
    &:hover {
        background-color: #E4E4E4;
        border-radius: .5rem;
        margin-left: .1rem;
        padding-left: .5rem;
    }
    
    h2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        font-size: 1.3rem;
        font-weight: normal;
        color: #222222;
    }
`