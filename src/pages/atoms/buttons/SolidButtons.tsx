import { useState } from 'react'
import Button from '../../../components/Atoms/Button/Button'
import { Color, Lightness } from "../../../helpers/colorHelper";
import Heading, { HeadingType } from '../../../components/Atoms/Heading/Heading'
import Alert from '../../../components/Molecules/Alert/Alert';
import Card from '../../../components/Molecules/Card/Card'
import { getLightNessText } from '../../../helpers/lightnessHelper';
import Code from '../../internalComponents/Code';

interface ISolidButtonProps{
    lightness:Lightness
}

export default function SolidButtons(props:ISolidButtonProps) {
    const [solidAlertVisibility, setSolidAlertVisibility] = useState(false);
    const [solidBtnColor, setSolidBtnColor] = useState("");
    const { lightness } = props;

    const exampleBtnSolidCode = `
    <Button content="button" type="button" colorConfig={{ bgColor: Color.red, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.rose, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.amber, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.emerald, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.teal, bgLightness: $Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="hover me" type="button" cssClass="hover:bg-red-300" uppercase hoverable />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.violet, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} uppercase />
  `;

    const onBtnClick = (btnColor:string) => {
        setSolidBtnColor(btnColor);
        setSolidAlertVisibility(true);
    }
    
    const onCloseClick = (btnColor:string) => {
        setSolidBtnColor(btnColor);
        setSolidAlertVisibility(false);
    }

  return (
    <>
        <Heading type={HeadingType.h2} content="Solid buttons" />      
        <p>The library includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. This is the case for the <b>hoverable</b> and <b>uppercase</b> properties.</p>
        <p>However, the code is designed so solid buttons do not have a hoverable state unless you explicitly specify it on the cssClass. Therefore, if you wanted to have a solid button whose hover background color was a lighter version of it, you would need to pass <b>"cssClass = 'hover:bg-[your_color]-[color_lightness]'"</b> to the button as well as the "hoverable" property.</p>
        <p>By default, if you don't define any different color configuration, you will get the blue solid button.</p>
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10">
            <Button content="button" type="button" colorConfig={{ bgColor: Color.red, bgLightness: lightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick("red")} uppercase />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.rose, bgLightness: lightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.rose)} uppercase />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.amber, bgLightness: lightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.amber)} uppercase />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.emerald, bgLightness: lightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.emerald)} uppercase />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.teal, bgLightness: lightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.teal)} uppercase />
            <Button content="hover me" type="button" onClickHandler={() => onBtnClick(Color.blue)} cssClass="hover:bg-blue-300" uppercase hoverable />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.violet, bgLightness: lightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.violet)} uppercase />
          </div>
          
          {
            solidAlertVisibility ? <Alert children={<b>Wow! Now I'm {solidBtnColor}! 🤯</b>} cssClass={`bg-${solidBtnColor}-${lightness} text-white w-80 mx-auto text-center`} onClickHandler={() => onCloseClick("")} /> : ""
          }
    
          <hr className="mb-10" />
          <Code language="javascript" content={exampleBtnSolidCode} />
        </Card>
    </>
  )
}

