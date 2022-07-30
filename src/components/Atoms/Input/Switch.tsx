interface ISwitchProps{
    content:string,
    id:string,
    cssClass?:string,
    checked:boolean
    onClickHandler?(): any
}

export default function Switch(props:ISwitchProps) {
    const { content, id, cssClass, checked, onClickHandler } = props;
    
    return (
        <label htmlFor={`toggle-${id}`} className={`inline-flex relative items-center mr-5 cursor-pointer ${cssClass}`}>
            <input type="checkbox" value="" id={`toggle-${id}`} className="sr-only peer" checked={checked} onChange={onClickHandler} />
            <span className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></span>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{content}</span>
        </label>
    )
}

