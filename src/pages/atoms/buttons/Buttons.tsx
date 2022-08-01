import { useState } from "react";
import { Lightness } from "../../../helpers/colorHelper";
import Heading, { HeadingType } from "../../../components/Atoms/Heading/Heading";
import LightnessSelector from "../../internalComponents/LightnessSelector";

import SolidButtons from "./SolidButtons";
import OutlineButtons from "./OutlineButtons";
import DisabledButtons from "./DisabledButtons";
import IconButtons from "./IconButtons";
import ImageButtons from "./ImageButtons";
import ClickEventsButtons from "./ClickEventsButtons";

export default function Buttons() {
  const [lightness, setlightness] = useState<Lightness>(Lightness.normal);

  return (
    <>
        <Heading type={HeadingType.h1} content="Buttons" />
        <p className="mb-10">Buttons allow users to take actions in forms, dialogs, widgets, etc. with just one click.</p>

        <LightnessSelector onClickHandler={setlightness} />

        <SolidButtons lightness={lightness} />       

        <OutlineButtons lightness={lightness} />

        <DisabledButtons />

        <IconButtons lightness={lightness} />        

        <ImageButtons />        

        <ClickEventsButtons lightness={lightness} />
    </>    
  )
}

