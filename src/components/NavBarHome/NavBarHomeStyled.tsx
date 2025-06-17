import styled from "styled-components";

export const NavHome = styled.nav`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    /* align-items: center; */
    /* align-items: center; */
    /* margin: .5rem 0 1rem 0; */
`

export const LogoBanner = styled.div`
    /* width: 100%; */
    cursor: pointer;

    div {
        /* height: 8rem; */
        /* width: 100%; */
        display: flex;
        justify-content: center;
        padding: .3rem;
        /* justify-items: center; */
        /* height: 100vh; */
        
        /* align-items: center; */
        background-size: cover;
    }

    img {
        width: 70%;
        
        /* margin-top: .3rem; */
        padding: .7rem 1rem;
        background-color: #fff;
        border-radius: 0 10px 0 10px;
    }
`

export const ButtonCategory = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .6rem;
    border-top: 1px solid #dbd8d8;
    border-bottom: 1px solid #dbd8d8;
    /* width: 90%; */

    button {
        cursor: pointer;
        border: none;
        background: none;
        padding: .5rem;
        transition: all 0.5s ease;
        letter-spacing: .03rem;
        
        font-size: 1.2rem;
        &:hover {
            background: #000;
            color: #fff;
        }

        &.active {
            background: #000;
            color: #fff;
            font-weight: bold;
        }
    }
`