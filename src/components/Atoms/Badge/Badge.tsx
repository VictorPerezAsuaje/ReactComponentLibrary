import { Border, ColorConfiguration, processButtonShape, processColorConfig } from "../../../helpers/colorHelper";

export enum XAxis { left = "left", right = "right" }
export enum YAxis { top = "top", bottom = "bottom" }
export enum RelativePosition { inside, border, outside }

export interface IPosition{
    xAxis:XAxis,
    yAxis:YAxis,
    location?:RelativePosition
}

interface IBadgeProps{
    content:string,
    cssClass?:string,
    position?:IPosition
    shape?:Border,
    colorConfig?:ColorConfiguration
}

function getPosition(position:IPosition){
    switch(position.location){
        case RelativePosition.inside:
            return `-${position.xAxis}-0 -${position.yAxis}-0`;
        case RelativePosition.outside:
            return `-${position.xAxis}-4 -${position.yAxis}-4`;
        case RelativePosition.border:
        default:
            return `-${position.xAxis}-2 -${position.yAxis}-2`;
        
    }    
}


const processPropsCss = (props:IBadgeProps):string => processButtonShape(props.shape) + processColorConfig(props.colorConfig);

export default function Badge(props:IBadgeProps) {
    const { content, cssClass, position } = props;

    const configurationCss = position !== undefined ? "absolute " + getPosition(position) : "w-fit"; 

    return (
        <span className={`text-white font-bold text-[0.7em] px-[0.8em] py-[0.4em] flex items-center justify-center ${processPropsCss(props)} ${configurationCss} ${cssClass !== undefined ? cssClass : ""}`}>{content}</span>
    )
}