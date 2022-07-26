import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content:string,
}


export default function Button(props:IButtonProps) {
    return (
        <button type={props.type}>{props.content}</button>
    )
}