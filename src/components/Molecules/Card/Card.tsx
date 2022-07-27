import React, { CSSProperties } from 'react'

export interface ICardProps{
    children?:React.ReactNode,
    extraCssClass?:string,
    extraStyle?:CSSProperties
}


export default function Card(props:ICardProps) {
    const { children, extraCssClass, extraStyle } = props;

    return (
        <div className={`shadow-md rounded p-5 ${extraCssClass}`} style={extraStyle}>
            {children}
        </div>
    )
}

