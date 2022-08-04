import { CSSProperties } from 'react'
import { internalHTMLInterpreter } from '../../helpers/internalHTMLInterpreter'

export interface IParagraphProps{
    id:string,
    text:string,
    style?:CSSProperties,
    onContentChange(e:object, id:string, content?:string):Function
}

export const ParagraphBlock = (props:IParagraphProps) => {
    const { id, text, style, onContentChange } = props;

    return (<p contentEditable="true" style={style} className="outline-none peer" suppressContentEditableWarning={true} onBlur={(e) => onContentChange(e, id, e.currentTarget.textContent === null ? "" : e.currentTarget.textContent)}>{internalHTMLInterpreter(text)}</p>)
}