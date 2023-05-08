export default function LaunchesPage({ upcomingLaunches, setAuthenticated }) {
    setAuthenticated(localStorage.getItem('userToken') ? true : false)

    return (
        <>
            <div className="mx-6 md:mx-12 lg:w-[70vw] lg:mx-auto">
                <h1 className="mt-6 mb-12 text-3xl font-bold text-white">Upcoming Launches</h1>
                    <div className="grid grid-cols-1 lg:w-[70vw] mx-auto">
                        {upcomingLaunches}
                    </div>
            </div>
        </>
    )
}