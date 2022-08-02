import Button from '../../../components/Atoms/Button/Button'
import Heading, { HeadingType } from '../../../components/Atoms/Heading/Heading'
import Card from '../../../components/Molecules/Card/Card'
import Code from '../../../internalComponents/Code';


export default function DisabledButtons() {
    const disabledDemo = `
  <Button content="ENABLED" type="button" cssClass="hover:animate-pulse" uppercase />

  <Button content="DISABLED" type="button" cssClass="hover:animate-pulse" uppercase disabled />
  `;

    return (
        <>
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
        </>
    )
}

