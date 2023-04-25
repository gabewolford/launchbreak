import { useState, useEffect } from 'react'
import { getData } from '../../../utils/api'

export default function AstronautDetailsPage({ detailPageId }) {
    const [astronautDetails, setAstronautDetails] = useState({})
    
    useEffect(() => {
            getData(`https://lldev.thespacedevs.com/2.2.0/astronaut/${detailPageId}`)
                .then(res => {
                    setAstronautDetails(res)
                    console.log(res)
                })
    }, [])

    

    let page = <p>Loading astronaut data...</p>
    if (astronautDetails) {
        page = <div className="border-2 border-white m-6">
                    <h1 className="text-2xl">{astronautDetails.name}</h1>
                    <img src={astronautDetails.profile_image} />
                    <p>Born: {astronautDetails.date_of_birth}</p>
                    <p>Nationality: {astronautDetails.nationality}</p>
                    <p>Agency: {astronautDetails.agency.name}</p>
                    <br/>
                    <p>{astronautDetails.bio}</p>
                    <br/>
    
                </div>
    }


    return (
        <>
            {page}
        </>
    )
}