import {Link} from "src/components/link/Link.ts";
import {S} from '../Works_Styles.ts'
import {StatusType} from "src/layout/sections/works/Works.tsx";

type MenuPropsType = {
    items?: StatusType[]
    setCurrentFilter: (filter: StatusType) => void
    currentFilter: StatusType
}
export const WorksMenu = ({items, currentFilter, setCurrentFilter}: MenuPropsType) => {
    return (
        <S.WorksNavigation>
            <ul>
                {items?.map((el, index) => <li key={index}><Link active={currentFilter === el}
                                                                 onClick={() => setCurrentFilter(el)}
                                                                 href={`#${el}`}>{el}</Link></li>)}
            </ul>
        </S.WorksNavigation>
    )
}