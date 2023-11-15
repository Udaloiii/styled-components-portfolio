import {Icon} from "src/components/icon/Icon.tsx";
import {theme} from "src/styles/Theme.tsx";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll/modules";

export const Logo = () => {
    return (
        <Link href={"#"} onClick={()=> scroll.scrollToTop()}>
            <Icon iconId={"logoSvg"} viewBox={"0 0 512 512"}/>
        </Link>
    )
}

const Link = styled.a`
  color: ${theme.color.accent};
  transition: .2s;

  &:hover {
    transform: scale(1.1);
    transition: .2s;
  }
  &:active {
    transform: scale(0.9);
    transition: .2s;

    svg {
      color: #8683d5;
    }
  }
`