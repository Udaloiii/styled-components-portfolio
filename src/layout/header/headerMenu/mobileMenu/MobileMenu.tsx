import {FC, useState} from "react";
import {Menu} from "src/layout/header/headerMenu/menu/Menu.tsx";
import {S} from '../HeaderMenu_Styles.ts'

type MenuPropsType = {
    items?: string[]
}
export const MobileMenu: FC<MenuPropsType> = ({items}: MenuPropsType) => {
    const [open, setOpen] = useState<boolean>(false)
    const onChangeOpen = () => setOpen(prevState => !prevState)
    return (
        <S.MobileNavigation>
            <S.BurgerButton isOpen={open} onClick={onChangeOpen}>
                <span></span>
            </S.BurgerButton>
            <S.Popup isOpen={open} onClick={() => setOpen(false)}>
                <Menu items={items}/>
            </S.Popup>
        </S.MobileNavigation>
    )
}

