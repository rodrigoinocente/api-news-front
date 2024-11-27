import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .2rem 2rem;
    position: fixed;
    top: 0;
    background-color: #fff;
    z-index: 1;

    p {
        transform: translateX(50%);
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

export const UserLoggedSpace = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: .1rem;
    margin-top: .5rem;

    h4{
        font-size: 1.3rem;
        color: #757575;
        transition: all .3s;
        cursor: pointer;
        transition: color 0.3s ease;
    }
    h4:hover{
        color: black;
    }
    button{
        background: none;   
        border: none;       
        cursor: pointer;     
        align-self: flex-end;
        color: black;
    }
    a {
        text-decoration: none;
    }
`