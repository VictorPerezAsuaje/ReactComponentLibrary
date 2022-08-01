import { useEffect, useState } from 'react'
import { Color } from "../../../helpers/colorHelper";
import Button from '../../../components/Atoms/Button/Button'
import Heading, { HeadingType } from '../../../components/Atoms/Heading/Heading'
import Card from '../../../components/Molecules/Card/Card'
import Code from '../../internalComponents/Code';

export default function ImageButtons() {
    const [taglineVisible, setTagLineVisible] = useState(false);

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

  useEffect(() => {
    let taglineTimer = setTimeout(() => setTagLineVisible(false), 3000);
    if(taglineVisible === false) clearTimeout(taglineTimer);
    }, [taglineVisible]);

  return (
    <>
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
    </>
  )
}

