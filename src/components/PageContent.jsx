import PageTitle from "./PageTitle";

export default function PageContent({title}) {

    const [title, setTitle] = useState("HTML")

    return(
        <main>
            <PageTitle title={title}/>
        </main>
    )
}