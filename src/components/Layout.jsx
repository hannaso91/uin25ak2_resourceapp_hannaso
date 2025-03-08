import Nav from "./nav";

//I oppgaven stod det at jeg skulle bruke html fra arbeidskrav 1 og legge inn i Layout. 
//etter å ha pratet med Tore Marius var det helt greit å gjøre det dynamisk som dette istedet.
export default function Layout({children}) {
    return (
        <div id="designcontainer"> 
            {/*Henter inn nav komponentet slik at det kan bli rendret ut korrekt i forhold til HTML strukturen*/}
            <Nav />
            <main>
                {/*Henter inn children slik at det som blir rendret ut legger seg inn her som barneelement av main*/}
                {children}
            </main>
            <footer>
                Ressursarkiv
            </footer>
        </div>
        
    )
}