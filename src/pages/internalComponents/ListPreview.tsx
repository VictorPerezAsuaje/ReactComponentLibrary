import List from "../../components/Atoms/List/List";
import { ListItem, IListItemProps } from "../../components/Atoms/List/ListItem";
import { useState } from "react"
import Heading, { HeadingType } from "../../components/Atoms/Heading/Heading";
import Code from "./Code";
import Card from "../../components/Molecules/Card/Card";

const listPreview:IListItemProps[] = [
  {content: "Administration", iconSrc: "https://www.svgrepo.com/show/332992/database.svg" },
  {content: "E-Commerce", iconSrc: "https://www.svgrepo.com/show/25775/ecommerce.svg" },
  {content: "Content Management", iconSrc: "https://www.svgrepo.com/show/331846/copy.svg" },
  {content: "Profile", iconSrc: "https://www.svgrepo.com/show/333287/profile.svg" },
]

const exampleCode = `export interface IListItemProps{
  content:string,
  itemCssClass?:string,
  iconSrc?:string,
}

export function ListItem(props: ListItemProps) {
  const {content, itemCssClass, iconSrc } = props;

  return (
  <li className={itemCssClass + (iconSrc === undefined ? "" : " flex flex-row items-center mb-3")}>
      {iconSrc === undefined ? "" : <img src={iconSrc} alt="" className="mr-3 w-8" /> }
      {content}
  </li>);
}
`



export default function ListPreview() {
  const [useIcons, setUseIcons] = useState(true);
  const [useCards, setUseCards] = useState(false);
  const [color, setColor] = useState("#000");
  const [verticalSpacing, setVerticalSpacing] = useState("0");
  const [unit, setUnit] = useState("rem");

  const onCheckUseIcons = () => {
    setUseIcons(useIcons => !useIcons);
  }

  const onCheckUseCards = () => {
    setUseCards(useCards => !useCards);
  }

  const onChangeTextColor = (newColor:string) => {
    setColor(newColor);
  }

  const onChangeVerticalSpacing = (newVerticalSpacing:string) => {
    setVerticalSpacing(newVerticalSpacing);
  }

  const onChangeUnit = (newUnit:string) => {
    setUnit(newUnit);
  }

  const getItemList = () => {
    const arr = listPreview.map((item) =>{
      let obj;
  
      if(useCards)
        obj = <Card key={`card_${item.content}`} cssClass="flex flex-row items-center w-64" extraStyle={{ marginBottom: `${verticalSpacing}${unit}` }}><ListItem content={item.content} iconSrc={useIcons ? item.iconSrc : undefined} extraStyle={{ color: color }} /></Card>
      else
        obj = <ListItem content={item.content} iconSrc={useIcons ? item.iconSrc : undefined} extraStyle={{ color: color,  marginBottom: `${verticalSpacing}${unit}`}}  />
  
      return obj;
    });
  
    return arr;
  }

  return (
    <div className="shadow-md p-10 my-10">
      <Heading type={HeadingType.h3} content="INTERACTIVE DEMO"  />
      <hr />
      <div className="flex mt-5">
        <div className="flex flex-1 flex-col">
          <div className="ml-5 my-3">
            <input id="checkboxIcons" name="checkboxIcons" type="checkbox" checked={useIcons} onChange={() => onCheckUseIcons()} />
            <label htmlFor="checkboxIcons" className="ml-3">Use icons</label>
          </div>        
          <div className="ml-5 my-3">
            <input id="checkboxCards" name="checkboxCards" type="checkbox" checked={useCards} onChange={() => onCheckUseCards()} />
            <label htmlFor="checkboxCards" className="ml-3">Use card styling</label>
          </div>        
          <div className="ml-5 my-3 flex flex-row ">
            <label htmlFor="selectColor">Text color</label>
            <input id="selectColor" name="selectColor" type="color" value={color} onChange={(e) => onChangeTextColor(e.target.value)} className="ml-3" />
          </div>  
          <div className="ml-5 my-3 flex flex-row ">
            <label htmlFor="selectVerticalSpacing">Vertical spacing</label>
            <input id="selectVerticalSpacing" name="selectVerticalSpacing" type="range" value={verticalSpacing} onChange={(e) => onChangeVerticalSpacing(e.target.value)} className="ml-3" min="0" max="10" />
            <select id="selectUnit" onChange={(e) => onChangeUnit(e.target.value)}>
              <option value="rem" selected>rem</option>
              <option value="px">px</option>
              <option value="em">em</option>
            </select>
          </div>      
        </div>
        <List cssClass="flex-1 my-3">{getItemList()}</List>
      </div>
      <hr className="my-5" />
      <Code language="javascript" content={exampleCode} />
    </div>
  )
}

