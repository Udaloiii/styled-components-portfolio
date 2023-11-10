import {Menu} from "src/layout/header/headerMenu/menu/Menu.tsx";
import {FC} from "react";
import {S} from '../HeaderMenu_Styles.ts'

type MenuPropsType = {
    items?: string[]
}
export const DesktopMenu: FC<MenuPropsType> = ({items}: MenuPropsType) => {
    return (
        <S.DesktopNavigation>
            <ul>
                <Menu items={items}/>
            </ul>
        </S.DesktopNavigation>
    )
}

