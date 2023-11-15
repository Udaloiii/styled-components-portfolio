import styled from "styled-components";
import {Icon} from "src/components/icon/Icon.tsx";
import {theme} from "src/styles/Theme.tsx";
import {animateScroll as scroll} from "react-scroll/modules";
import {FC, useEffect, useState} from "react";


export const GoTop: FC = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 200 ? setShow(true) : setShow(false)
        })
    }, [])

    return (
        <>
            {show && <Button onClick={() => scroll.scrollToTop()}>
                <Icon iconId={"top"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            </Button>}
        </>

    )
}
const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: ${theme.color.font};
  background-color: transparent;
  transition: .3s;

  &:active {
    transform: scale(0.9);
    transition: .2s;
  }

  & svg {
    background-color: transparent;
    border-radius: 6px;
    width: 50px;
    height: 50px;
    transition: .2s;

    &:active {
      box-shadow: 0 0 8px 2px white;
      color: ${theme.color.accent};
      transition: .2s;
    }
  }
`