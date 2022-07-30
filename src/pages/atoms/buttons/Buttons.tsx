import { useEffect, useState } from "react";
import Button, { Border, ButtonType, Color, Lightness } from "../../../components/Atoms/Button/Button";
import Heading, { HeadingType } from "../../../components/Atoms/Heading/Heading";
import Switch from "../../../components/Atoms/Input/Switch";
import Alert from "../../../components/Molecules/Alert/Alert";
import Card from "../../../components/Molecules/Card/Card";
import Code from "../../components/Code";
import LightnessSelector from "../../components/LightnessSelector";
import { ReactComponent as FacebookIcon } from "../../../assets/facebook.svg";
import { ReactComponent as MailIcon } from "../../../assets/mail.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/instagram.svg";
import { ReactComponent as WhatsappIcon } from "../../../assets/whatsapp.svg";

export default function Buttons() {
  const [solidBtnLightness, setSolidBtnLightness] = useState(Lightness.normal);
  const [solidBtnColor, setSolidBtnColor] = useState("");
  const [outBtnColor, setOutBtnColor] = useState("");
  const [solidAlertVisibility, setSolidAlertVisibility] = useState(false);
  const [outAlertVisibility, setOutAlertVisibility] = useState(false);
  const [hoverable, setHoverable] = useState(false);
  const [randomColor, setRandomColor] = useState(Color.blue);
  const [taglineVisible, setTagLineVisible] = useState(false);

  const getLightNessText = (light:Lightness):string =>{
    switch(light){
      case Lightness.dark:
        return "dark";
      case Lightness.normal:
        return "normal";
      case Lightness.light:
        return "light"
    }
  }  

  const exampleBtnSolidCode = `
    <Button content="button" type="button" colorConfig={{ bgColor: Color.red, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.rose, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.amber, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.emerald, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.teal, bgLightness: $Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} uppercase />

    <Button content="hover me" type="button" cssClass="hover:bg-red-300" uppercase hoverable />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.violet, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} uppercase />
  `;

  const exampleBtnOutlineCode = `
    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.red }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.rose }}${hoverable ? " hoverable" : ""} uppercase />
    
    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.amber }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.emerald }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.teal }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.blue }}${hoverable ? " hoverable" : ""} uppercase />

    <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.violet }}${hoverable ? " hoverable" : ""} uppercase />
  `;

  const disabledDemo = `
  <Button content="ENABLED" type="button" cssClass="hover:animate-pulse" uppercase />

  <Button content="DISABLED" type="button" cssClass="hover:animate-pulse" uppercase disabled />
  `;

  const iconButtonsDemo = `
  <Button icon={<FacebookIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } />

  <Button icon={<MailIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.slate, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} />

  <Button icon={<WhatsappIcon fill="white" width={"auto"} height={"auto"} />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.emerald, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} />

  <Button icon={<InstagramIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.rose, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.transparent }} />
  `

  const imageAsButtonDemo = `
    const [taglineVisible, setTagLineVisible] = useState(false);

    useEffect(() => {
        let taglineTimer = setTimeout(() => setTagLineVisible(false), 3000);
        if(taglineVisible === false) clearTimeout(taglineTimer);
    }, [taglineVisible]);

    <div className="flex gap-4 flex-wrap justify-around my-10 relative">
      <Button content={<Card><img src="https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg" alt="an amazing loving cat 💘"/></Card>} type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent }} onClickHandler={() => setTagLineVisible(true)} />

      { 
        taglineVisible ? 
        <Card cssClass="absolute z-10 bg-white/75 bottom-10 w-1/3 text-center font-medium">
          Love me, human! ♥😺
        </Card> 
        : ""
      }

    </div>
  `;

  const clickEventDemo = `
    const [randomColor, setRandomColor] = useState(Color.blue);

    <Button content="CLICK ME!" type="button" cssClass="hover:animate-pulse" colorConfig={{ bgColor: Color.${randomColor}, bgLightness: Lightness.${getLightNessText(solidBtnLightness)}, borderColor: Color.${randomColor} === Color.transparent ? Color.blue : Color.${randomColor} }} onClickHandler={() => ChangeRandomColor()} />
  `;

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

  const onHoverableClick = () => {
    setHoverable(!hoverable);
  }

  const ChangeRandomColor = () => {
    const index:number= Math.floor(Math.random() * Object.keys(Color).length);
    const value:Color= Object.values(Color)[index]; 
    setRandomColor(value);
  }

  useEffect(() => {
      let taglineTimer = setTimeout(() => setTagLineVisible(false), 3000);
      if(taglineVisible === false) clearTimeout(taglineTimer);
  }, [taglineVisible]);

  return (
    <>
        <Heading type={HeadingType.h1} content="Buttons" />
        <p>Buttons allow users to take actions in forms, dialogs, widgets, etc. with just one click.</p>
        <LightnessSelector onClickHandler={setSolidBtnLightness} />
        {/* SOLID BUTTONS */}
        <Heading type={HeadingType.h2} content="Solid buttons" />      
        <p>The library includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. This is the case for the <b>hoverable</b> and <b>uppercase</b> properties.</p>
        <p>However, the code is designed so solid buttons do not have a hoverable state unless you explicitly specify it on the cssClass. Therefore, if you wanted to have a solid button whose hover background color was a lighter version of it, you would need to pass <b>"cssClass = 'hover:bg-[your_color]-[color_lightness]'"</b> to the button as well as the "hoverable" property.</p>
        <p>By default, if you don't define any different color configuration, you will get the blue solid button.</p>
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10">
            <Button content="button" type="button" colorConfig={{ bgColor: Color.red, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick("red", ButtonType.solid)} uppercase />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.rose, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.rose, ButtonType.solid)} uppercase />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.amber, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.amber, ButtonType.solid)} uppercase />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.emerald, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.emerald, ButtonType.solid)} uppercase />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.teal, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.teal, ButtonType.solid)} uppercase />
            <Button content="hover me" type="button" onClickHandler={() => onBtnClick(Color.blue, ButtonType.solid)} cssClass="hover:bg-blue-300" uppercase hoverable />
            <Button content="button" type="button" colorConfig={{ bgColor: Color.violet, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} onClickHandler={() => onBtnClick(Color.violet, ButtonType.solid)} uppercase />
          </div>
          
          {
            solidAlertVisibility ? <Alert children={<b>Wow! Now I'm {solidBtnColor}! 🤯</b>} cssClass={`bg-${solidBtnColor}-${solidBtnLightness} text-white w-80 mx-auto text-center`} onClickHandler={() => onCloseClick("", ButtonType.solid)} /> : ""
          }
    
          <hr className="mb-10" />
          <Code language="javascript" content={exampleBtnSolidCode} />
        </Card>

         {/* OUTLINE BUTTONS */}
        <Heading type={HeadingType.h2} content="Outline buttons" cssClass="mt-5" />      
        <p>The same as the previous buttons but lesser visual load, which means that they are important but not the primary action. </p> 
        <p className="flex flex-wrap gap-4">Did you know you can use it with hover? <b>Check it out!</b> <span><Switch content="CLICK ME!" id="outline-button" onClickHandler={() => onHoverableClick()} checked={hoverable} /></span></p>
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10 ">
            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: solidBtnLightness as Lightness, borderColor: Color.red }} onClickHandler={() => onBtnClick("red", ButtonType.outline)} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: solidBtnLightness as Lightness, borderColor: Color.rose }} onClickHandler={() => onBtnClick("rose", ButtonType.outline)} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: solidBtnLightness as Lightness, borderColor: Color.amber }} onClickHandler={() => onBtnClick("amber", ButtonType.outline)} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: solidBtnLightness as Lightness, borderColor: Color.emerald }} onClickHandler={() => onBtnClick("emerald", ButtonType.outline)} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: solidBtnLightness as Lightness, borderColor: Color.teal }} onClickHandler={() => onBtnClick("teal", ButtonType.outline)} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: solidBtnLightness as Lightness, borderColor: Color.blue }} onClickHandler={() => onBtnClick("blue", ButtonType.outline)} uppercase hoverable={hoverable} />

            <Button content="button" type="button" colorConfig={{ bgColor: Color.transparent, bgLightness: solidBtnLightness as Lightness, borderColor: Color.violet }} onClickHandler={() => onBtnClick("violet", ButtonType.outline)} uppercase hoverable={hoverable} />

          </div>
          
          {
            outAlertVisibility ? <Alert children={<b>Wow! Now I'm {outBtnColor}! 🤯</b>} cssClass={`border-2 border-${outBtnColor}-${solidBtnLightness} text-${outBtnColor}-${solidBtnLightness} w-80 mx-auto text-center`} onClickHandler={() => onCloseClick("", ButtonType.outline)} /> : ""
          }
    
          <hr className="mb-10" />
          <Code language="javascript" content={exampleBtnOutlineCode} />
        </Card>

        {/* DISABLED BUTTONS */}
        <Heading type={HeadingType.h2} content="Disabled buttons" cssClass="mt-5" />      
        <p>Disabled buttons <b>can not be clicked</b>, in spite of passing a function to the onClickHandler, <b>nor hovered</b>, as it removes pointer events. It also comes with a grayed out aesthetic to differentiate it from active buttons.</p> 
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10 ">
            <Button content="ENABLED" type="button" cssClass="hover:animate-pulse"  uppercase />
            <Button content="DISABLED" type="button" cssClass="hover:animate-pulse" uppercase disabled />
          </div>
          <hr className="mb-10" />
          <Code language="javascript" content={disabledDemo} />
        </Card>

        {/* ICON AND CIRCLE BUTTONS */}
        <Heading type={HeadingType.h2} content="Icon and circular buttons" cssClass="mt-5" />      
        <p>I'm sure you would love to have some CTAs or icon buttons for your chat agent, shopping cart or social media links, so this is how you can use it!</p> 
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10 relative">
            <Button icon={<FacebookIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } />
            <Button icon={<MailIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.slate, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} />
            <Button icon={<WhatsappIcon fill="white" width={"auto"} height={"auto"} />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.emerald, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} />
            <Button icon={<InstagramIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.rose, bgLightness: solidBtnLightness as Lightness, borderColor: Color.transparent }} />
          </div>
          <hr className="mb-10" />
          <Code language="javascript" content={iconButtonsDemo} />
        </Card>

        {/* IMAGES AS BUTTONS */}
        <Heading type={HeadingType.h2} content="Images as buttons" cssClass="mt-5" />      
        <p>Why would you want an image as a button? <b>Because you can!</b></p> 
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10 relative">
            <Button content={<Card><img src="https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg" alt="an amazing loving cat 💘"/></Card>} type="button" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent }} onClickHandler={() => setTagLineVisible(true)} />
            {
              taglineVisible ? 
              <Card cssClass="absolute z-10 bg-white/75 bottom-10 w-1/3 text-center font-medium">
                Love me, human! ♥😺
              </Card> : ""
            }
          </div>
          <hr className="mb-10" />
          <Code language="javascript" content={imageAsButtonDemo} />
        </Card>

        {/* HANDLING CLICK EVENTS */}
        <Heading type={HeadingType.h2} content="Handling click events" cssClass="mt-5" />      
        <p>What is a button without a clicking event? 🤔 That's why you can use click events passing it through the "onClickHandler" property of the button. </p> 
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10 relative">
            <Button content="CLICK ME!" type="button" cssClass="hover:animate-pulse" colorConfig={{ bgColor: randomColor, bgLightness: solidBtnLightness as Lightness, borderColor: randomColor === Color.transparent ? Color.blue : randomColor }} onClickHandler={() => ChangeRandomColor()} />
          </div>
          <hr className="mb-10" />
          <Code language="javascript" content={clickEventDemo} />
        </Card>
    </>    
  )
}

