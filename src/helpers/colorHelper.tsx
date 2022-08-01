export enum Color { transparent = "transparent", red = "red", rose = "rose", amber = "amber", emerald = "emerald", teal = "teal", blue = "blue", violet = "violet", slate = "slate" }
export enum Border { square = "", rounded = "rounded", circle = "rounded-full" }
export enum Lightness { light = "400", normal = "500", dark = "600" }

export interface ColorConfiguration{
    bgColor?:Color,
    bgLightness?:Lightness,
    borderColor?:Color,
    textColor?:Color
}

// String interpolation would not work because of Tailwind 3.0 purge system
export const getCssClass = (baseProp:string, color?:Color, lightness?:Lightness | string):string => " " + baseProp + "-" + (color === undefined ? Color[Color.blue] : color )  + "-" + (lightness === undefined ? Lightness.normal : lightness);

export const processButtonShape = (shape?:Border):string => (shape === Border.circle ? " py-2 px-2 " : " py-2 px-4 ") + (shape !== undefined ? shape : " rounded");

export function processBooleanStates(disabled?:boolean, uppercase?:boolean, hoverable?:boolean, colorConfig?:ColorConfiguration):string
{
    let finalCss = "";
    finalCss += uppercase ? " uppercase" : "";
    finalCss += hoverable ? getCssClass("hover:bg", colorConfig?.borderColor, colorConfig?.bgLightness) + " transition-all ease-in-out duration-300 hover:text-white" : "";
    finalCss += disabled ? getCssClass("bg", Color.slate, Lightness.normal) + " text-white opacity-50 pointer-events-none" : "";
    return finalCss;
}

export function processColorConfig(colorConfig?:ColorConfiguration):string{
    let finalCss = "";

    if(colorConfig === undefined){
        return getCssClass("bg", undefined, undefined) + " text-white";
    }
    
    finalCss += colorConfig.bgColor !== undefined ? getCssClass("bg", colorConfig.bgColor, colorConfig.bgLightness) : getCssClass("bg", colorConfig?.bgColor, colorConfig?.bgLightness);

    finalCss += (colorConfig.borderColor === Color.transparent ? " " : " border-2") + (colorConfig.borderColor !== undefined ? getCssClass("border", colorConfig.borderColor, colorConfig.bgLightness) : "");

    finalCss += colorConfig?.bgColor === Color.transparent ? getCssClass("text", colorConfig.borderColor, colorConfig.bgLightness) : " text-white";    
    return finalCss;
}