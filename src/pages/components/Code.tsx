import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

interface ICode{
    content:string,
    language:string,
    containerCssClass?:string
}

export default function Code(props:ICode) {
    useEffect(() => {
        Prism.highlightAll();
        }, []);

    return (
        <div className={"Code my-5" + props.containerCssClass === undefined ? "" : props.containerCssClass}>
            <pre className="rounded">
                <code className={`language-${props.language}`}>{props.content}</code>
            </pre>
        </div>
    )
}