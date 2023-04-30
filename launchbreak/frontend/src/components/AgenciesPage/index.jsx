export default function AgenciesPage({ agencyList }) {
    return (
        <>
            <div className="mx-12 lg:max-w-[75vw] lg:mx-auto">
                <h1 className="mt-6 mb-12 text-3xl font-bold text-white">Featured Agencies</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
                        {agencyList}
                    </div>
            </div>
        </>
    )
}