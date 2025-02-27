import styled from "styled-components"

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
border-radius: 4px;
box-shadow: rgb(0, 0, 0) 0px 0px 234px 57px,inset rgb(0, 0, 0) 0px 0px 5px;
color: grey;
text-align: center;

  p {
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }

  p:first-of-type {
    margin-bottom: .5rem;
  }
`

export const HeadModal = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 1rem;
  
  span {
    cursor: pointer;
    position: absolute;
    right: -17px;
    top: -20px;
    font-size: 1.3rem;
  }

  p {
    margin-top: -.5rem;
    font-size: 1.5rem;
    color: #313030;
    cursor: initial;

  }
  
  img {
    width: 6rem;
    border-radius: 50%;
  }
`