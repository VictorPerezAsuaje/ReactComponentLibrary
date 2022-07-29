import React, { CSSProperties } from 'react'

export interface ICardProps{
    children?:React.ReactNode,
    cssClass?:string,
    extraStyle?:CSSProperties
}


export default function Card(props:ICardProps) {
    const { children, cssClass, extraStyle } = props;

    return (
        <div className={`shadow-md rounded p-5 ${cssClass}`} style={extraStyle}>
            {children}
        </div>
    )
}

