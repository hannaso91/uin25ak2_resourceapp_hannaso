import PageTitle from "./PageTitle";

export default function PageContent() {

    const [title, setTitle] = useState("HTML")

    return(
        <main>
            <PageTitle title={title}/>
        </main>
    )
}