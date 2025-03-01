import Nav from "./nav";
import ResourceCard from "./ResourceCard";

export default function Layout({children}) {
    return (
        
        <div id="designcontainer"> 
            <Nav />
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
        
    )
}