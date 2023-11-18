import {DesktopMenu} from "src/layout/header/headerMenu/desktopMenu/DesktopMenu.tsx";
import {Logo} from "src/components/logo/Logo.tsx";
import {Container} from "src/components/container/Container.tsx";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {MobileMenu} from "src/layout/header/headerMenu/mobileMenu/MobileMenu.tsx";
import {FC, useEffect, useState} from "react";
import {S} from "src/layout/header/Header_Styles.ts";

const menuHeaderItems = ["Home", "Skills", "Works", "Contact"]
export const Header: FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    // хук для отслеживания ширины экрана и отрисовки нужного меню

    return (
        <S.Header>
            <Container style={{boxShadow: `0 0 8px 5px rgba(117, 114, 213, 0.5)`,  backgroundColor: "#111111FF"}}>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu items={menuHeaderItems}/> :
                        <DesktopMenu items={menuHeaderItems}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    )
}
