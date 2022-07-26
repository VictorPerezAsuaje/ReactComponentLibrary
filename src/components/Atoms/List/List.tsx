import { ListItem, ListItemProps } from "./ListItem";


interface IListProps{
    listItems:ListItemProps[],
    listCssClass?:string,
}

export default function List(props:IListProps) {
    const { listItems, listCssClass } = props;

    return (
        <ul className={props.listCssClass === undefined ? "list-disc pl-10 my-3" : props.listCssClass}>
            {listItems.map(item => <ListItem key={item.content} content={item.content} itemCssClass={item.content} iconSrc={item.iconSrc} />)}
        </ul>
    )
}

