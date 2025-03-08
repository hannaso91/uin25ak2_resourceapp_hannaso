import { Link, useNavigate } from "react-router-dom"
import resources from "../assets/resources"


export default function Nav() {

    const navigate = useNavigate()

    const categories = []; //lager en tom array for å legge til kategorier, da kan jeg også sjekke om det eksisterer fra før
    //jeg ønsket å lage min navbar dynamisk, slik at det senere er enkelt å fikse på dersom det kommer mer

    resources.map((resource) => {
        if (!categories.includes(resource.category)) { //her sjekker jeg om kategorien allerede eksisterer i arrayen, så dersom den IKKE inneholder så pushes den inn
            categories.push(resource.category); //pusher kategorien inn i den tomme arrayen jeg har opprettet
        }
    })

    const handleClick = (category) => {
        navigate(`/${category}`)
    }

    return(
        <header className="navmenu">
            {/*Under her mapper jeg ut det som har blitt pushet inn i categories arrayen min, slik at jeg får en fungerende navigasjonsbar på siden min*/}
                {categories.map(cat =>
                    <button key={cat} onClick={() => handleClick(cat)}>{cat}</button>      
                )}
        </header>
    )

    console.log(categories)
}