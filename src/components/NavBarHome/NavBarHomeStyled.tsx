import styled from "styled-components";

export const NavHome = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .5rem 0 1rem 0;
 `

export const LogoBanner = styled.div`
    width:100%;
    cursor: pointer;
    
    div {
        height: 8rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;    
        background-size: cover;
    }

    img {
        padding: 1.5rem;
        background-color: #fff;
        border-radius: 0 10px 0 10px;
    }
`

export const ButtonCategory = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    border-top: 1px solid #dbd8d8;
    border-bottom: 1px solid #dbd8d8;
    width: 90%;
    
    button {
        cursor: pointer;
        border: none;
        background: none;
        padding: .5rem;
        transition: all 0.5s ease;

        &:hover{
            background: #000;
            color: #fff;
        }
    }
`