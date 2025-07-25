import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 2rem;

     #comments {
        display: flex;
        align-items: center;
        justify-self: center;
        gap: .7rem;
        font-size: 1.2rem;
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }
`

export const TextareaSection = styled.section`
    text-align: center;
    width: 100%;
    position: relative;

    textarea {
        width: 90%;
        border-radius: 10px;
        padding: 10px 40px 10px 10px;
        height: auto;
        overflow-y: hidden;
        resize: none;
    }

    img {
        width: 40px;
    }

    button {
        all: unset;
        position: absolute;
        right: 20px;
        align-self: flex-end;
        margin: 0 5px 5px 0;
    }
`