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
    background-color: #fff;
`
export const CardBody = styled.article`
    display: flex; 
    width: 100%;
    height: 100%;
   
    div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      width: 100%;
    }

    img{
        width: 30%;
        border-radius: 0 .3rem .3rem 0;
        object-fit: cover;
    }
`
export const CardHeader = styled.article<{ $top?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${(props) => (props.$top ? "1.3rem" : "1rem")};

    h2{
        margin-bottom: 1rem;
        font-size: ${(props) => (props.$top ? "2.1rem" : "1.5rem")};
        width: 100%;
        text-align: center;
    }
    
`
export const CardFooter = styled.section`
display: flex;
gap: 1rem;

section{
    display: flex;
    align-items: center;
    gap: .2rem
}

img{
    width: 1rem;
}
`