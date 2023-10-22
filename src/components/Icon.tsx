import svgSprite from '../assets/icons/svgSprite.svg'

type IconType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({iconId, width, height, viewBox}: IconType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox || "0 0 24 24"} fill="currentColor">
            <use xlinkHref={`${svgSprite}#${iconId}`}/>
        </svg>
    )
}