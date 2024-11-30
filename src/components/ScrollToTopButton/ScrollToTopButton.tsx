import { useState, useEffect } from "react";
import { StyledScrollButton } from "./ScrollToTopButtonStyled";
import arrowTop from "../../images/icons/icon-arrowTop.png"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  return (
    <StyledScrollButton $isVisible={isVisible} onClick={scrollToTop}>
      <img src={arrowTop} alt="" />
    </StyledScrollButton>
  )
}
