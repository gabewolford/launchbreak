import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { getData } from "../../../utils/api"
import AuthFormPage from '../AuthFormPage'
import Head from "../Head"
import HomePage from '../HomePage'
import LaunchesPage from "../LaunchesPage"
import LaunchCard from "../LaunchCard"
import LaunchDetailsPage from "../LaunchDetailsPage"
import NewsPage from "../NewsPage"
import NewsCard from "../NewsCard"
import AgenciesPage from "../AgenciesPage"
import AgencyDetailsPage from "../AgencyDetailsPage"
import AgencyCard from "../AgencyCard"
import AstronautCard from "../AstronautCard"
import AstronautDetailsPage from "../AstronautDetailsPage"
import AstronautsPage from "../AstronautsPage"
import SpacecraftPage from "../SpacecraftPage"
import SpacecraftCard from "../SpacecraftCard"
import AccountPage from "../AccountPage"
import NotFoundPage from '../NotFoundPage'
import './styles.css'


function App() {
  const [launches, setLaunches] = useState([])
  const [detailPageId , setDetailPageId] = useState(null)
  const [news, setNews] = useState([])
  const [agencies, setAgencies] = useState([])
  const [spacecrafts, setSpacecraft] = useState([])
  const [astronauts, setAstronauts] = useState([])
  const [detailPage, setDetailPage] = useState()


  useEffect(() => {
    getData('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=100')
      .then(res => {
        setLaunches(res.results)
    })
    getData('https://api.spaceflightnewsapi.net/v4/articles/')
      .then(res => {
        setNews(res.results)
    })
    getData('https://lldev.thespacedevs.com/2.2.0/agencies/?featured=true')
      .then(res => {
        setAgencies(res.results)
    })
    getData('https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=100')
      .then(res => {
        setSpacecraft(res.results)
    })
    getData('https://lldev.thespacedevs.com/2.2.0/astronaut/?order=id&limit=100')
      .then(res => {
        setAstronauts(res.results)
    })
  }, [])


    let upcomingLaunches
    if (launches.length > 0) {
        upcomingLaunches = launches
          .map((launch, i) => <LaunchCard key={i} launchData={launch} setDetailPageId={setDetailPageId}/>)
    } 


    let newsList
    if (news.length > 0) {
        newsList = news
          .map((news, i) => <NewsCard key={i} newsData={news} />)
    } 


    let agencyList
    if (agencies.length > 0) {
        agencyList = agencies
          .map((agency, i) => <AgencyCard key={i} agencyData={agency} setDetailPageId={setDetailPageId}/>)
    } 


    let spacecraftList
    if (spacecrafts.length > 0) {
        spacecraftList = spacecrafts
          .map((spacecraft, i) => <SpacecraftCard key={i} spacecraftData={spacecraft} setDetailPageId={setDetailPageId}/>)
    } 


    let astronautList
    if (astronauts.length > 0) {
        astronautList = astronauts
          .map((astronaut, i) => <AstronautCard key={i} astronautData={astronaut} setDetailPageId={setDetailPageId} />)
    } 

  return (
    <>
      <Head />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/:formType" element={<AuthFormPage />} />
        <Route path="/launches" element={<LaunchesPage upcomingLaunches={upcomingLaunches} setDetailPageId={setDetailPageId}/>} />
        <Route path="/launch/:slug" element={<LaunchDetailsPage launchData={detailPage} updateDetails={setDetailPage} detailPageId={detailPageId} />}/>
        <Route path="/news" element={<NewsPage newsList={newsList}/>} />
        <Route path="/agencies" element={<AgenciesPage agencyList={agencyList}/>} />
        <Route path="/agencies/:id" element={<AgencyDetailsPage agencyData={detailPage} updateDetails={setDetailPage} detailPageId={detailPageId}/>} />
        <Route path="/astronauts" element={<AstronautsPage astronautList={astronautList} setDetailPageId={setDetailPageId}/>} />
        <Route path="/astronaut/:id" element={<AstronautDetailsPage astronautData={detailPage} updateDetails={setDetailPage} detailPageId={detailPageId}/>} />
        <Route path="/spacecraft" element={<SpacecraftPage spacecraftList={spacecraftList}/>} />
        <Route path="/spacecraft/:id" element={<AgenciesPage spacecraftList={spacecraftList} updateDetails={setDetailPage} detailPageId={detailPageId}/>} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
