import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

interface ICode{
    content:string,
    language:string,
    containerCssClass?:string
}

export default function Code(props:ICode) {
    const { content, language, containerCssClass } = props;

    useEffect(() => Prism.highlightAll(), [props]);

    return (
        <div className={"Code " + containerCssClass === undefined ? "" : containerCssClass}>
            <pre className="rounded">
                <code className={`lang-${language}`} style={{ whiteSpace: 'pre-wrap' }}>{content}</code>
            </pre>
        </div>
    )
}