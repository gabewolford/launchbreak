import { Routes, Route } from "react-router-dom"

import Navbar from "../Navbar"
import HomePage from '../HomePage'
import NotFoundPage from '../NotFoundPage'

import './styles.css'


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
