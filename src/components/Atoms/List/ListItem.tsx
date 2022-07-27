import { CSSProperties } from "react";

export interface IListItemProps{
    content:string,
    itemCssClass?:string,
    iconSrc?:string,
    extraStyle?:CSSProperties
}

export function ListItem(props: IListItemProps) {
    const {content, itemCssClass, iconSrc, extraStyle } = props;

    return (
    <li className={itemCssClass + (iconSrc === undefined ? "" : " flex flex-row items-center")} style={extraStyle}>
        {iconSrc === undefined ? "" : <img src={iconSrc} alt="" className="mr-3 w-8" /> }
        {content}
    </li>);
}
