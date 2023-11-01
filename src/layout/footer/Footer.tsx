import styled from "styled-components";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Icon} from "src/components/icon/Icon.tsx";

const iconsForContacts = [
    {id: "linkedin", href: "https://www.linkedin.com/in/eugene-udalykh/"},
    {id: "gmail", href: "mailto:eugene.udalykh@gmail.com"},
    {id: "instagram", href: "https://www.instagram.com/udaloiii/"},
    {id: "telegram", href: "https://t.me/uda1oiii"}]
export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} gap={"20px"} align={"center"}>
                <StyledName>
                    I'm Available For Freelance
                </StyledName>
                <FlexWrapper justify={"center"} align={"center"} gap={"30px"}>
                    {iconsForContacts.map((el, index) => <WrapperForIcon key={index} href={el.href}
                                                                         target="_blank"><Icon
                        iconId={el.id}/></WrapperForIcon>)}
                </FlexWrapper>
                <StyledSpan>© 2023 Eugene Udalykh | All Rights Reserved.</StyledSpan>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  min-height: max-content;
  background-color: aquamarine;
  padding-top: 60px; // чтобы при скролле учитывало длину Header
`

const StyledName = styled.h3`
  padding: 20px;
  color: #FFF;
  font-family: Josefin Sans, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3px;
`

const WrapperForIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  background-color: #242424;
  transition: .3s;

  &:hover {
    transform: scale(1.1);
    transition: .2s;
  }

  &:active {
    transform: scale(0.95);
    transition: .2s;
  }
`
const StyledSpan = styled.span`
  color: rgba(108, 108, 108, 0.5);
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
`