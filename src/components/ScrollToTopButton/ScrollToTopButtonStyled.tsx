import styled from "styled-components";

export const StyledScrollButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 5px;
  left: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};

  img {
    width: 80px; 
    transition: transform 1s;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: translateY(-3000px);
    }
  }
`
