import React, { CSSProperties, useEffect, useState } from 'react'
import data from './editor-example.json'
import Heading, { HeadingType } from '../Atoms/Heading/Heading'
import { HeaderBlock, IHeaderProps } from './HeaderBlock'
import { IParagraphProps, ParagraphBlock } from './ParagraphBlock'
import { IListBlockProps, ListBlock } from './ListBlock'
import { DelimiterBlock } from './DelimiterBlock'
import { IImageBlockProps, ImageBlock } from './ImageBlock'
import Button from '../Atoms/Button/Button'
import { Color } from '../../helpers/colorHelper'

interface IEditorSideToolbarProps{
    blockId:string,
    blockOrder:number,
    onChangeOrderHandler(id:string, direction:string, currentPosition:number):any,
    onDeleteBlockHandler(id:string, orderBlockDeleted:number):any
}

function EditorSideToolbar(props:IEditorSideToolbarProps){
    const { blockId, blockOrder, onChangeOrderHandler, onDeleteBlockHandler } = props;

    return(<div className='absolute top-1/2 -translate-y-1/2 -left-24 w-20 justify-between flex pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 peer-hover:opacity-100 peer-focus:opacity-100 hover:opacity-100 group-hover:pointer-events-auto group-focus:pointer-events-auto peer-hover:pointer-events-auto peer-focus:pointer-events-auto transition-all ease-in-out duration-200 gap-0.5'>
        <Button content="↑" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.teal }} cssClass="text-md px-2 h-6 w-6 hover:shadow hover:text-white" hoverable onClickHandler={() => onChangeOrderHandler(blockId, "up", blockOrder)} />
        <Button content="↓" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.teal }} cssClass="text-md px-2 h-6 w-6 hover:shadow hover:text-white" hoverable onClickHandler={() => onChangeOrderHandler(blockId, "down", blockOrder)}/>
        <Button content="X" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.red }} cssClass="text-md px-2 h-6 w-6 hover:shadow hover:text-black" hoverable onClickHandler={() => onDeleteBlockHandler(blockId, blockOrder)}/>
    </div>)
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
            return <HeaderBlock id={id} text={headerData.text} level={headerData.level} onContentChange={onContentChange} />
        case "paragraph":
            const paragraphData = data as IParagraphProps;
            return <ParagraphBlock id={id} text={paragraphData.text} onContentChange={onContentChange} />
        case "list":
            const listData = data as IListBlockProps;
            return <ListBlock id={id} items={listData.items} />
        case "delimiter":
            return <DelimiterBlock />
        case "image":
            const imageData = data as IImageBlockProps;
            return <ImageBlock url={imageData.url} alternativeText={imageData.alternativeText} />
        default:
            return <></>
    }
}


export default function TextEditor() {
    const [blocks, setBlocks] = useState(data);
    const [jsonVisible, setJsonVisible] = useState(false);

    const onContentChange = (id:string, content?:string) => {
        // API call ? 
        // Alter setBlocks ?
    }

    const onOrderChange = (id:string, direction:string, currentPosition:number) => {
        console.log(`${id} - ${direction} - ${currentPosition}`)
        if(direction === "up" && currentPosition === 1) return;

        setBlocks(blocks.map(x => {
            if(direction === "up" && x.order === currentPosition - 1)
                // Block right above the one clicked
                return {...x, order: x.order + 1 }            
            else if(direction === "down" && x.order === currentPosition + 1)
                // Block right bellow the one clicked
                return {...x, order: x.order - 1}
            else if(x.order === currentPosition)
                return {...x, order: direction === "up" ? x.order - 1 : x.order + 1 }

            return x;
        }))
    }

    const onDeleteBlockHandler = (id:string, orderBlockDeleted:number) => {
        setBlocks(blocks.filter(x => x.id !== id).map(x => {
            if(x.order > orderBlockDeleted) return {...x, order: x.order - 1}
            return x;
        }));
    }

    return (
        <>
            <Heading content="BLOCK-BASED TEXT EDITOR" type={HeadingType.h2} cssClass="justify-center" />
            <span className='flex justify-end'><Button content="SHOW JSON" type="button" onClickHandler={() => setJsonVisible(!jsonVisible)} /></span>
            <pre className={jsonVisible ? "h-[10%] overflow-y-auto" : "hidden"}>{JSON.stringify(blocks, null, 2)}</pre>
            <hr className="m-10"/>
            <div id="textEditor" className='shadow-md rounded p-5 min-h-screen' >
                {
                    blocks.sort((x1, x2) => x1.order - x2.order).map(block => 
                    <div className='lg:w-1/2 w-3/4 relative m-auto mb-3 border border-transparent p-3 group rounded hover:border-blue-500/50 focus-within:border-blue-500 transition-all ease-in-out duration-200'>
                        <Block key={block.id} id={block.id} type={block.type} data={block.data} onContentChange={onContentChange} />
                        <EditorSideToolbar blockId={block.id} blockOrder={block.order} onChangeOrderHandler={onOrderChange} onDeleteBlockHandler={onDeleteBlockHandler} />
                    </div>)
                }
            </div>
        </>
    )
}