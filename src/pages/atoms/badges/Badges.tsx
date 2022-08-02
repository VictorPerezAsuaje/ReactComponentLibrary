import Badge, { IPosition, XAxis, YAxis } from '../../../components/Atoms/Badge/Badge'
import Button from '../../../components/Atoms/Button/Button'
import Heading, { HeadingType } from '../../../components/Atoms/Heading/Heading'
import { ReactComponent as MailIcon } from "../../../assets/mail.svg";
import Card from '../../../components/Molecules/Card/Card';
import List from '../../../components/Atoms/List/List';
import { ListItem } from '../../../components/Atoms/List/ListItem';
import { Border, Color } from '../../../helpers/colorHelper';
import Code from '../../../internalComponents/Code';
import { useState } from 'react';

export default function Badges() {
    const [position, setPosition] = useState<IPosition>({ xAxis: XAxis.right, yAxis: YAxis.top });
    const [notifications, setNotifications] = useState(99);
    const [notificationColor, setNotificationColor] = useState(Color.rose);

    const buttonBadgeDemo = `
    <Button content={<Badge content="${notifications}" position={{ xAxis: XAxis.${position.xAxis}, yAxis: YAxis.${position.yAxis} }} shape={ Border.circle } colorConfig={{ bgColor: Color.${notificationColor}, borderColor: Color.transparent }} />} icon={<MailIcon fill="white" />} shape={Border.circle} />
  `;

  const buttonHeadingDemo = `
    <Heading type={HeadingType.h4} content={<span className='flex items-center'>Latest articles! <Badge content="New!" cssClass="ml-4 h-6 w-12" colorConfig={{ bgColor: Color.amber, borderColor: Color.transparent }} /></span>} />
    <List cssClass="flex flex-col gap-4 list-disc pl-10 my-3" >
        <ListItem key={"5 Development Projects You Can Easily Do Over a Weekend"} content={"5 Development Projects You Can Easily Do Over a Weekend"} />
        <ListItem key={"React code conventions and best practices"} content={"React code conventions and best practices"} />
        <ListItem key={"Building Rule-Based Notification Service (Push, SMS, Email, Whatsapp)"} content={"Building Rule-Based Notification Service (Push, SMS, Email, Whatsapp)"} />
        <ListItem key={"Tailwind CSS: My experience in 2022 "} content={<span className='flex'>Tailwind CSS: My experience in 2022 <Badge content="New!" cssClass="ml-3" colorConfig={{ bgColor: Color.amber, borderColor: Color.transparent }} /></span>} /> 
    </List>
  `;

  const onChangePosition = (newPosition:IPosition) => {
    setPosition(newPosition);
  }

  const onChangeNotificationNumber = (notifications:number) => {
    setNotifications(notifications > 999 ? 999 : notifications <= 0 ? 0 : notifications);
  }

  const onChangeNotificationColor = (notificationColor:Color) => {
    setNotificationColor(notificationColor);
  }

  return (
    <>
        <Heading type={HeadingType.h1} content="Badges" />
        <p className="mb-10">A badge is a little piece of content, usually asociated to a button or heading, that indicates information about the element to which it refers.</p>

        <Heading type={HeadingType.h2} content="Badges on buttons" cssClass="mt-5" />
        <p>You can pass other components to buttons in order to make almost any kind of button you could imagine, and a badge is a great example of this feature. Also, as buttons comes with <b>"position: relative;"</b> by default, you won't need to pass such configuration, so it just works out-of-the-box! </p>
        <p>Also, you can take advantage of both color and position configurations, as you can see in the following examples.</p>
        <Card cssClass='my-5'>
            <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
            <hr />
            <div className="flex flex-wrap justify-around my-10 ">
                <div className="flex-1 hidden md:block" />
                <div className="flex flex-1 flex-col items-center">
                    <div className="my-10 aspect-square w-60 relative text-[2rem]">
                        <Button icon="◤" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent}} cssClass="top-0 left-0 absolute hover:text-slate-400" hoverable onClickHandler={() => onChangePosition({xAxis: XAxis.left, yAxis: YAxis.top })} />
                        <Button icon="◥" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent}} cssClass="top-0 right-0 absolute hover:text-slate-400" hoverable onClickHandler={() => onChangePosition({xAxis: XAxis.right, yAxis: YAxis.top })} />
                        <Button icon="◣" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent}} cssClass="bottom-0 left-0 absolute hover:text-slate-400" hoverable onClickHandler={() => onChangePosition({xAxis: XAxis.left, yAxis: YAxis.bottom })} />
                        <Button icon="◢" colorConfig={{ bgColor: Color.transparent, borderColor: Color.transparent}} cssClass="bottom-0 right-0 absolute hover:text-slate-400" hoverable onClickHandler={() => onChangePosition({xAxis: XAxis.right, yAxis: YAxis.bottom })} />
                    </div>
                            
                    <div className="mb-7">
                        <label>Notification color: </label>
                        <select id="selectColor" onChange={(e) => onChangeNotificationColor(e.target.value as Color)} className="border-2 rounded ml-3 text-center">
                            { Object.values(Color).map(color => <option value={color} selected={notificationColor === color}>{color}</option>) }
                        </select>
                    </div>

                    <div className='flex flex-col'>
                        <div className="flex flex-row">
                            <Button icon="-" colorConfig={{ bgColor: Color.rose, borderColor: Color.transparent}} onClickHandler={() => onChangeNotificationNumber(notifications - 1)} />
                            <input id="nNotifications" name="nNotifications" type="text" value={notifications} onChange={(e) => onChangeNotificationNumber(+e.target.value)} min="0" max="999" className="w-16 text-center" readOnly />
                            <Button icon="+" colorConfig={{ bgColor: Color.blue, borderColor: Color.transparent}} onClickHandler={() => onChangeNotificationNumber(notifications + 1)} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <Button cssClass='w-16 h-16' content={<Badge content={`${notifications}`} position={position} shape={ Border.circle } colorConfig={{ bgColor: notificationColor, borderColor: Color.transparent }} />} icon={<MailIcon fill="white" />} shape={Border.circle} />
                </div>   
                <div className="flex-1 hidden md:block" />
            </div>
            <hr className="mb-10" />
            <Code language="javascript" content={buttonBadgeDemo} />
        </Card>

        <Heading type={HeadingType.h2} content="Badges on headings and lists" cssClass="mt-10" />
        <p>I'm pretty sure that you won't always want to use badges on buttons, right? Sometimes they are great to indicate your latests written articles, as the example below; or even more complex situations as we will see on the "Cards" section with a classic new e-commerce product.</p>
        <p>Be it as it may, you will have the freedom to mix and match as you see fit 😉</p>
        <Card cssClass='my-5'>
            <Heading type={HeadingType.h3} content="INTERACTIVE DEMO" />
            <hr />
            <div className="flex gap-4 flex-wrap my-10 pl-4">
                <Heading type={HeadingType.h4} content={<span className='flex items-center'>Latest articles! <Badge content="New!" cssClass="ml-4 h-6 w-12" colorConfig={{ bgColor: Color.amber, borderColor: Color.transparent }} /></span>} />
                <List cssClass="flex flex-col gap-4 list-disc pl-10 my-3" >
                    <ListItem key={"5 Development Projects You Can Easily Do Over a Weekend"} content={"5 Development Projects You Can Easily Do Over a Weekend"} />
                    <ListItem key={"React code conventions and best practices"} content={"React code conventions and best practices"} />
                    <ListItem key={"Building Rule-Based Notification Service (Push, SMS, Email, Whatsapp)"} content={"Building Rule-Based Notification Service (Push, SMS, Email, Whatsapp)"} />
                    <ListItem key={"Tailwind CSS: My experience in 2022 "} content={<span className='flex'>Tailwind CSS: My experience in 2022 <Badge content="New!" cssClass="ml-3" colorConfig={{ bgColor: Color.amber, borderColor: Color.transparent }} /></span>} /> 
                </List>
            </div>
            <hr className="mb-10" />
            <Code language="javascript" content={buttonHeadingDemo} />
        </Card>
    </>
  )
}
