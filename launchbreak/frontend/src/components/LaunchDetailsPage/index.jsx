import { useEffect } from 'react'
import { getData } from '../../../utils/api'
import CommentSection from '../CommentSection'

export default function LaunchDetailsPage({ launchData, updateDetails, detailPageId }) {

console.log(launchData)

    useEffect(() => {
        getData(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${detailPageId}`)
            .then(res => updateDetails(res))
    
    }, [])
    


    let page = <>
                    <div className="lg:mx-12">
                        <h1 className="m-6 text-3xl font-bold">Launch Details</h1>
                        <p className='m-6'>Loading launch details...</p>
                    </div>
                </>
   
    if (launchData) {
        page = <>
                    <div className="lg:mx-12">
                        <h1 className="mt-6 text-3xl font-bold">Launch Details</h1>
                    </div>
                    <div id='launch-details' className='m-6 mx-12 max-h-fit flex flex-col lg:flex-row'>
                        <div className="m-4 lg:w-1/2 lg:mr-4">
                            <img src={launchData.image} className="w-full lg:h-auto"/>
                        </div>
                        <div className="lg:mt-4 mt-0 flex-1">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold mb-2">{launchData.name}</h1>

                                <p className='mb-3'>{launchData.launch_service_provider.name}</p>

                                <p className="mb-4">{new Date(launchData.net).toLocaleString()}</p> 
                                
                                <p>{launchData.pad.name}</p>
                                <p className='mb-4'>{launchData.pad.location.name}</p>

                                <p className='mb-3'>{launchData.mission.type} mission to {launchData.mission.orbit.name} ({launchData.mission.orbit.abbrev})</p>
                                <p className='mb-4'>{launchData.mission.description}</p>
       
                            </div>
                        </div>
                    </div>
                    <div className='mx-12 max-h-fit flex flex-col lg:flex-row'>

                        <figure>
                            <img src={launchData.mission_patches[0]?.image_url} className="w-full lg:max-h-80"/>
                            <figcaption className='text-gray-400 text-center'>{launchData.mission_patches[0]?.name}</figcaption>
                        </figure>

                    </div>

                    <hr className='my-12 mx-6'/>

                    <div className='mx-12'>
                        <h1 className='text-2xl font-bold m-5'>Comments</h1>
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