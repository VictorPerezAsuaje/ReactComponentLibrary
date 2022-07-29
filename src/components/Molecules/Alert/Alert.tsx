import Button from "../../Atoms/Button/Button";

interface IAlertProps{
    children:React.ReactNode,
    cssClass?:string,
    onClickHandler():any
}

export default function Alert(props:IAlertProps) {
    const { children, cssClass, onClickHandler } = props;

  return (
    <div className={"grid grid-cols-8 p-4 m-3 rounded " + cssClass}>
        <span className="col-span-7">{children}</span>
        <Button content="X" cssClass="font-bold" onClickHandler={onClickHandler} />
    </div> 
  )
}