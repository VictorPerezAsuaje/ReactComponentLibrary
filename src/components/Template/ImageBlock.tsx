export interface IImageBlockProps{
    url:string,
    caption?:string,
    alternativeText?:string
}

export const ImageBlock = (props:IImageBlockProps) => <img src={props.url} alt={props.url} className="peer" />
