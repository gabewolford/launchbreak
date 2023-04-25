export default function LaunchesPage({ upcomingLaunches }) {
    return (
        <>
        <div className="lg:mx-12">
            <h1 className="ml-6 mt-6 text-3xl font-bold">Upcoming Launches</h1>
                <div className="grid grid-cols-1">
                    {upcomingLaunches}
                </div>
        </div>
        </>
    )
}