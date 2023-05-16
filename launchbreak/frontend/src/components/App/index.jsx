import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { getData } from "../../../utils/api"
import AuthFormPage from '../AuthFormPage'
import Head from "../Head"
import HomePage from '../HomePage'
import LaunchesPage from "../LaunchesPage"
import NextLaunchCard from "../NextLaunchCard"
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
import SpacecraftDetailsPage from "../SpacecraftDetailsPage"
import SpacecraftCard from "../SpacecraftCard"
import AccountPage from "../AccountPage"
import NotFoundPage from '../NotFoundPage'
import './styles.css'
import ScrollToTop from "../ScrollToTop"


function App() {
  const [launches, setLaunches] = useState([])
  const [nextLaunch, setNextLaunch] = useState([])
  const [recentNews, setRecentNews] = useState([])
  const [news, setNews] = useState([])
  const [agencies, setAgencies] = useState([])
  const [spacecrafts, setSpacecraft] = useState([])
  const [astronauts, setAstronauts] = useState([])
  const [detailPage, setDetailPage] = useState()
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('userToken') ? true : false)


  useEffect(() => {
    getData('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=1')
      .then(res => {
        setNextLaunch(res.results)
    })

    getData('https://api.spaceflightnewsapi.net/v4/articles/')
      .then(res => {
        setNews(res.results)
    })

    getData('https://api.spaceflightnewsapi.net/v4/articles/?limit=4')
      .then(res => {
        setRecentNews(res.results)
    })

    getData('https://ll.thespacedevs.com/2.2.0/agencies/?featured=true')
      .then(res => {
        setAgencies(res.results)
    })

    getData('https://ll.thespacedevs.com/2.2.0/spacecraft/?limit=50')
      .then(res => {
        setSpacecraft(res.results)
    })

    getData('https://ll.thespacedevs.com/2.2.0/astronaut/?order=id&limit=100')
      .then(res => {
        setAstronauts(res.results)
    })

    setAuthenticated(localStorage.getItem('userToken') ? true : false)
      }, [])


    let nextLaunches
    if (nextLaunch.length > 0) {
        nextLaunches = nextLaunch
          .map((launch, i) => <NextLaunchCard key={i} launchData={launch} setDetailPage={setDetailPage}/>)
    } 

    let newsList
    if (news.length > 0) {
        newsList = news
          .map((news, i) => <NewsCard key={i} newsData={news} />)
    } 

    let recentNewsList
    if (recentNews.length > 0) {
        recentNewsList = recentNews
          .map((news, i) => <NewsCard key={i} newsData={news} />)
    } 


    let agencyList
    if (agencies.length > 0) {
        agencyList = agencies
          .map((agency, i) => <AgencyCard key={i} agencyData={agency} setDetailPage={setDetailPage}/>)
    } 


    let spacecraftList
    if (spacecrafts.length > 0) {
        spacecraftList = spacecrafts
          .map((spacecraft, i) => <SpacecraftCard key={i} spacecraftData={spacecraft} setDetailPage={setDetailPage}/>)
    } 


    let astronautList
    if (astronauts.length > 0) {
        astronautList = astronauts
          .map((astronaut, i) => <AstronautCard key={i} astronautData={astronaut} setDetailPage={setDetailPage}/>)
    } 

  return (
    <>
      <Head authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage launchData={nextLaunches} recentNewsData={recentNewsList} setDetailPage={setDetailPage} />} />
        <Route path="/auth/:formType" element={<AuthFormPage authenticated={authenticated} setAuthenticated={setAuthenticated}/>} />
        <Route path="/launches" element={<LaunchesPage launches={launches} setLaunches={setLaunches} setDetailPage={setDetailPage} setAuthenticated={setAuthenticated} />} />
        <Route path="/launch/:id" element={<LaunchDetailsPage launchData={detailPage} setDetailPage={setDetailPage} authenticated={authenticated} />}/>
        <Route path="/news" element={<NewsPage newsList={newsList}/>} />
        <Route path="/agencies" element={<AgenciesPage agencyList={agencyList}/>} />
        <Route path="/agencies/:id" element={<AgencyDetailsPage agencyData={detailPage} setDetailPage={setDetailPage} />} />
        <Route path="/astronauts" element={<AstronautsPage astronautList={astronautList} />} />
        <Route path="/astronaut/:id" element={<AstronautDetailsPage astronautData={detailPage} setDetailPage={setDetailPage} />} />
        <Route path="/spacecraft" element={<SpacecraftPage spacecraftList={spacecraftList}/>} />
        <Route path="/spacecraft/:id" element={<SpacecraftDetailsPage spacecraftData={detailPage} setDetailPage={setDetailPage} />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
