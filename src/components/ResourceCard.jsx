import { Link, useParams } from "react-router-dom";
import resources from "../assets/resources.js";
import "../styles/ResourceCard.scss"
import PageTitle from "./PageTitle.jsx";

export default function ResourceCard() {

    const {slug} = useParams()
    const filteredResources = resources.filter((resource) => resource.category === slug )

    return (
    <>
        {filteredResources.map((resource) => (
            <>
            <PageTitle />
            <article className="ressurser" key={resource.id}>
                <h3>{resource.title}</h3>
                <ul>
                    <li>
                        <Link to={resource.url}>Les mer her</Link>
                    </li>
                </ul>
                
            </article>
            </>
        ))}
    </>
  );
}