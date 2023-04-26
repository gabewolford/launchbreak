import { useEffect } from 'react'
import { getData } from '../../../utils/api'
import LoadingSpinner from '../LoadingSpinner'

export default function AstronautDetailsPage({ astronautData, updateDetails, detailPageId }) {
    
    useEffect(() => {
        getData(`https://lldev.thespacedevs.com/2.2.0/astronaut/${detailPageId}`)
            .then(res => updateDetails(res))
    }, [])
    
    let page = <LoadingSpinner/>

    if (astronautData && astronautData.id === detailPageId) {
        page = <div className="flex mx-12 mt-12">
                    <div className="flex-1 flex">
                        <img src={astronautData.profile_image} className="w-full" />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="bg-gray-600 flex-1 p-3">
                            <h1 className="text-xl lg:text-2xl font-bold pb-1">{astronautData.name}</h1>
                            {astronautData.status.name === 'Active' && <span className="text-xs bg-green-500 bg-opacity-75 rounded px-2 py-0.5">{astronautData.status.name}</span>}
                            {astronautData.status.name === 'Retired' && <span className="text-xs bg-red-500 bg-opacity-75 rounded px-2 py-0.5">{astronautData.status.name}</span>}
                            <p className="text-sm mt-3">Nationality: {astronautData.nationality}</p>
                            <p className="text-sm">Age: {astronautData.age}</p>
                            <p className="text-sm">Born: {new Date(astronautData.date_of_birth).toLocaleDateString()}</p>

                        </div>
                        <div className="flex-1 bg-gray-400 relative p-3">
                            
                            <p className="mb-2">Flights: {astronautData.flights_count}</p>
                            <p className="text-sm">First Flight: {new Date(astronautData.first_flight).toLocaleDateString()}</p>
                            <p className="text-sm">Last Flight: {new Date(astronautData.last_flight).toLocaleDateString()}</p>

                        </div>
                    </div>
                </div>
    }


    return (
        <>
            {page}
        </>
    )
}