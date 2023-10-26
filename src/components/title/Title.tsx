import styled from "styled-components";

type TitlePropsType = {
    fontFamily?: string
    fontSize?: string
}
export const Title = styled.h2<TitlePropsType>`
  font-family: ${props => props.fontFamily || "sans-serif"};
  font-size: ${props => props.fontSize || "medium"};
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`