import {Skill} from "src/layout/sections/skills/skill/Skill.tsx";
import {Title} from "src/components/title/Title.tsx";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Container} from "src/components/container/Container.tsx";
import {S} from './Skills_Styles.ts'
import {Fade} from "react-awesome-reveal";

type SkillType = {
    id: string
    title: string
    viewBox?: string
    width?: string
    height?: string
}
const arrOfSkills: SkillType[] = [
    {id: "typescript", title: "Typescript", viewBox: "0 0 16 16"},
    {id: "react", title: "React", viewBox: "0 0 24 22"},
    {id: "redux", title: "Redux"},
    {id: "styledComponents", title: "Styled components", viewBox: "0 0 512 512"},
    {id: "css", title: "Css", viewBox: "0 0 256 256"},
    {id: "scss", title: "Scss", viewBox: "0 0 640 512"},
    {id: "github", title: "Github", viewBox: "0 0 20 20"},
    {id: "storybook", title: "Storybook"},
    {id: "api", title: "Api"},
    {id: "axios", title: "Axios"},
]
export const Skills = () => {
    return (
        <S.Skills id="Skills">
            <Container>
                <Title>My skills</Title>
                <FlexWrapper gap={"15px"} wrap={"wrap"} justify={"space-between"} align={"center"}>
                    <Fade cascade fraction={0.5} duration={500}>
                        {arrOfSkills.map(el => <Skill key={el.id} iconId={el.id} title={el.title}
                                                      viewBox={el.viewBox || ""}
                                                      height={el.height || ""}
                                                      width={el.width || ""}/>)}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    )
}


