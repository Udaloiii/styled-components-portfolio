import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Icon} from "src/components/icon/Icon.tsx";
import {Container} from "src/components/container/Container.tsx";
import {S} from './Footer_Styles.ts'
import {FC} from "react";

type IconType = {
    id: string
    href: string
}
const iconsForContacts: IconType[] = [
    {id: "linkedin", href: "https://www.linkedin.com/in/eugene-udalykh/"},
    {id: "gmail", href: "mailto:eugene.udalykh@gmail.com"},
    {id: "instagram", href: "https://www.instagram.com/udaloiii/"},
    {id: "telegram", href: "https://t.me/uda1oiii"}]
export const Footer: FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} gap={"20px"} align={"center"}>
                    <S.FooterName>
                        I'm Available For Freelance
                    </S.FooterName>
                    <S.SocialList>
                        {iconsForContacts.map(el => <li key={el.id}><S.Link href={el.href}
                                                                            target="_blank"><Icon
                            iconId={el.id}/></S.Link></li>)}
                    </S.SocialList>
                    <S.Text>© 2023 Eugene Udalykh | All Rights Reserved.</S.Text>
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
}