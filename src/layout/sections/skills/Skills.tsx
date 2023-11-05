import styled from "styled-components";
import {Skill} from "src/layout/sections/skills/skill/Skill.tsx";
import {Title} from "src/components/title/Title.tsx";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Container} from "src/components/container/Container.tsx";

export const Skills = () => {
    return (
        <StyledSkills id="Skills">
            <Container>
                <Title>My skills</Title>
                <FlexWrapper gap={"15px"} wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"typescript"} title={"Typescript"} viewBox={"0 0 16 16"}/>
                    <Skill iconId={"react"} title={"React"} width={"180"} height={"180"}/>
                    <Skill iconId={"redux"} title={"Redux"}/>
                    <Skill iconId={"styledComponents"} title={"Styled components"}
                           viewBox={"0 0 512 512"}/>
                    <Skill iconId={"css"} title={"Css"} viewBox={"0 0 256 256"}/>
                    <Skill iconId={"scss"} title={"Scss"} viewBox={"0 0 640 512"}/>
                    <Skill iconId={"github"} title={"Github"} viewBox={"0 0 20 20"}/>
                    <Skill iconId={"storybook"} title={"Storybook"}/>
                    <Skill iconId={"api"} title={"Api"}/>
                    <Skill iconId={"axios"} title={"Axios"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}


const StyledSkills = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 60px; // чтобы при скролле учитывало длину Header
`