import {FC} from "react";
import {S} from '../HeaderMenu_Styles.ts'

type MenuPropsType = {
    items?: string[]
    setOpen?: (value: boolean) => void
}
export const Menu: FC<MenuPropsType> = ({items, setOpen}: MenuPropsType) => {
    return (
        <ul>
            {items?.map((el, index) => <S.MenuItem key={index}>
                <S.NavLink to={el} smooth spy onClick={() => setOpen && setOpen(false)}>
                    {el}
                    <S.Mask><span>{el}</span></S.Mask>
                    <S.Mask><span>{el}</span></S.Mask>
                </S.NavLink>
            </S.MenuItem>)}
        </ul>
    )
}

