import { Lightness } from "./colorHelper";

export const getLightNessText = (light:Lightness):string =>{
  switch(light){
    case Lightness.dark:
      return "dark";
    case Lightness.normal:
      return "normal";
    case Lightness.light:
      return "light"
  }
}  