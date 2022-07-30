import React from "react";

export enum Color { transparent = "transparent", red = "red", rose = "rose", amber = "amber", emerald = "emerald", teal = "teal", blue = "blue", violet = "violet", slate = "slate" }
export enum Border { square = "", rounded = "rounded", circle = "rounded-full" }
export enum Lightness { light = "400", normal = "500", dark = "600" }
export enum ButtonType { solid, outline }

interface ButtonColor{
    bgColor?:Color,
    bgLightness?:Lightness,
    borderColor?:Color,
    textColor?:Color
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?:React.ReactNode,
    icon?:React.ReactNode
    buttonType?:ButtonType,
    cssClass?:string,
    colorConfig?:ButtonColor,
    shape?:Border,
    uppercase?:boolean,
    hoverable?:boolean,
    disabled?:boolean,
    onClickHandler?(): any
}

// String interpolation would not work because of Tailwind 3.0 purge system
const getCssClass = (baseProp:string, color?:Color, lightness?:Lightness | string):string => " " + baseProp + "-" + (color === undefined ? Color[Color.blue] : color )  + "-" + (lightness === undefined ? Lightness.normal : lightness);


const processPropsCss = (props:IButtonProps):string => processButtonShape(props.shape) + processBooleanStates(props.disabled, props.uppercase, props.hoverable, props.colorConfig) + processColorConfig(props.colorConfig);

const processButtonShape = (shape?:Border):string => (shape === Border.circle ? " py-2 px-2 " : " py-2 px-4 ") + (shape !== undefined ? shape : " rounded");

function processBooleanStates(disabled?:boolean, uppercase?:boolean, hoverable?:boolean, colorConfig?:ButtonColor):string
{
    let finalCss = "";
    finalCss += uppercase ? " uppercase" : "";
    finalCss += hoverable ? getCssClass("hover:bg", colorConfig?.borderColor, colorConfig?.bgLightness) + " transition-all ease-in-out duration-300 hover:text-white" : "";
    finalCss += disabled ? getCssClass("bg", Color.slate, Lightness.normal) + " text-white opacity-50 pointer-events-none" : "";
    return finalCss;
}

function processColorConfig(colorConfig?:ButtonColor):string{
    let finalCss = "";

    if(colorConfig === undefined){
        return getCssClass("bg", undefined, undefined) + " text-white";
    }
    
    finalCss += colorConfig.bgColor !== undefined ? getCssClass("bg", colorConfig.bgColor, colorConfig.bgLightness) : getCssClass("bg", colorConfig?.bgColor, colorConfig?.bgLightness);

    finalCss += (colorConfig.borderColor === Color.transparent ? " " : " border-2") + (colorConfig.borderColor !== undefined ? getCssClass("border", colorConfig.borderColor, colorConfig.bgLightness) : "");

    finalCss += colorConfig?.bgColor === Color.transparent ? getCssClass("text", colorConfig.borderColor, colorConfig.bgLightness) : " text-white";    
    return finalCss;
}

export default function Button(props:IButtonProps) {
    const { type, icon, onClickHandler, content, cssClass } = props;

    return (
        <button className={`font-medium flex items-center ${processPropsCss(props)} ${cssClass}`} type={type} onClick={onClickHandler}>
            {icon === undefined ? "" : <span className={`w-6 ${content === undefined ? "" : "mr-3"}`}>{icon}</span>}
            <span className="min-w-fit">{content}</span>
        </button>
    )
}