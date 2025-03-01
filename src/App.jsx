import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ResourceCard from './components/ResourceCard'
import Layout from './components/Layout'
import "./styles/body.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/category/:slug" element={<ResourceCard/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
