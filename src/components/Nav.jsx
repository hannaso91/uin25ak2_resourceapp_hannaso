import { Link } from "react-router-dom"
import resources from "../assets/resources"
import "../styles/nav.scss"

export default function Nav() {

    const categories = []; //lager en tom array for å legge til kategorier, da kan jeg også sjekke om det eksisterer fra før
    //jeg ønsket å lage min navbar dynamisk, slik at det senere er enkelt å fikse på dersom det kommer mer

    resources.map((resource) => {
        if (!categories.includes(resource.category)) { //her sjekker jeg om kategorien allerede eksisterer i arrayen, så dersom den IKKE inneholder så pushes den inn
            categories.push(resource.category); //pusher kategorien inn i den tomme arrayen jeg har opprettet
        }
    })

    return(
        <header>
            <nav>
                {/*Under her mapper jeg ut det som har blitt pushet inn i categories arrayen min, slik at jeg får en fungerende navigasjonsbar på siden min*/}
                <ul className="navmenu">
                    {categories.map(cat =>
                        <li key={cat}>
                            <Link to={`/${cat}`}>{cat}</Link> 
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}