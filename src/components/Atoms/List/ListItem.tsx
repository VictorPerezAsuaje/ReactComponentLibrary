export type ListItemProps = {
    content:string,
    itemCssClass?:string,
    iconSrc?:string
}

export function ListItem(props: ListItemProps) {
    const {content, itemCssClass, iconSrc} = props;

    return (
    <li className={itemCssClass + (iconSrc === undefined ? "" : " flex flex-row items-center mb-3")}>
        {iconSrc === undefined ? "" : <img src={iconSrc} alt="" className="mr-3 w-8" /> }
        {content}
    </li>);
}
