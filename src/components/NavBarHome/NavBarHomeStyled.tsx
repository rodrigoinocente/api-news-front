import styled, { keyframes, css } from "styled-components";

export const NavHome = styled.nav`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const LogoBanner = styled.div`
    cursor: pointer;

    div {
        display: flex;
        justify-content: center;
        padding: .3rem;
        background-size: cover;
    }

    img {
        width: 70%;
        padding: .7rem 1rem;
        background-color: #fff;
        border-radius: 0 10px 0 10px;
    }
`

const slideIn = keyframes`
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(+5%);
  }

  `
export const Placart = styled.div`
    overflow: scroll;
    background-color: #e4e4e489;
    margin-bottom: 0.5rem;
    scrollbar-width:none;
`
export const ButtonCategory = styled.div<{ $animate?: boolean }>`
    display: flex;
    white-space: nowrap;
    scrollbar-width:none;

    ${({ $animate }) =>
        $animate &&
        css`
            animation: ${slideIn} 40s linear infinite;
            &:hover {
                animation-play-state: paused;
                    }
            `
        }

    button {
        cursor: pointer;
        border: none;
        background: none;
        padding: 0.5rem 1rem;
        transition: all 0.5s ease;
        letter-spacing: .06rem;
        font-size: 1.3rem;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.4);

        &.active {
            background: #000;
            color: #fff;
            font-weight: bold;
        }
    }
`