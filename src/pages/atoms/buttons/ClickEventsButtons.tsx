import { useState } from 'react'
import Button from '../../../components/Atoms/Button/Button'
import { Color, Lightness } from "../../../helpers/colorHelper";
import Heading, { HeadingType } from '../../../components/Atoms/Heading/Heading'
import Card from '../../../components/Molecules/Card/Card'
import { getLightNessText } from '../../../helpers/lightnessHelper';
import Code from '../../internalComponents/Code';

interface IClickEventsButtonsProps{
    lightness:Lightness
}

export default function ClickEventsButtons(props:IClickEventsButtonsProps) {
    const [randomColor, setRandomColor] = useState(Color.blue);

    const { lightness } = props;
    
    const clickEventDemo = `
    const [randomColor, setRandomColor] = useState(Color.blue);

    <Button content="CLICK ME!" type="button" cssClass="hover:animate-pulse" colorConfig={{ bgColor: Color.${randomColor}, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.${randomColor} === Color.transparent ? Color.blue : Color.${randomColor} }} onClickHandler={() => ChangeRandomColor()} />
  `;

    const ChangeRandomColor = () => {
        const index:number= Math.floor(Math.random() * Object.keys(Color).length);
        const value:Color= Object.values(Color)[index]; 
        setRandomColor(value);
    }

    return (
        <>
            <Heading type={HeadingType.h2} content="Handling click events" cssClass="mt-5" />      
            <p>What is a button without a clicking event? 🤔 That's why you can use click events passing it through the "onClickHandler" property of the button. </p> 
            <Card cssClass="my-5">
            <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
            <hr />
            <div className="flex gap-4 flex-wrap justify-around my-10 relative">
                <Button content="CLICK ME!" type="button" cssClass="hover:animate-pulse" colorConfig={{ bgColor: randomColor, bgLightness: lightness as Lightness, borderColor: randomColor === Color.transparent ? Color.blue : randomColor }} onClickHandler={() => ChangeRandomColor()} />
            </div>
            <hr className="mb-10" />
            <Code language="javascript" content={clickEventDemo} />
            </Card>
        </>
  )
}
