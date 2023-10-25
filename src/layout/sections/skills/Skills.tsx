import styled from "styled-components";
import {Skill} from "src/layout/sections/skills/skill/Skill.tsx";
import {Title} from "src/components/title/Title.tsx";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Title fontFamily={"Broadway, sans-serif"} fontSize={"1.5rem"}>My skills</Title>
            <FlexWrapper gap={"20px"}>
                <Skill iconId={"react"} title={"react"}/>
                <Skill iconId={"redux"} title={"redux"}/>
                <Skill iconId={"styledComponents"} title={"styledComponents"} width={"230"} height={"230"}
                       viewBox={"0 0 256 256"}/>
                <Skill iconId={"typescript"} title={"typescript"} viewBox={"0 0 16 16"}/>
            </FlexWrapper>
        </StyledSkills>
    )
}


const StyledSkills = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #3b7bee;
  //display: flex;
  //flex-wrap: wrap;
  //gap: 20px;
`