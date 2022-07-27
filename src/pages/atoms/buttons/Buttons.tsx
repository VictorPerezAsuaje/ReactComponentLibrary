import { useState } from "react";
import Button from "../../../components/Atoms/Button/Button";
import Heading, { HeadingType } from "../../../components/Atoms/Heading/Heading";
import Card from "../../../components/Molecules/Card/Card";
import Code from "../../components/Code";

export default function Buttons() {
  const [solidBtnLightness, setSolidBtnLightness] = useState("500");

  const exampleCode = `
    <Button content="button" type="button" extraCssClass={"bg-red-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" extraCssClass={"bg-rose-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" extraCssClass={"bg-amber-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" extraCssClass={"bg-emerald-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" extraCssClass={"bg-teal-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" extraCssClass={"bg-blue-${solidBtnLightness} text-white mr-3"} rounded uppercase />
    <Button content="button" type="button" extraCssClass={"bg-violet-${solidBtnLightness} text-white mr-3"} rounded uppercase />
  `

  return (
    <>
        <Heading type={HeadingType.h1} content="Buttons" />
        <p>Buttons allow users to take actions in forms, dialogs, widgets, etc. with just one click.</p>
        <div className="my-5">
          <Button content="Dark" type="button" extraCssClass="bg-slate-600 text-white mr-4 w-24" uppercase circle onClickHandler={() => setSolidBtnLightness("600")}/> 
          <Button content="Normal" type="button" extraCssClass="bg-slate-500 text-white mr-4 w-24" uppercase circle onClickHandler={() => setSolidBtnLightness("500")}/> 
          <Button content="Light" type="button" extraCssClass="bg-slate-400 text-white w-24" uppercase circle onClickHandler={() => setSolidBtnLightness("400")}/> 
        </div>

        <div id="simpleButton">
          <Heading type={HeadingType.h2} content="Solid buttons" />      
          <p>The library includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. This is the case for the <b>rounded</b> and <b>uppercase</b> properties.</p>
          <Card extraCssClass="my-5">
            <div className="flex flex-row justify-around my-10">
              <Button content="button" type="button" extraCssClass={`bg-red-${solidBtnLightness} text-white mr-3`} rounded uppercase />
              <Button content="button" type="button" extraCssClass={`bg-rose-${solidBtnLightness} text-white mr-3`} rounded uppercase onClickHandler={() => console.log("rose")}/>
              <Button content="button" type="button" extraCssClass={`bg-amber-${solidBtnLightness} text-white mr-3`} rounded uppercase onClickHandler={() => console.log("amber")}/>
              <Button content="button" type="button" extraCssClass={`bg-emerald-${solidBtnLightness} text-white mr-3`} rounded uppercase onClickHandler={() => console.log("emerald")}/>
              <Button content="button" type="button" extraCssClass={`bg-teal-${solidBtnLightness} text-white mr-3`} rounded uppercase onClickHandler={() => console.log("teal")}/>
              <Button content="button" type="button" extraCssClass={`bg-blue-${solidBtnLightness} text-white mr-3`} rounded uppercase onClickHandler={() => console.log("blue")}/>
              <Button content="button" type="button" extraCssClass={`bg-violet-${solidBtnLightness} text-white mr-3`} rounded uppercase onClickHandler={() => console.log("violet")}/>
            </div>            
            <hr className="mb-10" />
            <Code language="javascript" content={exampleCode} />
          </Card>
        </div>
    </>    
  )
}

