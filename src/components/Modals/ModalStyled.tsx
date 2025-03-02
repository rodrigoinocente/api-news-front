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
`

export const Content = styled.div`
  position: absolute;
  right: 11px;
  top: 50px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 1.5rem;
  width: 25%;
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0) 0px 0px 183px 5px, inset rgb(0 0 0 / 64%) 0px 0px 5px;
  animation: ${fadeInUp} 0.2s ease-out;

    section {
      align-self: center;
      color: blue;
      cursor: pointer;
    }
`

export const HeadModal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

    h3 {
      color: grey;
      font-size: 1.7rem;
    }

    span {
      cursor: pointer;
      position: absolute;
      right: -17px;
      top: -20px;
      font-size: 1.3rem;
    }
`

export const SectionForm = styled.div`
  form {
    display: flex;
    flex-direction: column; 
    gap: 1rem;
  }
  
  button {
    width: fit-content;
    align-self: center;
    margin-bottom: 1rem;
  }
`