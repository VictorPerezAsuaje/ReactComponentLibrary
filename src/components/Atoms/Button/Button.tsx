import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content:string,
    cssClass?:string,
    hoverable?:string,
    outline?:string,
    rounded?:boolean,
    circle?:boolean,
    uppercase?:boolean,
    onClickHandler?(): any
}

export default function Button(props:IButtonProps) {
    const { content, onClickHandler, type, cssClass, hoverable, outline, rounded, circle, uppercase } = props;

    let finalCssClass:string = ` ${cssClass !== undefined ? cssClass : ""}`;

    finalCssClass += rounded ? " py-2 px-4 rounded " : "";
    finalCssClass += circle ? " rounded-full py-2 px-2 " : "";
    finalCssClass += uppercase ? " uppercase " : "";
    finalCssClass += outline !== undefined ? ` ${outline} outline outline-1 ` : "";
    finalCssClass += hoverable !== undefined ? ` ${hoverable} transition-all ease-in-out ` : "";

    return (
        <button className={finalCssClass} type={type} onClick={onClickHandler}>{content}</button>
    )
}