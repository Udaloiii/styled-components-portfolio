import {Button} from "src/components/button/Button.tsx";
import {Link} from "src/components/link/Link.tsx";
import {S} from '../Works_Styles.ts'

type ProjectPropsType = {
    title: string
    text?: string
    linkDemo?: string
    linkCode?: string
    logo?: string
}
export const Work = ({title, logo, linkDemo, linkCode}: ProjectPropsType) => {
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