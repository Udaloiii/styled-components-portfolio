import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.color.accent};
`

export const S = {
    Header,
}

