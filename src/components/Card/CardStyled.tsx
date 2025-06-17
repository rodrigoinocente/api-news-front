import { styled } from "styled-components";

export const CardBody = styled.article`
    /* display: flex; ' */
    width: 100%;
    /* height: 220px; */
    border: solid 1px #CECECE;
    /* box-shadow: #0d0d0e5c 0px 7px 29px 0px; */
    border-radius: .5rem;
    cursor: pointer;
    
    img{
        width: 100%;
        border-radius: 0 .3rem .3rem 0;
        object-fit: cover;
    }

    .column {
        align-self: center;
        writing-mode: vertical-rl;
        text-orientation: upright;
        letter-spacing: .4rem;
        text-align: center;
        background-color: #6d84eb;
        color: #fff;
        font-weight: bold;
        height: 100%;
        border-radius: .3rem 0 0 .3rem;
    }
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1rem .5rem 1rem;
    width: 100%;
    
    h2 {
        font-size: 1.5rem;
    }
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

export const FooterCard = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    img {
        width: 30px;
        border-radius: 50%;
    }

    .journalist {
        display: flex;
        align-items: center; 
        gap: 1rem;
    }

    p span {
        font-weight: bold;
    }
`