import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .2rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1;
    box-shadow: rgba(100, 100, 111, .2) 0px 7px 19px 0px;
    align-items: center;
`

export const InputSpace = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;

    button{
    border: none;
    cursor: pointer;
    }

    img {
    width: 1.8rem;
    margin: -15px 5px 0 0 ;
    position: absolute;
    top: 1;
    right: 0;
    z-index: 10;
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
    background-color: #0c0b0b21;
    border: none;
    width: 10vw;
    border-radius: 1rem;
    padding-right: 1.8rem;
    transition: all .5s ease-in-out;

        &:focus {
            border: 2px solid #16151536;
            width: 20vw;
            background-color: #f9f6f620;
        }    
    }
`

export const IconLupa = styled.img`
    width: 1.8rem;
    margin-top: 5px;
    position: absolute;
    top: 1;
    right: 0;
    z-index: 10;
    color: #757575;
    padding: .3rem;
    border: none;
`

export const ImageLogo = styled.img`
    width: 4rem;
    object-fit: cover;
    cursor: pointer;
`
export const ErrorSpan = styled.span`
    display: flex;
    justify-content: flex-end;
    color: #b30505;
    font-size: .8rem;
    margin-bottom: 0;
`