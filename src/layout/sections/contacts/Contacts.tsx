import styled from "styled-components";
import {Title} from "src/components/title/Title.tsx";
import {Input} from "src/components/input/Input.tsx";

export const Contacts = () => {
    return (
        <StyledContacts id={"Contact"}>
            <Title>Contacts</Title>
            <StyledForm >
                <Input name={"name"}/>
                <Input name={'email'}/>
                <StyledTextArea placeholder={"text"}/>
                <StyledButton type={"submit"}>Send message</StyledButton>
            </StyledForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
  //background-color: bisque;
  min-height: 100vh;
  border: 1px solid grey;
  padding-top: 60px; // чтобы при скролле учитывало длину Header
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const StyledTextArea = styled.textarea`
  width: 540px;
  height: 155px;
  padding: 5px 10px;
  resize: none;
  outline: none;
  transition: .3s;
  border-radius: 4px;
  background: #252527;
  color: bisque;

  &:focus {
    border-color: cornflowerblue;
    transition: .3s;
    transform: scale(1.02);
  }
`

const StyledButton = styled.button`
  padding: 12px 14px;
  outline: none;
  border: none;
  background-color: cornflowerblue;
  transition: .2s;
  color: bisque;
  font-size: 1rem;
  border-radius: 14px;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 0 5px 2px rgb(45, 83, 131);
    transition: .2s;
    color: #fdeedd;
  }

  &:active {
    transform: scale(0.9);
    transition: .2s;
    box-shadow: 0 0 8px 6px rgb(45, 83, 131);
  }

`