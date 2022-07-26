import Button from "../../../components/Atoms/Button/Button";



export default function Buttons() {
  return (
    <>
        <h2>Buttons</h2>
        <p>Buttons allow users to take actions in forms, dialogs, widgets, etc. with just one click.</p>
        <div id="simpleButton">
          <h3>Simple button</h3>            
          <Button content="Hola" type="button" />
        </div>
    </>    
  )
}

