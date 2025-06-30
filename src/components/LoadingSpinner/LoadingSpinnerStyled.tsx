import styled from "styled-components";

export const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    height: 100vh;

    div {
        border: 8px solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        border-left-color: #3498db;
        width: 80px;
        height: 80px;
        animation: spin 1s linear infinite;
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