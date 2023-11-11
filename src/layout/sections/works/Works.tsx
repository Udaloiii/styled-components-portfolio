import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Work} from "src/layout/sections/works/work/Work.tsx";
import {Title} from "src/components/title/Title.tsx";
import {WorksMenu} from "src/layout/sections/works/worksMenu/WorksMenu.tsx";
import {Container} from "src/components/container/Container.tsx";
import {FC} from "react";
import {S} from './Works_Styles.ts'

type ProjectType = {
    id: number
    title: string
    text: string
    linkDemo?: string
    linkCode?: string
    logo: string
}
const arrOfProjects: ProjectType[] = [
    {
        id: 1,
        title: "Easy Task",
        text: "",
        linkDemo: "https://todolist-on-redux.vercel.app/",
        linkCode: "https://github.com/Udaloiii/todolist_on_redux",
        logo: "https://img.freepik.com/free-vector/lovely-hand-drawn-list-collection_23-2147934745.jpg?w=1480&t=st=1698342879~exp=1698343479~hmac=6b5342ce997d64d383611e044c28ca4d0c59162da8ba1fb5ec9e95763cdbbe51"
    },
    {
        id: 2,
        title: "Social network",
        text: "",
        logo: "https://img.freepik.com/free-vector/social-media-network_74855-4575.jpg?w=2000&t=st=1698406524~exp=1698407124~hmac=668a0b59b0bde71b2d165f884fa85f7f043c0edb572f4d777a40d334ba2d1839"
    },
    {
        id: 3,
        title: "Cards",
        text: "",
        logo: "https://img.freepik.com/free-vector/hand-drawn-months-year-element-collection_23-2149923253.jpg?w=1480&t=st=1698406908~exp=1698407508~hmac=594e1cdde88851b6230d82ae5ccbe4db1763cca1544cea5a3161104ae3c22119"
    },

]
const menuWorksItems = ["All", "Landing page", "React", "Spa"]
export const Works: FC = () => {
    return (
        <S.Works id="Works">
            <Container>
                <Title>My works</Title>
                <FlexWrapper justify={"center"}>
                    <WorksMenu items={menuWorksItems}/>
                </FlexWrapper>
                <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                    {arrOfProjects.map(el => {
                        return <Work key={el.id} title={el.title} text={el.text} logo={el.logo} linkDemo={el.linkDemo}
                                     linkCode={el.linkCode}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}