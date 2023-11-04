import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";


export const Title = styled.h2`
  position: relative;
  font-family: "Broadway", sans-serif;
  text-shadow: 1px 1px 2px ${theme.color.accent};
  font-size: 1.5rem;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 90px;
  
  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.color.accent};
    left: 50%;
    bottom:-10px;
    transform: translateX(-50%);
  }
`