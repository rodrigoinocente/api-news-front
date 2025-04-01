import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    text-align: center;

    .icon-update-picture {
        position: relative;
        bottom: 30px;
        left: 30px;
        cursor: pointer;
    }

    button {
        background: none;
        border: none;
    }
`

export const SectionForm = styled.section`
    
`

export const IconEdit = styled.section`
    img {
        background:#6d84eb;
        border-radius: 50%;
        width: 2rem;
        padding: 5px;
        cursor: pointer;
    }
`

export const IconConfirm = styled.section`
    img {
        background:#04e904;
        border-radius: 50%;
        width: 2rem;
        padding: 4px;
        cursor: pointer;
    }
`

export const IconCancel = styled.section`
    img {
        background: #fa5555;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        padding: 4px;
        cursor: pointer;
    }
`