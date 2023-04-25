import { useEffect } from 'react'
import { getData } from '../../../utils/api'
import CommentSection from '../CommentSection'

export default function LaunchDetailsPage({ launchData, updateDetails, detailPageId }) {
    
    useEffect(() => {
        if (!launchData) {
        getData(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${detailPageId}`)
            .then(res => updateDetails(res)
        )}
    }, [])

    let page = <p>Loading launch details...</p>
    if (launchData) {
        page = <>
                    <div className='m-6 max-h-fit flex flex-col lg:flex-row'>
                        <div className="lg:w-1/2 lg:mr-4">
                            <img src={launchData.image} className="w-full lg:h-auto"/>
                        </div>
                        <div className="flex-1 mt-4 lg:mt-0">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold mb-2">{launchData.name}</h1>

                                <p className='mb-3'>{launchData.launch_service_provider.name}</p>

                                <p className="mb-4">{launchData.net}</p> 
                                
                                <p>{launchData.pad.name}</p>
                                <p className='mb-4'>{launchData.pad.location.name}</p>

                                <p className='mb-3'>{launchData.mission.description}</p>

                                <p className='mb-5'>{launchData.mission.type} mission to {launchData.mission.orbit.name} ({launchData.mission.orbit.abbrev})</p>
                                <p></p>

                                <figure>
                                    <img src={launchData.mission_patches[0].image_url} className="w-full"/>
                                    <figcaption className='text-gray-400 text-center'>{launchData.mission_patches[0].name}</figcaption>
                                </figure>
                                
                            </div>
                        </div>
                    </div>

                    <hr className='my-12 mx-6'/>

                    <div className=''>
                        <h1 className='text-xl font-bold m-5'>Comments</h1>
                        <CommentSection launchId={launchData.id}/>
                    </div>
                </>
    }

    return (
        <>
            {page}
        </>
    )
}