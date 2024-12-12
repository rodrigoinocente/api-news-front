import { styled } from "styled-components";

export const CardContainer = styled.section`
    margin-top: 8rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 200px;
    box-shadow: #0d0d0e5c 0px 7px 29px 0px;
    border-radius: .5rem;
    background-color: #fff;
    cursor: pointer;
`
export const CardBody = styled.article`
    display: flex; 
    height: 100%;
   
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
    }

    img{
        width: 250px;
        border-radius: 0 .3rem .3rem 0;
        object-fit: cover;
    }
`
export const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    h2{
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }
    
`