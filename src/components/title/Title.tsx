import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";
import {font} from "src/styles/Common.ts";


export const Title = styled.h2`
  position: relative;
  text-shadow: 1px 1px 2px ${theme.color.accent};
  letter-spacing: 3px;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 90px;
  ${font({family: "'Broadway', sans-serif", Fmax: 36, Fmin: 30, weight: 600})}
  
  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.color.accent};
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }
  
  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`