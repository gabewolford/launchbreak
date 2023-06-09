import { Helmet } from "react-helmet"

export default function NewsPage({ newsList }) {

    return (
        <div className="mx-6 md:mx-12 lg:max-w-[75vw] lg:mx-auto">
            <Helmet>
                <title>Launchbreak | News</title>
            </Helmet>
            <h1 className="mt-6 mb-12 text-3xl font-bold text-white">All News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-10">
                {newsList}
            </div>
        </div>
    )
}