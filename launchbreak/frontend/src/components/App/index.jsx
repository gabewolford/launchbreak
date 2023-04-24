import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { getData } from "../../../utils/api"
import Head from "../Head"
import HomePage from '../HomePage'
import LaunchesPage from "../LaunchesPage"
import LaunchCard from "../LaunchCard"
import LaunchDetailsPage from "../LaunchDetailsPage"
import NewsPage from "../NewsPage"
import AgenciesPage from "../AgenciesPage"
import AstronautsPage from "../AstronautsPage"
import SpacecraftPage from "../SpacecraftPage"
import AccountPage from "../AccountPage"
import NotFoundPage from '../NotFoundPage'
import './styles.css'


function App() {
  const [launches, setLaunches] = useState([])
  const [detailPageId , setDetailPageId] = useState(null)

  useEffect(() => {
      getData('https://lldev.thespacedevs.com/2.2.0/launch/upcoming')
          .then(res => {
              setLaunches(res.results)
          })
  }, [])

  let upcomingLaunches = <p>Loading upcoming launches...</p>

  if (launches.length > 0) {
      upcomingLaunches = launches.map((launch, i) => <LaunchCard key={i} launchData={launch} setDetailPageId={setDetailPageId}/>)
  } 


  return (
    <>
      <Head />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<LaunchesPage upcomingLaunches={upcomingLaunches} setDetailPageId={setDetailPageId}/>} />
        <Route path="/launch/:slug" element={<LaunchDetailsPage detailPageId={detailPageId} />}/>
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
