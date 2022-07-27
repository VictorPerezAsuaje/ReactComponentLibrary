import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content:string,
    extraCssClass?:string,
    hoverable?:boolean,
    outline?:boolean,
    rounded?:boolean,
    circle?:boolean,
    uppercase?:boolean,
    onClickHandler?(): any
}

export default function Button(props:IButtonProps) {
    const { content, onClickHandler, type, extraCssClass, hoverable, outline, rounded, circle, uppercase } = props;

    let cssClass:string = `py-2 px-4 ${extraCssClass !== undefined ? extraCssClass : ""}`;

    cssClass += rounded ? " rounded " : "";
    cssClass += outline ? " outline outline-1 " : "";
    cssClass += circle ? " rounded-full " : "";
    cssClass += hoverable ? " transition-all ease-in-out " : "";
    cssClass += uppercase ? " uppercase " : "";

    return (
        <button className={cssClass} type={type} onClick={onClickHandler}>{content}</button>
    )
}