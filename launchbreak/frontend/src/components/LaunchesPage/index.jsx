export default function LaunchesPage({ upcomingLaunches }) {
    return (
        <>
            <h1 className="ml-6 mt-6 text-xl font-bold">Upcoming Launches:</h1>
            <div className="grid grid-cols-1">
                {upcomingLaunches}
            </div>
        </>
    )
}