import { useEffect } from 'react'
import { getData } from '../../../utils/api'
import LoadingSpinner from '../LoadingSpinner'


export default function SpacecraftDetailsPage({ spacecraftData, updateDetails, detailPageId }) {
    
    useEffect(() => {
        getData(`https://lldev.thespacedevs.com/2.2.0/spacecraft/${detailPageId}`)
            .then(res => updateDetails(res))
    }, [])

    let page = <LoadingSpinner/>

    if (spacecraftData && spacecraftData.id === detailPageId) {
         page = <>
                    <div className="mx-12">
                        <h1 className="text-3xl mt-6 mb-12 font-bold">Spacecraft Details</h1>
                    </div>
                    <div className="flex rounded-lg bg-gray-600 mx-12 lg:max-w-[70vw] lg:mx-auto">
                        <div className="flex-1 m-4 relative">
                            <img src={spacecraftData.spacecraft_config.image_url} className="w-full border-2 border-blue-300" />
                        </div>
                        <div className="flex-1 flex flex-col mr-4">
                            <div className="flex-1 py-3">
                            <h1 className="text-3xl font-bold">{spacecraftData.name}</h1>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Capability:&nbsp;&nbsp;</em>{spacecraftData.capability}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>History:&nbsp;&nbsp;</em>{spacecraftData.history}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Maiden Flight :&nbsp;&nbsp;</em>{spacecraftData.maiden_flight}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Height:&nbsp;&nbsp;</em>{spacecraftData.height}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Diameter:&nbsp;&nbsp;</em>{spacecraftData.diamter}</p>
                                </div>
                                <div className="hidden lg:block">
                                    <h1 className='text-xl lg:text-2xl font-bold mt-6 mb-3'>About</h1>
                                    <p className='bg-gray-500 p-4 rounded'>{spacecraftData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gray-600 rounded-lg mx-12 mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>About</h1>
                        <p className='bg-gray-500 p-4 rounded'>{spacecraftData.description}</p>
                    </div>
                    <div className="rounded-lg bg-gray-600 mx-12 lg:max-w-[70vw] lg:mx-auto mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>Specifications</h1>
                        <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                            <p className="text-md md:text-sm"><em>Crew Capacity:&nbsp;&nbsp;</em>{spacecraftData.crew_capacity}</p>
                            <p className="text-md md:text-sm"><em>Flight Life:&nbsp;&nbsp;</em>{spacecraftData.flight_life}</p>
                            {/* <p className="text-md md:text-sm font-bold"><em>Flights: &nbsp;&nbsp;</em>{(agencyData.successful_launches / agencyData.total_launch_count)*100}%</p> */}
                        </div>

                        
                        
                    </div>
                </>
        }
        

    return (
        <>  
            {page}
        </>
    )
}