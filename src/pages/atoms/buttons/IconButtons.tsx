import Button from '../../../components/Atoms/Button/Button'
import { Border, Color, Lightness } from "../../../helpers/colorHelper";
import Heading, { HeadingType } from '../../../components/Atoms/Heading/Heading'
import Card from '../../../components/Molecules/Card/Card'
import { getLightNessText } from '../../../helpers/lightnessHelper';
import Code from '../../internalComponents/Code';
import { ReactComponent as FacebookIcon } from "../../../assets/facebook.svg";
import { ReactComponent as MailIcon } from "../../../assets/mail.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/instagram.svg";
import { ReactComponent as WhatsappIcon } from "../../../assets/whatsapp.svg";

interface IIconButtonProps{
    lightness:Lightness
}

export default function IconButtons(props:IIconButtonProps) {
    const { lightness } = props;
    
    const iconButtonsDemo = `
  <Button icon={<FacebookIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } />

  <Button icon={<MailIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.slate, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} />

  <Button icon={<WhatsappIcon fill="white" width={"auto"} height={"auto"} />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.emerald, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} />

  <Button icon={<InstagramIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.rose, bgLightness: Lightness.${getLightNessText(lightness)}, borderColor: Color.transparent }} />
  `
  return (
    <>
    <Heading type={HeadingType.h2} content="Icon and circular buttons" cssClass="mt-5" />      
        <p>I'm sure you would love to have some CTAs or icon buttons for your chat agent, shopping cart or social media links, so this is how you can use it!</p> 
        <Card cssClass="my-5">
          <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
          <hr />
          <div className="flex gap-4 flex-wrap justify-around my-10 relative">
            <Button icon={<FacebookIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } />
            <Button icon={<MailIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.slate, bgLightness: lightness as Lightness, borderColor: Color.transparent }} />
            <Button icon={<WhatsappIcon fill="white" width={"auto"} height={"auto"} />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.emerald, bgLightness: lightness as Lightness, borderColor: Color.transparent }} />
            <Button icon={<InstagramIcon fill="white" />} type="button" cssClass="hover:animate-pulse" shape={ Border.circle } colorConfig={{ bgColor: Color.rose, bgLightness: lightness as Lightness, borderColor: Color.transparent }} />
          </div>
          <hr className="mb-10" />
          <Code language="javascript" content={iconButtonsDemo} />
        </Card>
    </>
  )
}