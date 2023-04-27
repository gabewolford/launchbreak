

export default function NewsPage({ newsList }) {

    return (
        <div className="mx-12">
            <h1 className="mt-6 mb-12 text-3xl font-bold text-white">Recent News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:w-[70vw] mx-auto gap-10">
                {newsList}
            </div>
        </div>
    )
}