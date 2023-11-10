import {Icon} from "src/components/icon/Icon.tsx";
import {S} from '../Skills_Styles.ts'

type SkillPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
}
export const Skill = ({iconId, title, width, height, viewBox}: SkillPropsType) => {
    return (
        <S.Skill>
            <S.SkillTitle>{title}</S.SkillTitle>
            <Icon iconId={iconId} width={width || "160"} height={height || "160"} viewBox={viewBox || "0 0 24 24"}/>
        </S.Skill>
    )
}


