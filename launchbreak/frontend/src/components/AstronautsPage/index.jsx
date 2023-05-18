import { Helmet } from "react-helmet"

export default function AstronautsPage({ astronautList }) {

    return (
        <>
        <div className="mx-6 md:mx-12 lg:w-[70vw] lg:mx-auto">
            <Helmet>
                <title>Launchbreak | Astronauts</title>
            </Helmet>
            <h1 className="mt-6 mb-12 text-3xl font-bold text-white">Astronauts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 lg:w-[70vw] mx-auto">
                    {astronautList}
                </div>
        </div>
        </>
    )
}

