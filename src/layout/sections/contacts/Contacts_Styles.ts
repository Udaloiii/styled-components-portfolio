import {theme} from "src/styles/Theme.tsx";
import styled from "styled-components";

const Contacts = styled.section`
  //padding-top: 60px; // чтобы при скролле учитывало длину Header
  margin-bottom: 50px;
`
const ContactsForm = styled.form`
  margin: 0 auto;
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 0 20px;
`

const ContactsTextArea = styled.textarea`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  height: 155px;
  padding: 5px 10px;
  resize: none;
  outline: none;
  transition: .3s;
  border: 1px solid ${theme.color.primary};
  border-radius: 4px;
  background: ${theme.color.secondary};
  color: ${theme.color.font};

  &:focus {
    border-color: ${theme.color.accent};
    transition: .3s;
    transform: scale(1.02);
  }

  @media ${theme.media.mobile} {
    padding: 3px 7px;
  }
`
export const S = {
    Contacts,
    ContactsForm,
    ContactsTextArea
}