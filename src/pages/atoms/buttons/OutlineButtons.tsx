import { useState } from 'react'
import Button from '../../../components/Atoms/Button/Button'
import { Color, Lightness } from "../../../helpers/colorHelper";
import Heading, { HeadingType } from '../../../components/Atoms/Heading/Heading'
import Switch from '../../../components/Atoms/Input/Switch';
import Alert from '../../../components/Molecules/Alert/Alert';
import Card from '../../../components/Molecules/Card/Card'
import { getLightNessText } from '../../../helpers/lightnessHelper';
import Code from '../../internalComponents/Code';

interface IOutlineButtonProps{
    lightness:Lightness
}

export default function OutlineButtons(props:IOutlineButtonProps) {
    const [outAlertVisibility, setOutAlertVisibility] = useState(false);
    const [hoverable, setHoverable] = useState(false);
    const [outBtnColor, setOutBtnColor] = useState("");
    
    const { lightness } = props;

    const exampleBtnOutlineCode = `
    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.red }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.rose }}${hoverable ? " hoverable" : ""} uppercase />
    
    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.amber }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.emerald }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.teal }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.blue }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.violet }}${hoverable ? " hoverable" : ""} uppercase />
  `;

    const onHoverableClick = () => {
        setHoverable(!hoverable);
    }
    const onBtnClick = (btnColor:string) => {
        setOutBtnColor(btnColor);
        setOutAlertVisibility(true);
    }

    const onCloseClick = (btnColor:string) => {
        setOutBtnColor(btnColor);
        setOutAlertVisibility(false);
    }  

  return (
    <>
        <Heading type={HeadingType.h2} content="Outline buttons" cssClass="mt-5" />      
        <p>The same as the previous buttons but lesser visual load, which means that they are important but not the primary action. </p> 
        <p className="flex flex-wrap gap-4">Did you know you can use it with hover? <b>Check it out!</b> <span><Switch content="CLICK ME!" id="outline-button" onClickHandler={() => onHoverableClick()} checked={hoverable} /></span></p>
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10 ">
            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: lightness as Lightness, borderColor: Color.red }} onClickHandler={() => onBtnClick("red")} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: lightness as Lightness, borderColor: Color.rose }} onClickHandler={() => onBtnClick("rose")} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: lightness as Lightness, borderColor: Color.amber }} onClickHandler={() => onBtnClick("amber")} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: lightness as Lightness, borderColor: Color.emerald }} onClickHandler={() => onBtnClick("emerald")} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: lightness as Lightness, borderColor: Color.teal }} onClickHandler={() => onBtnClick("teal")} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: lightness as Lightness, borderColor: Color.blue }} onClickHandler={() => onBtnClick("blue")} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: lightness as Lightness, borderColor: Color.violet }} onClickHandler={() => onBtnClick("violet")} uppercase hoverable={hoverable} />

          </div>
          
          {
            outAlertVisibility ? <Alert children={<b>Wow! Now I'm {outBtnColor}! 🤯</b>} cssClass={`border-2 border-${outBtnColor}-${lightness} text-${outBtnColor}-${lightness} w-80 mx-auto text-center`} onClickHandler={() => onCloseClick("")} /> : ""
          }
    
          <hr className="mb-10" />
          <Code language="javascript" content={exampleBtnOutlineCode} />
        </Card>
        </>
  )
}

