import { useEffect } from 'react'
import { getData } from '../../../utils/api'
import CommentSection from '../CommentSection'
import LoadingSpinner from '../LoadingSpinner'

export default function LaunchDetailsPage({ launchData, updateDetails, detailPageId }) {

    useEffect(() => {
        getData(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${detailPageId}`)
            .then(res => updateDetails(res))
    }, [])

    

    let page = <>
                <LoadingSpinner/>
                </>

    if (launchData && launchData.id === detailPageId) {
        
        page = <>
                    <div className="mx-12">
                        <h1 className="text-3xl mt-6 font-bold">Launch Details</h1>
                    </div>
                    <div id='launch-details' className='m-6 mx-12 lg:max-w-[75vw] lg:mx-auto max-h-fit flex flex-col lg:flex-row'>
                        <div className="m-4 lg:w-1/2 lg:mr-4">
                            <img src={launchData.image} className="w-full lg:h-auto"/>
                        </div>
                        <div className="mt-0 mb-4 flex-1">
                            <div className="flex flex-col justify-center px-4 lg:pl-0">
                                <h1 className="text-2xl lg:mt-4 font-bold mb-2">{launchData.name}</h1>
                                <em className='mb-3 text-blue-300'>{launchData.mission?.type} mission to {launchData.mission?.orbit.name} ({launchData.mission?.orbit.abbrev}) by {launchData.launch_service_provider.name}</em>
                                <p className="mb-4 text-2xl md:text-4xl font-bold">{new Date(launchData.net).toLocaleString()}</p> 
                                <p className='mb-4'>{launchData.mission?.description}</p>
                                <div className='mb-1'>
                                    {launchData.webcast_live === false && <a className='bg-gray-500 px-3 py-1 rounded'>Livestream</a>}
                                    {launchData.webcast_live === true && <a className='bg-blue-900 hover:bg-blue-800 px-3 py-1 rounded' href={launchData.vidURLs}>Livestream</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='m-6 max-h-fit flex flex-col lg:flex-row gap-5 mx-12 lg:max-w-[75vw] lg:mx-auto'>
                        <div id='launch-details' className='h-fit lg:w-1/2'>
                            <div className="px-4 pt-4">
                                <h2 className="text-xl font-bold mb-2">Launching From</h2>
                                <p className='text-blue-300'>{launchData.pad.name}</p>
                                <p className='text-blue-300'>{launchData.pad.location.name}</p>
                            </div>
                            
                            <iframe 
                                src ={`https://maps.google.com/maps?q=${launchData.pad.latitude},${launchData.pad.longitude}&hl=en&z=14&output=embed`}
                                className="min-h-[200px] w-full p-4"
                                >
                            </iframe>
                        </div>

                        <div id='launch-details' className='lg:w-1/2'>
                            <div className="px-4 pt-4">
                                <h2 className="text-xl font-bold mb-1">Rocket Details</h2>
                                <p className='mb-4 text-sm'>{launchData.rocket.configuration.description}</p>
                                <table className=''>
                                    <div className="border-2 border-solid p-1 border-gray-400">
                                        <th className='text-blue-300 text-lg pl-2 pb-1 text-left'>
                                            Configuration
                                        </th>
                                        <tr className='bg-white'>
                                            <td className='italic text-gray-900 pl-2'>Name</td>
                                            <td className='pl-5 pr-2 text-gray-900'>{launchData.rocket.configuration.full_name}</td>
                                        </tr>
                                        <tr className=''>
                                            <td className='italic pl-2'>Family</td>
                                            <td className='pl-5'>{launchData.rocket.configuration.family}</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='italic text-gray-900 pl-2'>Variant</td>
                                            <td className='pl-5 text-gray-900'>{launchData.rocket.configuration.variant}</td>
                                        </tr>
                                        <tr className=''>
                                            <td className='italic pl-2'>Stages</td>
                                            <td className='pl-5'>{launchData.rocket.configuration.max_stage}</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='italic text-gray-900 pl-2'>Reusable</td>
                                            <td className='pl-5 text-gray-900'>{launchData.rocket.configuration.reusable == true && 'Yes'}</td>
                                        </tr>
                                        <tr className=''>
                                            <td className='italic pl-2'>Length (m)</td>
                                            <td className='pl-5'>{launchData.rocket.configuration.length}</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='italic text-gray-900 pl-2'>Diameter (m)</td>
                                            <td className='pl-5 text-gray-900'>{launchData.rocket.configuration.diameter}</td>
                                        </tr>
                                        <tr className=''>
                                            <td className='italic pl-2'>Launch Mass (T)</td>
                                            <td className='pl-5'>{launchData.rocket.configuration.launch_mass.toLocaleString()}</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='italic text-gray-900 pl-2'>LEO Capcity (kg)</td>
                                            <td className='pl-5 text-gray-900'>{launchData.rocket.configuration.leo_capacity.toLocaleString()}</td>
                                        </tr>
                                        <tr className=''>
                                            <td className='italic pl-2'>GTO Capcity (kg)</td>
                                            <td className='pl-5'>{launchData.rocket.configuration.gto_capacity.toLocaleString()}</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='italic text-gray-900 pl-2'>Liftoff Thrust (kN)</td>
                                            <td className='pl-5 text-gray-900'>{launchData.rocket.configuration.to_thrust.toLocaleString()}</td>
                                        </tr>
                                    </div>
                                </table>
                            </div>
                            
                            <div className="w-full p-4">
                            </div>
                        </div>
                    </div>

                    <div className='mx-12 max-h-fit flex flex-col lg:flex-row lg:max-w-[75vw] lg:mx-auto'>
                        <figure>
                            <img src={launchData.mission_patches[0]?.image_url} className="w-full lg:max-h-80"/>
                            <figcaption className='text-gray-400 text-center'>{launchData.mission_patches[0]?.name}</figcaption>
                        </figure>

                    </div>

                    <hr className='my-12 mx-6'/>

                    <div className='mx-12 lg:max-w-[75vw] lg:mx-auto'>
                        <h1 className='text-2xl font-bold m-5'>Comments</h1>
                        <CommentSection launchId={detailPageId}/>
                    </div>
                </>
    }

    return (
        <>
            {page}
        </>
    )
}