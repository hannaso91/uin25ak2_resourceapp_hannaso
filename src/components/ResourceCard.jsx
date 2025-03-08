import { Link } from "react-router-dom";
import resources from "../assets/resources.js";
import PageTitle from "./PageTitle.jsx";

export default function ResourceCard({category}) {

    //Her filtrer jeg alt som ligger i resources js filen. Det blir sammenlignet mot propen som blir sendt fra app.
    //når disse er like blir de lagret i en ny "array" som har variabelnavn resource
    const filteredResources = resources.filter((resource) => resource.category === category )
    //Finner ut i konsollen at dette fungerer som det skal
    console.log(filteredResources)

    return (
    <>
        {/*Henter inn komponentet pagetitle og sender en prop til pagetitle som skal holde på hovedoverskriften på siden*/}
        <PageTitle heading={filteredResources[0].category}/>
        {/*Mapper her igjennom det som er filtrert for å kunne skrive det ut på siden
        Alle delene vil da bli laget som hver sin article med innholdet definert under og hentet ut av ressursene*/}
        {filteredResources.map((resource) => (
            <article className="whiteContainer" key={resource.id}>
                <h3 className="headtext">{resource.title}</h3>
                <ul>
                    <li>
                        <Link to={resource.url}>Les mer her</Link>
                    </li>
                </ul>
            </article>
        ))}
    </>
  );
}