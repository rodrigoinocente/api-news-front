import { styled } from "styled-components";

export const CardContainer = styled.section`
    margin-top: 8rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-shadow: #0d0d0e5c 0px 7px 29px 0px;
    border-radius: .5rem;
    padding: 1rem;

`
export const CardBody = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;


    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    }

    h2{
        margin-bottom: 1rem;
    }

    img{
        width: 40%;
        border-radius: .5rem;
        /* object-fit: cover;
        object-position: center; */
    }
`

export const CardFooter = styled.section`
display: flex;
gap: 1rem;

div{
    display: flex;
    align-items: center;
    gap: .2rem
}

img{
    width: 1rem;
}
`