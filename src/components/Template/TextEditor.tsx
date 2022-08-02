import React, { CSSProperties, useEffect, useState } from 'react'
import data from './editor-example.json'
import Heading, { HeadingType } from '../Atoms/Heading/Heading'
import { HeaderBlock, IHeaderProps } from './HeaderBlock'
import { IParagraphProps, ParagraphBlock } from './ParagraphBlock'

export interface IListProps{

}

function ListBlock(props:IListProps){
    
}

interface IBlockProps{
    id:string,
    type:string,
    data:object,
    onContentChange(id:string, content?:string):any
}

function Block(props:IBlockProps) {
    const { id, type, data, onContentChange } = props;

    
    switch(type){
        case "header":
            const headerData = data as IHeaderProps;
            return <HeaderBlock id={id} text={headerData.text} level={headerData.level} style={headerData.style} onContentChange={onContentChange} />
        case "paragraph":
            const paragraphData = data as IParagraphProps;
            return <ParagraphBlock text={paragraphData.text} style={paragraphData.style} />
        case "list":
            return <></>
        case "delimiter":
            return <></>
        case "image":
            return <></>
        default:
            return <></>
    }
}


export default function TextEditor() {
    const [blocks, setBlocks] = useState(data);
    
    const onContentChange = (id:string, content?:string) => {
        // API call ? 
        // Alter setBlocks ?
    }

    return (
        <>
            <Heading content="BLOCK-BASED TEXT EDITOR" type={HeadingType.h2} cssClass="justify-center" />
            <hr className="m-10"/>
            <div id="textEditor" className='shadow-md rounded p-5 min-h-screen'>
                {
                    blocks.map(block => <div className='lg:w-1/2 w-3/4 m-auto mb-3 border border-transparent p-3 rounded hover:border-blue-500/50 focus-within:border-blue-500 transition-all ease-in-out duration-200'><Block key={block.id} id={block.id} type={block.type} data={block.data} onContentChange={onContentChange} /> </div>)
                }
            </div>
        </>
    )
}