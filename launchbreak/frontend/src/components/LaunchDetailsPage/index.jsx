import { useState, useEffect } from 'react'
import { getData } from '../../../utils/api'

export default function LaunchDetailsPage({ launchData, updateDetails, detailPageId }) {
    
    useEffect(() => {
        getData(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${detailPageId}`)
            .then(res => {
                updateDetails(res)
        })
    }, [])

    let page = <p>Loading launch details...</p>
    if (launchData) {
        page = <>
                <div className='m-6 max-h-fit max-w-fit'>
                    <h1 className='text-xl mb-4'>Launch Details:</h1>
                    <div className="border-2 border-white">
                        <div>
                            <img src={launchData.image} className="w-full"/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-lg font-bold">{launchData.name}</h1>
                            <p>{launchData.launch_service_provider.name}</p>
                            <p>{launchData.pad.location.name}</p>
                            <p className="text-sm text-gray-400">{launchData.net}</p> 
                        </div>
                    </div>
                </div>
                <div className='m-6'>
                    <h1 className='text-xl mb-4'>Comments:</h1>
                </div>
                </>
    }

    return (
        <>
            {page}
        </>
    )
}