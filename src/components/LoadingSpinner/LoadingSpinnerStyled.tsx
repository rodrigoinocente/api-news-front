import styled from "styled-components";

export const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 5rem;
    height: 100vh;

    div {
        border: 8px solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        border-left-color: #3498db; /* Cor do spinner */
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite; /* Animação de rotação */
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`