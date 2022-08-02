export function internalHTMLInterpreter(text:string):any[]{
    let sanitizedText = [];
    const textArr = text.split(/<|>/g)
    for(let i = 0; i < textArr.length; i++){
        if(i % 2 === 0){
            sanitizedText.push(textArr[i]);
            continue;
        }
        
        switch(textArr[i][0]){
            case "a":
                sanitizedText.push(<a href={textArr[i].split("href=")[1].replaceAll("\"", "")} className="underline pointer-events-auto" target="_blank">{textArr[i+1]}</a>);
                i++;
                break;
            case "b":
                sanitizedText.push(<b>{textArr[i+1]}</b>);
                i++;
                break;
            case "i":
                sanitizedText.push(<i>{textArr[i+1]}</i>);
                i++;
                break;
        }
    }

    return sanitizedText;
}