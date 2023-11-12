import {Button} from "src/components/button/Button.tsx";
import {Link} from "src/components/link/Link.ts";
import {S} from '../Works_Styles.ts'
import {FC} from "react";

type WorkPropsType = {
    title: string
    text?: string
    linkDemo?: string
    linkCode?: string
    logo?: string
}
export const Work: FC<WorkPropsType> = ({title, logo, linkDemo, linkCode}: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.WorkImg src={logo} alt="logo"/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.WorkTitle>
                {title}
            </S.WorkTitle>
            <S.LinkWrapper>
                <Link href={linkDemo} target={"_blank"} color={"black"}>
                    Demo
                </Link>
                <Link href={linkCode} target={"_blank"} color={"black"}>
                    Code
                </Link>
            </S.LinkWrapper>
        </S.Work>
    )
}