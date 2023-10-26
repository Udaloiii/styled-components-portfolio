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
            <Icon iconId={iconId} width={width || "160"} height={height || "160"} viewBox={viewBox || "0 0 24 24"}/>
        </StyledSkill>
    )
}
const StyledSkill = styled.div`
  margin: 20px 10px;
  padding: 0;
  width:25%;
  height: 200px;
  //background-color: bisque;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .3s;
  
  &:hover {
    transform: scale(1.1);
    transition: .3s;
    box-shadow: 0 0 40px 15px rgba(2,37,65,.5);
  }
`
const StyledTitle = styled.h3`
  padding: 0;
  font-family: "Calibri", sans-serif;
  letter-spacing: 2px;
`

