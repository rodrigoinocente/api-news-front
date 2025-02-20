import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2rem;
  width: 30%;
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0) 0px 5px 15px;
  
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
      right: 0;
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