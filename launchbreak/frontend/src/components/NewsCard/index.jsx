import { Link } from "react-router-dom"

export default function NewsCard({ newsData }) {
    return (
        <Link id="news-card" className="bg-gray-500 rounded-lg cursor-auto">
                <h2 className="text-2xl p-3 font-bold">{newsData.title}</h2>
                <img src={newsData.image_url} alt="Article image" className=""/>
                <div className="px-3 pb-3">
                    
                    <p className="text-xs text-blue-300 pt-2 mb-3">Published {new Date(newsData.published_at).toLocaleString()}</p>
                    <p className="mb-4">{newsData.summary}</p>
                    <div className="mb-1 text-left">
                        <a href={newsData.url} target="_blank">
                            <span className="font-bold bg-blue-900 hover:bg-blue-800 text-md py-1 px-2 rounded">Read More</span>
                        </a>
                    </div>
                </div>
        </Link>
    )
}