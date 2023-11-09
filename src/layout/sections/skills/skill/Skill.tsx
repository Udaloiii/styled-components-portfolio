import styled from "styled-components";
import {Icon} from "src/components/icon/Icon.tsx";
import {theme} from "src/styles/Theme.tsx";

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
  flex-grow: 1;
  //margin: 15px 0 0;
  padding: 10px 0;
  width: 340px;
  height: 200px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: .3s;
  
  @media ${theme.media.mobile} {
    width: 400px;
  }
  
  svg {
    transition: .3s;
  }
  svg:hover {
    transform: scale(1.2);
    transition: .3s;
    //box-shadow: 0 0 15px 7px rgba(178, 178, 178, 0.5);
  }
`
const StyledTitle = styled.h3`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`

