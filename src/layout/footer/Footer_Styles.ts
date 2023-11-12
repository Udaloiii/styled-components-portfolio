import styled from "styled-components";
import {font} from "src/styles/Common.ts";
import {theme} from "src/styles/Theme.tsx";

const Footer = styled.footer`
  //padding-top: 60px; // чтобы при скролле учитывало длину Header
`

const FooterName = styled.h3`
  padding: 20px;
  letter-spacing: 3px;
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 28, Fmin: 18})}
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;

  @media ${theme.media.mobile} {
    gap: 20px;
  }

  @media screen and (max-width: 350px) {
    gap: 15px;
  }
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  background-color: ${theme.color.secondary};
  transition: .3s;
  color: ${theme.color.accent};

  &:hover {
    transform: scale(1.2);
    transition: .2s;
    background-color: ${theme.color.accent};
    color: ${theme.color.secondary};
  }

  &:active {
    transform: scale(0.95);
    transition: .2s;
  }

  @media ${theme.media.mobile} {
    height: 65px;
    width: 65px;
  }

  @media screen and (max-width: 350px) {
    height: 60px;
    width: 60px;
  }
`
const Text = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 0 20px;
  opacity: 0.5;
`
export const S = {
    Footer,
    FooterName,
    SocialList,
    Link,
    Text
}