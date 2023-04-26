export default function NewsCard({ newsData }) {
    return (
        <>
            <div className="bg-gray-500">
                <img src={newsData.image_url}/>
                <div className="p-3">
                    <h2 className="text-2xl font-bold pt-3">{newsData.title}</h2>
                    <p className="text-xs text-blue-300 pt-2 mb-3">Published {new Date(newsData.published_at).toLocaleString()}</p>
                    <p className="mb-5">{newsData.summary}</p>
                    <a href={newsData.url} target="_blank">
                        <span className="font-bold bg-blue-900 hover:bg-blue-800 text-sm py-1 px-2 rounded">Read More</span>
                    </a>
                    
                </div>
                
            </div>
        </>
    )
}