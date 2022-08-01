import React, { CSSProperties } from "react";

interface IListProps{
    children?:React.ReactNode,
    cssClass?:string,
    extraStyle?:CSSProperties
}

export default function List(props:IListProps) {
    const { children, cssClass, extraStyle } = props;

    return (
        <ul className={cssClass} style={extraStyle}>
            {children}
        </ul>
    )
}

