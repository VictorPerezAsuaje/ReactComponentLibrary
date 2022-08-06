import { useState } from "react";
import { Border, Color } from "../../helpers/colorHelper";
import Button from "../Atoms/Button/Button";

interface IEditorBottomToolbarProps{
    blockOrder:number,
    onAddBlockHandler(parentOrder:number, blockType:string, headerType?:string):any
}

function EditorBottomToolbar(props:IEditorBottomToolbarProps){
    const { blockOrder, onAddBlockHandler } = props;

    return(
        <div className='flex flex-row gap-2 items-center'>
            <select id="headings" className="w-fit h-8 border-2 text-blue-500 text-sm rounded ring-blue-500 border-blue-500 p-1 font-medium" onChange={(e) => onAddBlockHandler(blockOrder, "header", e.target.value)} defaultValue={"-1"}>
                <option value="-1" >Choose heading...</option>
                <option value="1">h1</option>
                <option value="2">h2</option>
                <option value="3">h3</option>
                <option value="4">h4</option>
            </select>
            <Button content="p" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.blue }} cssClass="text-md px-2 h-8 aspect-square hover:text-white" hoverable onClickHandler={() => onAddBlockHandler(blockOrder, "paragraph")}/>
            <Button content="list" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.blue }} cssClass="text-md px-2 h-8 aspect-square hover:text-white" hoverable onClickHandler={() => onAddBlockHandler(blockOrder, "list")}/>
            <Button content="br" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.blue }} cssClass="text-md px-2 h-8 aspect-square hover:text-white " hoverable onClickHandler={() => onAddBlockHandler(blockOrder, "delimiter")}/>
        </div>
    )
}

interface IEditorSideToolbarProps{
    blockId:string,
    blockOrder:number,
    blockSelected:boolean
    onChangeOrderHandler(direction:string, currentPosition:number):any,
    onDeleteBlockHandler(id:string, orderBlockDeleted:number):any,
}

function EditorSideToolbar(props:IEditorSideToolbarProps){
    const { blockId, blockOrder, blockSelected, onChangeOrderHandler, onDeleteBlockHandler } = props;

    return (
        <div className={'absolute top-1/2 -translate-y-1/2 -left-24 w-16 justify-between flex items-center transition-all ease-in-out duration-200 ' + (blockSelected ? "pointer-events-auto opacity-20 hover:opacity-100" : "pointer-events-none opacity-0")}>
            <Button content="X" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.red }} cssClass="text-md px-2 h-6 w-6 hover:text-white" hoverable onClickHandler={() => onDeleteBlockHandler(blockId, blockOrder)}/>
            <div className="flex flex-col gap-2">
                <Button content="↑" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.teal }} cssClass="text-md px-2 h-6 w-6 hover:text-white" hoverable onClickHandler={() => onChangeOrderHandler("up", blockOrder)} />
                <Button content="↓" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.teal }} cssClass="text-md px-2 h-6 w-6 hover:text-white" hoverable onClickHandler={() => onChangeOrderHandler("down", blockOrder)}/>
            </div>           
        </div>
    )
}

interface ITopEditorToolbarProps{
    blockSelected:boolean,
}

function TopEditorToolbar(props:ITopEditorToolbarProps){
    const { blockSelected } = props;

    return (
        <div className={'absolute -top-16 right-0 translate-y-1/2 rounded flex transition-all ease-in-out duration-200 gap-0.5 items-center bg-slate-300 ' + (blockSelected ? "pointer-events-auto opacity-80 hover:opacity-100" : "pointer-events-none opacity-0")}>
            <Button content="b" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent }} shape = { Border.square } cssClass="text-md px-3 hover:bg-slate-100 hover:text-slate-800 font-bold" hoverable onClickHandler={() => document.execCommand("bold")} disabled />
            <Button content="i" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent }} shape = { Border.square } cssClass="text-md px-3 hover:bg-slate-100 hover:text-slate-500 italic" hoverable onClickHandler={() => document.execCommand("italic")} disabled />
            <Button content="u" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent }} shape = { Border.square } cssClass="text-md px-3 hover:bg-slate-100 hover:text-slate-500 underline" hoverable onClickHandler={() => document.execCommand("underline")} disabled />
            <Button content="link" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent }} shape = { Border.square } cssClass="text-md px-3 hover:bg-slate-100 hover:text-slate-500" hoverable disabled />
            <Button content="clear" type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent }} shape = { Border.square } cssClass="text-md px-3 hover:bg-slate-100 hover:text-slate-500" hoverable onClickHandler={() => document.execCommand('removeFormat')} disabled />
        </div>
    )
}

interface IEditorToolbarProps{
    blockId:string,
    blockOrder:number,
    blockSelected:boolean
    onChangeOrderHandler(direction:string, currentPosition:number):any,
    onDeleteBlockHandler(id:string, orderBlockDeleted:number):any,
    onAddBlockHandler(parentOrder:number, blockType:string, headerType?:string):any
}

export function EditorToolbar(props:IEditorToolbarProps){
    const [addToolBarVisible, setAddToolbarVisible] = useState(false);
    const { blockId, blockOrder, blockSelected, onChangeOrderHandler, onDeleteBlockHandler, onAddBlockHandler } = props;

    return(<>
        <TopEditorToolbar blockSelected={blockSelected} />
        <EditorSideToolbar blockId={blockId} blockOrder={blockOrder} blockSelected={blockSelected} onChangeOrderHandler={onChangeOrderHandler} onDeleteBlockHandler={onDeleteBlockHandler} />
        <div className={'absolute -bottom-8 left-0 translate-y-1/2 w-20 justify-between flex transition-all ease-in-out duration-200 gap-0.5 items-center ' + (blockSelected ? "pointer-events-auto opacity-20 hover:opacity-100" : "pointer-events-none opacity-0")}>
            <Button content={addToolBarVisible ? "-" : "+"} type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.blue }} cssClass="text-md px-2 h-8 aspect-square hover:text-white mr-3" hoverable onClickHandler={() => setAddToolbarVisible(!addToolBarVisible)}/>
            {
                addToolBarVisible ? 
                <EditorBottomToolbar blockOrder={blockOrder} onAddBlockHandler={onAddBlockHandler} />
                : <></>
            }
        </div>
    </>)
}