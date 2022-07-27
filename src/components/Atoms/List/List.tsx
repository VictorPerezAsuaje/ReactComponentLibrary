import React, { CSSProperties } from "react";

interface IListProps{
    children?:React.ReactNode,
    listCssClass?:string,
    extraStyle?:CSSProperties
}

export default function List(props:IListProps) {
    const { children, listCssClass, extraStyle } = props;

    return (
        <ul className={listCssClass === undefined ? "list-disc pl-10 my-3" : listCssClass} style={extraStyle}>
            {children}
        </ul>
    )
}

