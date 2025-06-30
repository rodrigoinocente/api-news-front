import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    margin: 2rem 0;
    width: 100vw;

    #icon-update-picture {
        cursor: pointer;
        width: fit-content;
        height: 0;
        position: relative;
        align-self: center;
        top: -50px;
        right: -30px;
    }

    button {
        background: none;
        border: none;
    }

    label {
        font-weight: bold;
    }
`

export const Initial = styled.div`
    display: flex;
    align-self: center;
    gap: 1rem;
    align-items: center;
    font-size: 1.2rem;

    #initialPassword {
        color: #0876FF;
        text-decoration: underline;
    }

    span {
        font-weight: bold;
        margin-right: -8px;
    }
`

export const ContainerForm = styled.div`
    align-self: center;

    label {
        display: flex;
    }

    .zodError {
        justify-self: flex-start;
        margin-left: 1rem;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
        width: 65vw;
    }

    #containerPassword {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        width: 80%;
        align-items: center;
        margin: 0 auto;
        margin-top: 1rem;

        h4 {
            font-size: 1.2rem;
            background-color: #E2E2E2;
            padding: .5rem;
            width: 80vw;
        }

        #iconPassword {
            display: flex;
            align-self: center;
            gap: 1rem;
        }

        input {
            width: 70vw;
        }

    }
`

export const Icon = styled.section`
    img {
        border-radius: 50%;
        width: 2rem;
        padding: 5px;
        cursor: pointer;
    }

    .edit img {
        background:#6d84eb;
    }

    .confirm img {
        background:#04e904;
    }

    .cancel img {
        background: #fa5555;
    }
`