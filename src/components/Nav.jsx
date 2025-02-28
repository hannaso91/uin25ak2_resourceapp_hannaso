import { Link } from "react-router-dom"
import resources from "../assets/resources"
import "../styles/nav.scss"

export default function Nav() {

    const categories = []; //lager en tom array for å legge til kategorier, da kan jeg også sjekke om det eksisterer fra før

    resources.map((resource) => {
        if (!categories.includes(resource.category)) { //her sjekker jeg om kategorien allerede eksisterer i arrayen, så dersom den IKKE inneholder så pushes den inn
            categories.push(resource.category); //pusher kategorien inn i den tomme arrayen jeg har opprettet
        }
    })

    return(
        <header>
            <nav>
                <ul className="navmenu">
                    {categories.map(cat =>
                        <button key={cat}>
                            <Link to={`/category/${cat}`}>{cat}</Link>
                        </button>
                    )}
                </ul>
            </nav>
        </header>
    )
}