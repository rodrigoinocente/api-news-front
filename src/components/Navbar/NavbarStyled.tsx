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
        transform: translateX(42%);
        font-size: .8rem;
        color: #575555;
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
    gap: 1rem;
`

export const InputSpace = styled.div`
    position: relative;
    display: flex;

    button {
        border: none;
        cursor: pointer;
    }

    img {
    width: 1.6rem;
    margin: -13px 5px 0 0 ;
    position: absolute;
    right: 0;
    color: #757575;
    border: none;
    transition: transform 0.7s ease;
        &:hover{
            transform: rotate(360deg);
        }
    }

    input {
    outline: none;
    font-size: 1rem;
    padding: .6rem;
    border: 1px solid #16151536;
    width: 7rem;
    height: 2rem;
    transition: all .5s ease-in-out;

        &:focus {
            border: 3px solid #16151536;
            width: 15rem;
        }    
    }
`

export const ErrorSpan = styled.span`
    display: flex;
    justify-content: flex-end;
    color: #b30505;
    font-size: .8rem;
    margin-bottom: 0;
`