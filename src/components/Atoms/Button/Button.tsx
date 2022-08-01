import React from "react";
import { twMerge } from "tailwind-merge";
import { Border, ColorConfiguration, processBooleanStates, processButtonShape, processColorConfig } from "../../../helpers/colorHelper";

export enum ButtonType { solid, outline }

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?:React.ReactNode,
    icon?:React.ReactNode,
    iconCss?:string,
    buttonType?:ButtonType,
    cssClass?:string,
    colorConfig?:ColorConfiguration,
    shape?:Border,
    uppercase?:boolean,
    hoverable?:boolean,
    disabled?:boolean,
    onClickHandler?(): any
}

const processPropsCss = (props:IButtonProps):string => processButtonShape(props.shape) + processBooleanStates(props.disabled, props.uppercase, props.hoverable, props.colorConfig) + processColorConfig(props.colorConfig);

export default function Button(props:IButtonProps) {
    const { type, icon, iconCss, onClickHandler, content, cssClass } = props;

    return (
        <button className={twMerge(`font-medium flex justify-center items-center relative ${processPropsCss(props)} ${cssClass}`)} type={type} onClick={onClickHandler}>
            {icon === undefined ? "" : <span className={`w-6 ${iconCss}`}>{icon}</span>}
            <span className="min-w-fit">{content}</span>
        </button>
    )
}