import { CSSProperties } from "react"

export interface IListBlockProps{
    id:string,
    items:string[],
    style?:CSSProperties
}

export const ListBlock = (props:IListBlockProps) => <ul style={props.style} contentEditable="true" suppressContentEditableWarning={true} className='list-disc pl-8 peer'>{props.items.map((item, index) => <li key={`${props.id}_${index}`}>{item}</li>)}</ul>
