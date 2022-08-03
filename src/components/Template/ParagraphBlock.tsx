import { CSSProperties, useState } from 'react'
import { internalHTMLInterpreter } from '../../helpers/internalHTMLInterpreter'

export interface IParagraphProps{
    id:string,
    text:string,
    style?:CSSProperties,
    onContentChange(id:string, content?:string):Function
}

export const ParagraphBlock = (props:IParagraphProps) => {
    const { id, text, style, onContentChange } = props;

    return (<p key={id} contentEditable="true" style={style} className="outline-none peer" suppressContentEditableWarning={true} onInput={(e) => onContentChange(id, e.currentTarget.textContent === null ? "" : e.currentTarget.textContent)}>{internalHTMLInterpreter(text)}</p>)
}