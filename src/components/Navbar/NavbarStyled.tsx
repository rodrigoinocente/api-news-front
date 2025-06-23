import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .2rem .2rem;
    position: fixed;
    top: 0;
    background-color: #fff;
    z-index: 1;
    border-bottom: 1px dashed #c5c2c2;

    p {
        font-size: .8rem;
        color: #575555;
        position: relative; 
        white-space: nowrap;
    }
`

export const MenuNav = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

        img {
            width: 1.5rem;
        }

        span {
            display: none;
        }
`

export const RightNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
`

export const InputSpace = styled.div`
    position: relative;
    display: flex;

    button {
        border: none;
    }

    .lupa-submit{
    width: 1.6rem;
    margin: -16px 5px 0 0;
    position: absolute;
    right: 0;
    transition: transform 0.7s ease;
    z-index: 11;
        &:hover{
            transform: rotate(360deg);
        }
    }

    input {
    outline: none;
    font-size: 1rem;
    padding: .6rem 2rem .6rem .6rem;
    border: 1px solid #16151536;
    width: 5rem;
    height: 2rem;
    transition: all .5s ease-in-out;

        &:focus {
            border: 3px solid #16151536;
            width: 65vw;
            position: absolute;
            top: -5px;
            right: 0;
            z-index: 5;
        }
    }
`

export const ErrorSpan = styled.span`
    display: flex;
    justify-content: center;
    color: #b30505;
    font-size: .8rem;
`