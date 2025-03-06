import './App.css'
import { Route, Routes } from 'react-router-dom'
import ResourceCard from './components/ResourceCard'
import Layout from './components/Layout'
import "./styles/body.scss"

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/html" element={<ResourceCard category={"html"} />} />
          <Route path="/css" element={<ResourceCard category={"css"} />} />
          <Route path="/javascript" element={<ResourceCard category={"javascript"} />} />
          <Route path="/react" element={<ResourceCard category={"react"} />} />
          <Route path="/headless-cms" element={<ResourceCard category={"headless-cms"} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
