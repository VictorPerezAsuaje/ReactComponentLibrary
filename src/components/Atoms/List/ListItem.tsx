import { CSSProperties } from "react";

export interface IListItemProps{
    content:React.ReactNode,
    cssClass?:string,
    iconSrc?:string,
    extraStyle?:CSSProperties
}

export function ListItem(props: IListItemProps) {
    const {content, cssClass, iconSrc, extraStyle } = props;

    return (
    <li className={cssClass + (iconSrc === undefined ? "" : " flex flex-row items-center")} style={extraStyle}>
        {iconSrc === undefined ? "" : <img src={iconSrc} alt="" className="mr-3 w-8" /> }
        {content}
    </li>);
}
