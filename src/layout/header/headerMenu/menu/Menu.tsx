import {FC} from "react";
import {S} from '../HeaderMenu_Styles.ts'

type MenuPropsType = {
    items?: string[]
}
export const Menu: FC<MenuPropsType> = ({items}: MenuPropsType) => {
    return (
        <ul>
            {items?.map((el, index) => <S.MenuItem key={index}>
                <S.Link href={`#${el}`}>
                    {el}
                    <S.Mask><span>{el}</span></S.Mask>
                    <S.Mask><span>{el}</span></S.Mask>
                </S.Link>
            </S.MenuItem>)}
        </ul>
    )
}

