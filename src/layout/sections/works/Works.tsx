import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Work} from "src/layout/sections/works/work/Work.tsx";
import {Title} from "src/components/title/Title.tsx";
import {WorksMenu} from "src/layout/sections/works/worksMenu/WorksMenu.tsx";
import {Container} from "src/components/container/Container.tsx";
import {FC, useState} from "react";
import {S} from './Works_Styles.ts'
import {AnimatePresence, motion} from "framer-motion";
import todos from '../../../assets/image/todos.webp'
import network from '../../../assets/image/soc-network.webp'
import cards from '../../../assets/image/cards.webp'

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
        linkDemo: "https://easy-tasks.vercel.app/",
        linkCode: "https://github.com/Udaloiii/Easy-Tasks",
        logo: todos,
        type: "spa"
    },
    {
        id: 2,
        title: "Social network",
        text: "",
        logo: network,
        type: "spa",
        linkDemo: "https://social-network-vite-eta.vercel.app",
        linkCode: "https://github.com/Udaloiii/social-network-vite",
    },
    {
        id: 3,
        title: "Cards",
        text: "",
        logo: cards,
        type: "react",
        // linkDemo: "",
        linkCode: "https://github.com/Udaloiii/flashcards-2024",
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