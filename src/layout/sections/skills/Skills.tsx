import styled from "styled-components";
import {Skill} from "src/components/skill/Skill.tsx";
import {Icon} from "src/components/icon/Icon.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <h3>My skills</h3>
            <Skill>
                <Icon iconId={"react"} width={"150"} height={"150"}/>
            </Skill>
            <Skill>
                <Icon iconId={"redux"} width={"150"} height={"150"}/>
            </Skill>
            <Skill>
                <Icon iconId={"styledComponents"} width={"230"} height={"230"} viewBox={"0 0 256 256"}/>
            </Skill>
            <Skill>
                <Icon iconId={"typescript"} width={"150"} height={"150"} viewBox={"0 0 16 16"}/>
            </Skill>
            <Skill>
                <Icon iconId={"git"} width={"150"} height={"150"} />
            </Skill>
        </StyledSkills>
    )
}


const StyledSkills = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #3b7bee;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`