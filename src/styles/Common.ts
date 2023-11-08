import {theme} from "src/styles/Theme.tsx";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}
export const font = ({family, weight, lineHeight, color, Fmin, Fmax}: FontPropsType) => `
font-family: ${family || "'Poppins', sans-serif"};
font-weight: ${weight || 400};
color: ${color || theme.color.font};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`