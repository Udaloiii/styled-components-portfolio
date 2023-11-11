import {Link} from "src/components/link/Link";
import {S} from '../Works_Styles.ts'

type MenuPropsType = {
    items?: string[]
}
export const WorksMenu = ({items}: MenuPropsType) => {
    return (
        <S.WorksNavigation>
            <ul>
                {items?.map((el, index) => <li key={index}><Link href={`#${el}`}>{el}</Link></li>)}
            </ul>
        </S.WorksNavigation>
    )
}