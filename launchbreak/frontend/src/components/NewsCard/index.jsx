export default function NewsCard({ newsData }) {
    return (
        <>
            <div className="m-6">
                <p className="text-white">{newsData.title}</p>
            </div>
        </>
    )
}