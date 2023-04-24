import { useState, useEffect } from 'react'
import { getData } from '../../../utils/api'

export default function LaunchDetailsPage({ detailPageId }) {
    const [launchDetails, setLaunchDetails] = useState({})
    
    useEffect(() => {
            getData(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${detailPageId}`)
            .then(res => {
                setLaunchDetails(res)
            })
    }, [])

    let page = <p>Loading launch data...</p>
    if (launchDetails) {
        page = <p>{launchDetails.name}</p>
    }


    return (
        <>
            {page}
        </>
    )
}