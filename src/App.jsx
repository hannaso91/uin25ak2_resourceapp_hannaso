import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import "./styles/style.scss"
import Resources from './components/Resources'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          {/*Jeg lagde først slug, men endret til det oppgaven krevde selvom slug fungerte
          setter html to ganger slik at home også er html så det er default*/}
          <Route path="/" element={<Resources category={"html"} />} />
          <Route path="/html" element={<Resources category={"html"} />} />
          <Route path="/css" element={<Resources category={"css"} />} />
          <Route path="/javascript" element={<Resources category={"javascript"} />} />
          <Route path="/react" element={<Resources category={"react"} />} />
          <Route path="/headless-cms" element={<Resources category={"headless-cms"} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
