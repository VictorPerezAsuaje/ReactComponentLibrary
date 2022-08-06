import { useRef, useState } from 'react'
import data from './editor-example.json'
import Heading, { HeadingType } from '../Atoms/Heading/Heading'
import { HeaderBlock, IHeaderProps } from './HeaderBlock'
import { IParagraphProps, ParagraphBlock } from './ParagraphBlock'
import { IListBlockProps, ListBlock } from './ListBlock'
import { DelimiterBlock } from './DelimiterBlock'
import { IImageBlockProps, ImageBlock } from './ImageBlock'
import Button from '../Atoms/Button/Button'
import { v4 as uuidv4 } from 'uuid';
import { EditorToolbar } from './EditorToolbar'
import ErrorBoundary from '../../internalComponents/ErrorBoundary'

interface IBlockProps{
    id:string,
    type:string,
    data:object,
    onContentChange(e:object, id:string, content?:string):any
}

function Block(props:IBlockProps) {
    const { id, type, data, onContentChange } = props;

    switch(type){
        case "header":
            const headerData = data as IHeaderProps;
            return <HeaderBlock key={id} id={id} text={headerData.text} level={headerData.level} onContentChange={onContentChange} />
        case "paragraph":
            const paragraphData = data as IParagraphProps;
            return <ParagraphBlock id={id} text={paragraphData.text} onContentChange={onContentChange} />
        case "list":
            const listData = data as IListBlockProps;
            return <ListBlock key={id} id={id} items={listData.items} />
        case "delimiter":
            return <DelimiterBlock key={id} />
        case "image":
            const imageData = data as IImageBlockProps;
            return <ImageBlock key={id} url={imageData.url} alternativeText={imageData.alternativeText} />
        default:
            return <></>
    }
}


export default function TextEditor() {
    const [selectedBlockId, setSelectedBlockId] = useState<string>("")
    const [jsonVisible, setJsonVisible] = useState(false);
    const [blocks, setBlocks] = useState(data);

    const onContentChange = (e:object, id:string, content?:string) => {
        // API call ? 
        // Alter setBlocks ?
        setBlocks(blocks.map(x => {
                if(x.id !== id) return x;
                
                switch(x.type){
                    case "header":
                        return {...x, data: { text: content ?? "", level: x.data.level ?? 3 }};
                    case "paragraph":
                        return {...x, data: { text: content ?? "" }}
                    default:
                        return x
                }
            }
        ));
    }

    const onOrderChange = (direction:string, currentPosition:number) => {
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
        }).sort((x1, x2) => x1.order - x2.order))
    }

    const onDeleteBlockHandler = (id:string, orderBlockDeleted:number) => {
        setBlocks(blocks.filter(x => x.id !== id).map(x => {
            if(x.order > orderBlockDeleted) return {...x, order: x.order - 1}
            return x;
        }).sort((x1, x2) => x1.order - x2.order));
    }

    const generateDataNewBlock = (blockType:string, headerType?:string):object => {
        switch(blockType){
            case "header":
                return { text: "", level: headerType ? parseInt(headerType) : 3 }
            case "paragraph":
                return { text: ""}
            case "list":
                return { items: [""] }
            case "delimiter":
            case "image":
            default:
                return {};
        }
    }

    const onAddBlockHandler = (parentOrder:number, blockType:string, headerType?:string) => {
        if(headerType !== undefined)
            if(parseInt(headerType) < 0) return;
        
        let newId:string = uuidv4();
        let newBlock = { id: newId, type: blockType, order: parentOrder+1, data: generateDataNewBlock(blockType, headerType)};
        let oldBlocks = blocks.map(x => {
            // block above the parent or the parent itself, so no need to modify order
            if(x.order <= parentOrder) return x;

            // blocks below the parent moves one, so there's empty room for one new block
            return {...x, order: x.order + 1};
        });

        setBlocks([...oldBlocks, newBlock].sort((x1, x2) => x1.order - x2.order));
    }
    
    return (
        <>
            <Heading content="BLOCK-BASED TEXT EDITOR" type={HeadingType.h2} cssClass="justify-center" />
            <span className='flex justify-end'>
                <Button content="SHOW JSON" type="button" onClickHandler={() => setJsonVisible(!jsonVisible)} />
                <a href={`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(blocks))}`} download="blocks.json" className='font-medium flex justify-center items-center relative py-2 px-4 rounded bg-blue-500 text-white ml-3'>EXPORT</a>
            </span>
            <pre className={jsonVisible ? "h-[10%] overflow-y-auto" : "hidden"}>{JSON.stringify(blocks, null, 2)}</pre>
            <hr className="m-10"/>
            <ErrorBoundary>
                <div id="textEditor" className='shadow-md rounded p-5 min-h-screen' >
                    {
                        blocks.sort((x1, x2) => x1.order - x2.order).map(block => 
                        <div key={"block_"+block.id} className={'lg:w-1/2 w-3/4 relative m-auto mb-3 border p-3 group rounded hover:border-blue-500/50 transition-all ease-in-out duration-200 ' + (selectedBlockId === block.id ? "selected mb-16 mt-14 border-blue-500" : "border-transparent")} onClick={() => setSelectedBlockId(block.id)}>
                            <Block id={block.id} type={block.type} data={block.data} onContentChange={onContentChange} />
                            <EditorToolbar key={"toolbar_"+block.id} blockId={block.id} blockOrder={block.order} blockSelected={selectedBlockId === block.id} onChangeOrderHandler={onOrderChange} onDeleteBlockHandler={onDeleteBlockHandler} onAddBlockHandler={onAddBlockHandler} />
                        </div>)
                    }
                </div>
            </ErrorBoundary>
        </>
    )
}