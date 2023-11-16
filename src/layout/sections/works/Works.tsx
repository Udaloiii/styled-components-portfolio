import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Work} from "src/layout/sections/works/work/Work.tsx";
import {Title} from "src/components/title/Title.tsx";
import {WorksMenu} from "src/layout/sections/works/worksMenu/WorksMenu.tsx";
import {Container} from "src/components/container/Container.tsx";
import {FC, useState} from "react";
import {S} from './Works_Styles.ts'
import {AnimatePresence, motion} from "framer-motion";

type ProjectType = {
    id: number
    title: string
    text: string
    linkDemo?: string
    linkCode?: string
    logo: string
    type: StatusType
}
export type StatusType = "all" | "landing" | "react" | "spa"
const arrOfProjects: ProjectType[] = [
    {
        id: 1,
        title: "Easy Task",
        text: "",
        linkDemo: "https://todolist-on-redux.vercel.app/",
        linkCode: "https://github.com/Udaloiii/todolist_on_redux",
        logo: "https://img.freepik.com/free-vector/lovely-hand-drawn-list-collection_23-2147934745.jpg?w=1480&t=st=1698342879~exp=1698343479~hmac=6b5342ce997d64d383611e044c28ca4d0c59162da8ba1fb5ec9e95763cdbbe51",
        type: "spa"
    },
    {
        id: 2,
        title: "Social network",
        text: "",
        logo: "https://img.freepik.com/free-vector/social-media-network_74855-4575.jpg?w=2000&t=st=1698406524~exp=1698407124~hmac=668a0b59b0bde71b2d165f884fa85f7f043c0edb572f4d777a40d334ba2d1839",
        type: "spa"
    },
    {
        id: 3,
        title: "Cards",
        text: "",
        logo: "https://img.freepik.com/free-vector/hand-drawn-months-year-element-collection_23-2149923253.jpg?w=1480&t=st=1698406908~exp=1698407508~hmac=594e1cdde88851b6230d82ae5ccbe4db1763cca1544cea5a3161104ae3c22119",
        type: "react"
    },

]
const menuWorksItems: StatusType[] = ["all", "landing", "react", "spa"]

export const Works: FC = () => {
    const [currentFilter, setCurrentFilter] = useState<StatusType>("all")
    let filteredWorks = arrOfProjects
    if (currentFilter === "landing") {
        filteredWorks = arrOfProjects.filter(el => el.type === "landing")
    }
    if (currentFilter === "spa") {
        filteredWorks = arrOfProjects.filter(el => el.type === "spa")
    }
    if (currentFilter === "react") {
        filteredWorks = arrOfProjects.filter(el => el.type === "react")
    }
    return (
        <S.Works id="Works">
            <Container>
                <Title>My works</Title>
                <FlexWrapper justify={"center"}>
                    <WorksMenu items={menuWorksItems} setCurrentFilter={setCurrentFilter}
                               currentFilter={currentFilter}/>
                </FlexWrapper>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"30px"}>
                    <AnimatePresence>
                        {filteredWorks.map(el => {
                            return <motion.div key={el.id}
                                               style={{
                                                   width: "350px",
                                                   flexGrow: 1,
                                                   maxWidth: "540px",
                                               }}
                                               layout
                                               initial={{opacity: 0}}
                                               animate={{opacity: 1}}
                                               exit={{opacity: 0}}>
                                <Work title={el.title} text={el.text} logo={el.logo}
                                      linkDemo={el.linkDemo}
                                      linkCode={el.linkCode}/>
                            </motion.div>
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}