import { useState, useEffect } from "react"
import { getData } from "../../../utils/api"
import NewsCard from "../NewsCard"


export default function NewsPage() {
    const [news, setNews] = useState([])

    useEffect(() => {
        getData('https://api.spaceflightnewsapi.net/v4/articles/')
            .then(res => {
                setNews(res.results)
            })
    }, [])


    let newsList = <p className="text-white">Retrieving news data...</p>

    if (news.length > 0) {
        newsList = news.map((news, i) => <NewsCard key={i} newsData={news} />)
    } 

    return (
        <>
            <div className="">
                {newsList}
            </div>
            
        </>
    )
}