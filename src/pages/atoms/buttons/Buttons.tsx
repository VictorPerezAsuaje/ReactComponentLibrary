import { useState } from "react";
import Button from "../../../components/Atoms/Button/Button";
import Heading, { HeadingType } from "../../../components/Atoms/Heading/Heading";
import Alert from "../../../components/Molecules/Alert/Alert";
import Card from "../../../components/Molecules/Card/Card";
import Code from "../../components/Code";

enum ButtonType { solid, outline }

export default function Buttons() {
  const [solidBtnLightness, setSolidBtnLightness] = useState("500");
  const [solidBtnColor, setSolidBtnColor] = useState("");
  const [outBtnColor, setOutBtnColor] = useState("");
  const [solidAlertVisibility, setSolidAlertVisibility] = useState(false);
  const [outAlertVisibility, setOutAlertVisibility] = useState(false);

  const exampleCode = `
    <Button content="button" type="button" cssClass={"bg-red-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" cssClass={"bg-rose-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" cssClass={"bg-amber-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" cssClass={"bg-emerald-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" cssClass={"bg-teal-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" cssClass={"bg-blue-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" cssClass={"bg-violet-${solidBtnLightness} text-white mr-3"} rounded uppercase />
  `

  const onBtnClick = (btnColor:string, btnType:ButtonType) => {
    switch(btnType){
      case ButtonType.solid:
        setSolidBtnColor(btnColor);
        setSolidAlertVisibility(true);
        break;
      case ButtonType.outline:
        setOutBtnColor(btnColor);
        setOutAlertVisibility(true);
        break;
    }

  }

  const onCloseClick = (btnColor:string, btnType:ButtonType) => {
    switch(btnType){
      case ButtonType.solid:
        setSolidBtnColor(btnColor);
        setSolidAlertVisibility(false);
        break;
      case ButtonType.outline:
        setOutBtnColor(btnColor);
        setOutAlertVisibility(false);
        break;
    }
    
  }

  return (
    <>
        <Heading type={HeadingType.h1} content="Buttons" />
        <p>Buttons allow users to take actions in forms, dialogs, widgets, etc. with just one click.</p>
        <Card cssClass="my-5 fixed right-4 top-2 flex flex-col rounded-full bg-white">
          <Button content="🌙" type="button" cssClass="bg-slate-600 text-white mb-4" uppercase circle onClickHandler={() => setSolidBtnLightness("600")} hoverable="hover:bg-slate-400" /> 
          <Button content="⛅" type="button" cssClass="bg-slate-500 text-white mb-4" uppercase circle onClickHandler={() => setSolidBtnLightness("500")} hoverable="hover:bg-slate-300"/> 
          <Button content="🌞" type="button" cssClass="bg-slate-400 text-white" uppercase circle onClickHandler={() => setSolidBtnLightness("400")} hoverable="hover:bg-slate-200"/> 
        </Card>

        {/* SOLID BUTTONS */}
        <Heading type={HeadingType.h2} content="Solid buttons" />      
        <p>The library includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. This is the case for the <b>rounded</b> and <b>uppercase</b> properties.</p>
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex flex-row justify-around my-10">
            <Button content="button" type="button" cssClass={`bg-red-${solidBtnLightness} text-white mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("red", ButtonType.solid)}/>
            <Button content="button" type="button" cssClass={`bg-rose-${solidBtnLightness} text-white mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("rose", ButtonType.solid)} />
            <Button content="button" type="button" cssClass={`bg-amber-${solidBtnLightness} text-white mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("amber", ButtonType.solid)} />
            <Button content="button" type="button" cssClass={`bg-emerald-${solidBtnLightness} text-white mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("emerald", ButtonType.solid)} />
            <Button content="button" type="button" cssClass={`bg-teal-${solidBtnLightness} text-white mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("teal", ButtonType.solid)} />
            <Button content="button" type="button" cssClass={`bg-blue-${solidBtnLightness} text-white mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("blue", ButtonType.solid)} />
            <Button content="button" type="button" cssClass={`bg-violet-${solidBtnLightness} text-white mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("violet", ButtonType.solid)} />
          </div>
          
          {
            solidAlertVisibility ? <Alert children={<b>Wow! Now I'm {solidBtnColor}! 🤯</b>} cssClass={`bg-${solidBtnColor}-${solidBtnLightness} text-white w-80 mx-auto text-center`} onClickHandler={() => onCloseClick("", ButtonType.solid)} /> : ""
          }
    
          <hr className="mb-10" />
          <Code language="javascript" content={exampleCode} />
        </Card>

         {/* OUTLINE BUTTONS */}
        <Heading type={HeadingType.h2} content="Outline buttons" cssClass="mt-5" />      
        <p>The library includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. This is the case for the <b>rounded</b> and <b>uppercase</b> properties.</p>
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex flex-row justify-around my-10">
            <Button content="button" type="button" cssClass={`border-2 border-red-${solidBtnLightness} text-red-${solidBtnLightness} font-medium mr-3`} rounded uppercase onClickHandler={() => onBtnClick("red", ButtonType.outline)}/>
            <Button content="button" type="button" cssClass={`border-2 border-rose-${solidBtnLightness} text-rose-${solidBtnLightness} mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("rose", ButtonType.outline)} />
            <Button content="button" type="button" cssClass={`border-2 border-amber-${solidBtnLightness} text-amber-${solidBtnLightness} mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("amber", ButtonType.outline)} />
            <Button content="button" type="button" cssClass={`border-2 border-emerald-${solidBtnLightness} text-emerald-${solidBtnLightness} mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("emerald", ButtonType.outline)} />
            <Button content="button" type="button" cssClass={`border-2 border-teal-${solidBtnLightness} text-teal-${solidBtnLightness} mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("teal", ButtonType.outline)} />
            <Button content="button" type="button" cssClass={`border-2 border-blue-${solidBtnLightness} text-blue-${solidBtnLightness} mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("blue", ButtonType.outline)} />
            <Button content="button" type="button" cssClass={`border-2 border-violet-${solidBtnLightness} text-violet-${solidBtnLightness} mr-3 font-medium`} rounded uppercase onClickHandler={() => onBtnClick("violet", ButtonType.outline)} />
          </div>
          
          {
            outAlertVisibility ? <Alert children={<b>Wow! Now I'm {outBtnColor}! 🤯</b>} cssClass={`border-2 border-${outBtnColor}-${solidBtnLightness} text-${outBtnColor}-${solidBtnLightness} w-80 mx-auto text-center`} onClickHandler={() => onCloseClick("", ButtonType.outline)} /> : ""
          }
    
          <hr className="mb-10" />
          <Code language="javascript" content={exampleCode} />
        </Card>
    </>    
  )
}

