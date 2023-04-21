import { Routes, Route } from "react-router-dom"

import Header from "../Header"
import Footer from "../Footer"
import HomePage from '../HomePage'
import LaunchesPage from "../LaunchesPage"
import NewsPage from "../NewsPage"
import AgenciesPage from "../AgenciesPage"
import AstronautsPage from "../AstronautsPage"
import SpacecraftPage from "../SpacecraftPage"
import AccountPage from "../AccountPage"
import NotFoundPage from '../NotFoundPage'

import './styles.css'


function App() {

  return (
    <>
      <Header />

      <Footer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<LaunchesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/agencies" element={<AgenciesPage />} />
        <Route path="/astronauts" element={<AstronautsPage />} />
        <Route path="/spacecraft" element={<SpacecraftPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
