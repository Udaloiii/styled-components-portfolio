import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";

type InputPropsType = {
    name:string

}
export const Input = ({name}:InputPropsType) => {
    return (
        <StyledInput placeholder={name}>

        </StyledInput>
    )
}

const StyledInput = styled.input`
  outline: none;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 40px;
  border: 1px solid ${theme.color.primary};
  border-radius: 4px;
  background: ${theme.color.secondary};
  padding: 5px 10px;
  color: ${theme.color.font};
  transition: .3s;

  &:focus {
    border-color: ${theme.color.accent};
    transition: .3s;
    transform: scale(1.02);
  }

  @media ${theme.media.mobile} {
    padding: 3px 7px;
  }
`