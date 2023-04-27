

export default function NewsPage({ newsList }) {

    return (
        <>
        <div className="lg:mx-12">
            <h1 className="text-3xl font-bold text-white m-6">Recent News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-6 gap-10">
                {newsList}
            </div>
        </div>
            
        </>
    )
}