import Nav from "./nav";
import ResourceCard from "./ResourceCard";

export default function({children}) {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <footer>
                
            </footer>
        </>
    )
}