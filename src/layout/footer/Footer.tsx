import styled from "styled-components";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Icon} from "src/components/icon/Icon.tsx";
import {Container} from "src/components/container/Container.tsx";
import {theme} from "src/styles/Theme.tsx";
import {font} from "src/styles/Common.ts";

const iconsForContacts = [
    {id: "linkedin", href: "https://www.linkedin.com/in/eugene-udalykh/"},
    {id: "gmail", href: "mailto:eugene.udalykh@gmail.com"},
    {id: "instagram", href: "https://www.instagram.com/udaloiii/"},
    {id: "telegram", href: "https://t.me/uda1oiii"}]
export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} gap={"20px"} align={"center"}>
                    <StyledName>
                        I'm Available For Freelance
                    </StyledName>
                    <SocialList>
                        {iconsForContacts.map((el, index) => <li key={index}><Link href={el.href}
                                                                                   target="_blank"><Icon
                            iconId={el.id}/></Link></li>)}
                    </SocialList>
                    <StyledSpan>© 2023 Eugene Udalykh | All Rights Reserved.</StyledSpan>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  //padding-top: 60px; // чтобы при скролле учитывало длину Header
`

const StyledName = styled.h3`
  padding: 20px;
  letter-spacing: 3px;
  ${font({family: "'Josefin Sans', sans-serif",weight:700, Fmax: 28, Fmin: 18})}
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;

  @media ${theme.media.mobile} {
    gap: 20px;
  }

  @media screen and (max-width: 350px) {
    gap: 15px;
  }
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  background-color: ${theme.color.secondary};
  transition: .3s;
  color: ${theme.color.accent};

  &:hover {
    transform: scale(1.2);
    transition: .2s;
    background-color: ${theme.color.accent};
    color: ${theme.color.secondary};
  }

  &:active {
    transform: scale(0.95);
    transition: .2s;
  }

  @media ${theme.media.mobile} {
    height: 65px;
    width: 65px;
  }

  @media screen and (max-width: 350px) {
    height: 60px;
    width: 60px;
  }
`
const StyledSpan = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 0 20px;
  opacity: 0.5;
`