export default function NewsCard({ newsData }) {
    return (
        <>
            <div className="m-6">
                <p>{newsData.title}</p>
            </div>
        </>
    )
}