export default function NewsCard({ newsData }) {
    return (
        <>
            <div className="m-6 border-2 border-white">
                <img src={newsData.image_url}/>
                <h2 className="text-2xl font-bold">{newsData.title}</h2>
                <p>{newsData.summary}</p>
                <a href={newsData.url} target="_blank"><span className="text-blue-300">Read more...</span></a>
                <p className="text-sm text-gray-400">Published {Date(newsData.published_at)}</p>
            </div>
        </>
    )
}