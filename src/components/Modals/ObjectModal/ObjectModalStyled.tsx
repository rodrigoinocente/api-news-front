import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateX(0px);
  }
`

export const Overlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: #0000007a;
  `

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;
  position: absolute;
  width: 80%;
  top: 50px;
  background: #fff;
  padding: .5rem 1rem 1rem 1rem;
  border-radius: 4px;
  animation: ${fadeInUp} 0.2s ease-out;

    section {
      color: blue;
      cursor: pointer;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
  
    button {
      width: fit-content;
      align-self: center;
      font-size: 1.3rem;
      padding: .4rem .9rem;
    }

    p {
      font-size: 1.3rem;
      color: #3b3939;
    }

    p:last-of-type {
      font-size: 1rem;
      color: red;
    }

    .errorSpanModal {
      display: flex;
      justify-content: center;
      color: #b30505;
      font-size: .8rem;
      margin-top: -1rem;
    }
`

export const HeadModal = styled.div`
    text-align: center;

    h3 {
      font-size: 1.5rem;
    }

    img {
      width: 1.5rem;
      position: absolute;
      right: 8px;
      top: 8px;
    }
`