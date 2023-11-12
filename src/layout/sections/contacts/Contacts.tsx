import {Title} from "src/components/title/Title.tsx";
import {Input} from "src/components/input/Input.tsx";
import {Button} from "src/components/button/Button.tsx";
import {Container} from "src/components/container/Container.tsx";
import {S} from './Contacts_Styles.ts'
import {FC} from "react";

export const Contacts: FC = () => {
    return (
        <S.Contacts id={"Contact"}>
            <Container>
                <Title>Contacts</Title>
                <S.ContactsForm>
                    <Input name={"name"}/>
                    <Input name={'email'}/>
                    <S.ContactsTextArea placeholder={"text"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.ContactsForm>
            </Container>
        </S.Contacts>
    )
}