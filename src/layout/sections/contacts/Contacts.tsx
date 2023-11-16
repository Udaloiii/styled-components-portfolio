import {Title} from "src/components/title/Title.tsx";
import {Input} from "src/components/input/Input.tsx";
import {Button} from "src/components/button/Button.tsx";
import {Container} from "src/components/container/Container.tsx";
import {S} from './Contacts_Styles.ts'
import {ElementRef, FC, FormEvent, useEffect, useRef, useState} from "react";
import {AnimatePresence} from "framer-motion";
import emailjs from '@emailjs/browser';

export const Contacts: FC = () => {
    const [sendSuccess, setSendSuccess] = useState(false)
    const form = useRef<ElementRef<'form'>>(null);


    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return

        emailjs.sendForm('service_ui4gtul', 'template_l6zjclp', form.current, '69n7zQ3xC-JabiHJJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset()
        setSendSuccess(true)
    };

    const transition = {
        duration: 0.3,
        y: {stiffness: 1000, velocity: -100},
    };

    const variants = {
        hidden: {opacity: 0, y: 100},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: 100},
    };

    // хук для исчезновения SendInfo
    useEffect(() => {
        if (sendSuccess) {
            setTimeout(() => {
                setSendSuccess(false);
            }, 4000);
        }
    }, [sendSuccess]);

    return (
        <S.Contacts id={"Contact"}>
            <Container>
                <Title>Contacts</Title>
                <S.ContactsForm ref={form} onSubmit={sendEmail}>
                    <Input name={"name"} placeholder={"name"} type={"text"} autoComplete={"off"}/>
                    <Input name={"email"} placeholder={'email'} type={"email"}/>
                    <S.ContactsTextArea required name={"message"} placeholder={"text"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.ContactsForm>
                <AnimatePresence>{sendSuccess && <S.SendInfo initial="hidden"
                                                             animate={sendSuccess ? "visible" : "exit"}
                                                             exit="exit"
                                                             variants={variants}
                                                             transition={transition}
                    // onAnimationComplete={handleAnimationComplete}
                >Message sent
                    successfully!</S.SendInfo>}</AnimatePresence>
            </Container>
        </S.Contacts>
    )
}