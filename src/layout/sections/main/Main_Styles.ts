import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";
import {font} from "src/styles/Common.ts";

const Main = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-top: 60px; // чтобы при скролле учитывало длину Header
`

const WrapperForImg = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    top: -24px;
    right: -34px;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.color.accent};
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -20px;
      right: -21px;
    }
  }

`
const Img = styled.img`
  background: rgb(44, 44, 44);
  box-shadow: inset 0 0 6px 1px rgba(232, 232, 232, 0.8);
  filter: drop-shadow(0px 0px 10px ${theme.color.accent});
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const MainTitle = styled.h1`
  ${font({Fmin: 20, Fmax: 27, weight: 400})}
  display: flex;
  
  p {
    display: none; // для поискового робота
  }
`
const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", Fmax: 50, Fmin: 36, weight: 700})};
  margin: 20px 0;
  letter-spacing: 0.05rem;
  display: flex;
  flex-wrap: wrap;

  span {
    position: relative;
    z-index: 0; // для того, чтобы полоска была "под" текстом
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: ${theme.color.accent};
      height: 20px;
      z-index: -1; // для того, чтобы полоска была "под" текстом
    }
  }
`
const Text = styled.span`
  display: flex;
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const S = {
    Main,
    WrapperForImg,
    Img,
    MainTitle,
    Name,
    Text
}