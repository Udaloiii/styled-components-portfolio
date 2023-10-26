import styled from "styled-components";

type FlexWrapperType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    width?: string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  gap: ${props => props.gap || "0"};
  width: ${props => props.width || "100%"};
  
  margin: 0 auto;  // может потом удалить
`