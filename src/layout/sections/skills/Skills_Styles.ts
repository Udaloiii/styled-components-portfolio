import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";

const Skills = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 60px; // чтобы при скролле учитывало длину Header
  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      gap: 35px; 
    }
  }
`

const Skill = styled.div`
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
    color: ${theme.color.accent};
    transition: .3s;
  }
  svg:hover {
    transform: scale(1.2);
    transition: .3s;
  }
`
const SkillTitle = styled.h3`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const S = {
    Skills,
    Skill,
    SkillTitle,
}