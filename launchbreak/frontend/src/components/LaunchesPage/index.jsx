import { useState, useEffect } from "react"
import { getLaunches } from "../../../utils/api"
import LaunchCard from "../LaunchCard"

export default function LaunchesPage() {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        getLaunches('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/')
            .then(res => {
                setLaunches(res.results)
            })
    }, [])


    let upcomingLaunches = <p className="text-white">Retrieving upcoming launch data...</p>

    if (launches.length > 0) {
        upcomingLaunches = launches.map((launch, i) => <LaunchCard key={i} launchData={launch} />)
    } 

    return (
        <>
            {upcomingLaunches}
        </>
    )
}