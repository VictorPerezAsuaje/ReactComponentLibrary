import Button, { Border, Lightness } from "../../components/Atoms/Button/Button";
import Card from "../../components/Molecules/Card/Card";

interface ILightnessSelectorProps{
    onClickHandler(lightness:Lightness): any
}

export default function LightnessSelector(props:ILightnessSelectorProps) {
  return (
    <Card cssClass="my-5 fixed right-4 top-2 flex flex-col rounded-full bg-white">
        <Button content="🌙" type="button" shape={ Border.circle } cssClass="bg-slate-600 text-white mb-4 hover:bg-slate-400" onClickHandler={() => props.onClickHandler(Lightness.dark)} />
        <Button content="⛅" type="button" shape={ Border.circle } cssClass="bg-slate-500 text-white mb-4 hover:bg-slate-300" onClickHandler={() => props.onClickHandler(Lightness.normal)} />
        <Button content="🌞" type="button" shape={ Border.circle } cssClass="bg-slate-400 text-white hover:bg-slate-200" onClickHandler={() => props.onClickHandler(Lightness.light)} />
    </Card>
  )
}

