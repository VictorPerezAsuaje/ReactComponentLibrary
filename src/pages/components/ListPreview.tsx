import List from "../../components/Atoms/List/List";
import { ListItemProps } from "../../components/Atoms/List/ListItem";
import { useState } from "react"
import Heading, { HeadingType } from "../../components/Atoms/Heading/Heading";


export default function ListPreview() {
  const listPreview:ListItemProps[] = [
    {content: "Administration", iconSrc: "https://www.svgrepo.com/show/332992/database.svg" },
    {content: "E-Commerce", iconSrc: "https://www.svgrepo.com/show/25775/ecommerce.svg" },
    {content: "Content Management", iconSrc: "https://www.svgrepo.com/show/331846/copy.svg" },
    {content: "Profile", iconSrc: "https://www.svgrepo.com/show/333287/profile.svg" },
  ]

  const [listItems, setListItems] = useState(listPreview);
  const [useIcons, setUseIcons] = useState(true);

  const onCheckUseIcons = () => {
    setUseIcons(useIcons => !useIcons);
    const arr = modifyItemList();
    setListItems(arr);
  }

  const modifyItemList = ():ListItemProps[] => {
    return listPreview.map((item) => {
      const obj = useIcons ? { content: item.content, iconSrc: item.iconSrc } : { content: item.content }; 
      return obj;
    });
  }
  
  return (
    <div className="shadow-md p-10">
      <Heading type={HeadingType.h3} content="Interactive Demo"  />
      <hr />
      <div className="flex mt-5">
        <div className="flex flex-1 flex-col justify-center">
          <div className="pl-5">
            <input id="checkboxIcons" name="checkboxIcons" type="checkbox" checked={useIcons} onChange={() => onCheckUseIcons()} />
            <label htmlFor="checkboxIcons" className="ml-3">Use icons</label>
          </div>        
        </div>
        <List listItems={modifyItemList()} listCssClass="flex-1 my-3" />
      </div>
    </div>
  )
}

