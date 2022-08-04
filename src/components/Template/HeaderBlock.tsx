import React, { CSSProperties } from 'react';
import { HeadingType } from '../Atoms/Heading/Heading';

export interface IHeaderProps{
    id:string,
    text:string,
    level:number,
    style?:CSSProperties,
    onContentChange(e:object, id:string, content?:string):Function
}

export function HeaderBlock(props: IHeaderProps) {
    const { id, text, level, style, onContentChange } = props;
    let baseCssClass = "outline-none ";
    switch (level) {
        case HeadingType.h3:
        default:
            baseCssClass += " text-xl peer";
            return <h3 id={id} className={baseCssClass} style={style} contentEditable="true" suppressContentEditableWarning={true} onBlur={(e) => onContentChange(e, id, e.currentTarget.textContent === null ? "" : e.currentTarget.textContent)} defaultValue={text}>{text}</h3>;

        case HeadingType.h1:
            baseCssClass += " text-3xl peer";
            return <h1 id={id} className={baseCssClass} style={style} contentEditable="true" suppressContentEditableWarning={true} onBlur={(e) => onContentChange(e, id, e.currentTarget.textContent === null ? "" : e.currentTarget.textContent)}>{text}</h1>;

        case HeadingType.h2:
            baseCssClass += " text-2xl peer";
            return <h2 id={id} className={baseCssClass} style={style} contentEditable="true" suppressContentEditableWarning={true} onBlur={(e) => onContentChange(e, id, e.currentTarget.textContent === null ? "" : e.currentTarget.textContent)}>{text}</h2>;

        case HeadingType.h4:
            baseCssClass += " text-lg peer";
            return <h4 id={id} className={baseCssClass} style={style} contentEditable="true" suppressContentEditableWarning={true} onBlur={(e) => onContentChange(e, id, e.currentTarget.textContent === null ? "" : e.currentTarget.textContent)}>{text}</h4>;

        case HeadingType.h5:
            return <h5 id={id} className={baseCssClass + " peer"} style={style} contentEditable="true" suppressContentEditableWarning={true} onBlur={(e) => onContentChange(e, id, e.currentTarget.textContent === null ? "" : e.currentTarget.textContent)}>{text}</h5>;
    }
}
