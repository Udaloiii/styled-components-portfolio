import styled from "styled-components";
import {Icon} from "src/components/icon/Icon.tsx";

type SkillPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
}
export const Skill = ({iconId, title, width, height, viewBox}: SkillPropsType) => {
    return (
        <StyledSkill>
            <StyledTitle>{title}</StyledTitle>
            <Icon iconId={iconId} width={width || "170"} height={height || "170"} viewBox={viewBox}/>
        </StyledSkill>
    )
}
const StyledSkill = styled.div`
  margin: 20px 0;
  padding: 0;
  width: 200px;
  height: 200px;
  background-color: bisque;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledTitle = styled.h3`
  padding: 0;
  font-family: "Calibri", sans-serif;
  letter-spacing: 2px;
`

