import { Link } from "react-router-dom"
import resources from "../assets/resources"

export default function Nav() {

    const categories = []; //lager en tom array for å legge til kategorier, da kan jeg også sjekke om det eksisterer fra før

    resources.map((resource) => {
        if (!categories.includes(resource.category)) { //her sjekker jeg om kategorien allerede eksisterer i arrayen, så dersom den IKKE inneholder så pushes den inn
            categories.push(resource.category); //pusher kategorien inn i den tomme arrayen jeg har opprettet
        }
    })

    return(
        <nav>
            <ul>
                {categories.map(cat =>
                    <li key={cat}>
                        <Link to={`/category/${cat}`}>{cat}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}