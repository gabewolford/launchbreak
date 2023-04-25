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
                    <div className="border-2 border-white flex-1">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-lg font-bold">{launchData.name}</h1>
                            <p>{launchData.launch_service_provider.name}</p>
                            <p>{launchData.pad.location.name}</p>
                            <p className="text-sm text-gray-400">{launchData.net}</p> 
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