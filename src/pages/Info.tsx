import Heading, { HeadingType } from "../components/Atoms/Heading/Heading"
import List from "../components/Atoms/List/List"
import { ListItem } from "../components/Atoms/List/ListItem";
import ListPreview from "./internalComponents/ListPreview";
import TailwindCssConfig from "./internalComponents/TailwindCssConfig";


export default function Info() {
  const librariesUsed = ["React v18.2.0", "React Dom v18.2.0", "React Router Dom v6.3.0", "React Scripts v5.0.1", "Typescript 4.7.4", "React Chartsjs 2 v4.3.1", "Chart.js v3.8.2", "TailwindCSS v3.1.6"]

  return (
    <article>
      <Heading content="General information" type={HeadingType.h1} />
      <p>This project intended to help me both learn React with Typescript and serve as a repository of components to use in future projects.</p>
      <p>The whole project is built using the following libraries: </p>
      <List>{ librariesUsed.map(item => <ListItem key={item} content={item} />) }</List>
      <p>So, in case you are interested in using or copying any of these components, you should be aware that you may need to install those dependencies or adapt the code. Also, I will do my best to make interactive components however, you will be able to see the code for certain components as follows:</p>
      <ListPreview /> 
      <TailwindCssConfig />     
    </article>
  )
}