import { useState, useEffect } from 'react'
import { getData } from '../../../utils/api'

export default function AstronautDetailsPage({ astronautData, updateDetails, detailPageId }) {
    
    useEffect(() => {
        if (!astronautData) {
            getData(`https://lldev.thespacedevs.com/2.2.0/astronaut/${detailPageId}`)
                .then(res => updateDetails(res))
        }
    }, [])

    

    let page = <p>Loading astronaut data...</p>
    if (astronautData) {
        page = <div className="border-2 border-white m-6">
                    <h1 className="text-2xl">{astronautData.name}</h1>
                    <img src={astronautData.profile_image} />
                    <p>Born: {astronautData.date_of_birth}</p>
                    <p>Nationality: {astronautData.nationality}</p>
                    <p>Agency: {astronautData.agency.name}</p>
                    <br/>
                    <p>{astronautData.bio}</p>
                    <br/>
    
                </div>
    }


    return (
        <>
            {page}
        </>
    )
}