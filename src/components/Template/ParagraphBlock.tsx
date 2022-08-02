import { CSSProperties } from 'react'
import { internalHTMLInterpreter } from '../../helpers/internalHTMLInterpreter'

export interface IParagraphProps{
    text:string,
    style?:CSSProperties
}

export const ParagraphBlock = (props:IParagraphProps) => <p contentEditable="true" style={props.style} className="outline-none">{internalHTMLInterpreter(props.text)}</p>