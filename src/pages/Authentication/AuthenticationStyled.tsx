import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 80vh;
    display: flex;
    align-items:  center;
    width: 70%;
    margin: 0 auto;
    
    form{
        display: flex;
        flex-direction: column;
        gap: .8rem;
        width: 100%;
        border-radius: 5px;
    }
`
export const Section = styled.section<{ type?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 400px;
    padding: 2rem;
    gap: 1rem;
    border-radius: 7px;
    background-color: ${(props)=>(props.type === "signin" ? "grey": "white")};
    color: ${(props)=>(props.type === "signup" ? "grey": "white")};

    h2{
        font-size: 2rem;
        text-align: center;
    }

    button{
        align-self: center;
        margin-top: 1rem;
    }
`