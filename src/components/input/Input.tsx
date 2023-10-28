import styled from "styled-components";

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
  width: 540px;
  height: 32px;
  border: 1px solid #4A4A4A;
  border-radius: 4px;
  background: #252527;
  padding: 5px 10px;
  color: bisque;
  transition: .3s;
  
  &:focus {
    border-color: cornflowerblue;
    transition: .3s;
    transform: scale(1.02);
  }
`