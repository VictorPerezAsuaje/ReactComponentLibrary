export enum HeadingType{ h1, h2, h3, h4, h5, subtitle }
interface HeadingProps{
    content:string,
    type:HeadingType,
    cssClass?:string
}

const renderHeading = (props:HeadingProps) => {
    const { content, type, cssClass } = props;
    let baseCssClass = `inline-block font-bold text-slate-600 tracking-tight dark:text-slate-200 mb-5 w-full ${cssClass === undefined ? "" : cssClass }`;

    switch(type){
        case HeadingType.h3:
        default:
            baseCssClass += " text-xl";
            return <h3 className={baseCssClass}>{content}</h3>

        case HeadingType.h1:
            baseCssClass += " text-3xl";
            return <h1 className={baseCssClass}>{content}</h1>  

        case HeadingType.h2:
            baseCssClass += " text-2xl";
            return <h2 className={baseCssClass}>{content}</h2>  

        case HeadingType.h4:
            baseCssClass += " text-lg";
            return <h4 className={baseCssClass}>{content}</h4>  

        case HeadingType.h5:
            return <h5 className={baseCssClass}>{content}</h5>  
    }
}

export default function Heading(props:HeadingProps) {
  return (
    <>{ renderHeading(props) }</>
  )
}
