import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getData } from '../../../utils/api'
import { findFlagUrlByNationality } from "country-flags-svg";
import LoadingSpinner from '../LoadingSpinner'


export default function AstronautDetailsPage({ astronautData, setDetailPage }) {
    const { id } = useParams()

    useEffect(() => {
        getData(`https://ll.thespacedevs.com/2.2.0/astronaut/${id}`)
            .then(res => setDetailPage(res))
    }, [])

    let page = <LoadingSpinner/>

    if (astronautData) {
        const inSpaceBadge = <span className="px-2 py-1 text-md text-xs lg:text-xl lg:font-bold bg-orange-400 rounded m-2 absolute top-0">In Space</span>
    
        if (astronautData.in_space === true) {
            page = <>
                    <div className="mx-12 lg:max-w-[75vw] lg:mx-auto">
                            <h1 className="text-3xl mt-6 mb-12 font-bold">Astronaut Details</h1>
                    </div>
                    <div className="flex rounded-lg bg-gray-600 border-4 border-orange-400 mx-12 lg:max-w-[70vw] lg:mx-auto">
                        <div className="flex-1 m-4 relative">
                            <img src={astronautData.profile_image} className="w-full border-2 border-blue-300" />
                            {inSpaceBadge}
                        </div>
                        <div className="flex-1 flex flex-col mr-4">
                            <div className="flex-1 py-3">
                            <h1 className="text-3xl font-bold">{astronautData.name}</h1>
                                <img 
                                    src={findFlagUrlByNationality(astronautData.nationality)} 
                                    alt={astronautData.nationality} 
                                    className='max-w-[35%] my-2'
                                />
                                <div className="mb-2">
                                    {astronautData.status.name === 'Active' && <p className="text-xs max-w-fit font-bold bg-green-500 bg-opacity-75 rounded px-3 py-1.5">{astronautData.status.name}</p>}
                                    {astronautData.status.name === 'Retired' && <p className="text-xs max-w-fit font-bold bg-red-500 bg-opacity-75 rounded px-3 py-1.5">{astronautData.status.name}</p>}
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Affiliation:&nbsp;&nbsp;</em>{astronautData.agency.name}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Affiliation Type:&nbsp;&nbsp;</em>{astronautData.type.name}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Age:&nbsp;&nbsp;</em>{astronautData.age}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Born:&nbsp;&nbsp;</em>{new Date(astronautData.date_of_birth).toLocaleDateString()}</p>
                                </div>
                                {astronautData.date_of_death &&
                                    <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                        <p className="text-md md:text-sm"><em>Died:&nbsp;&nbsp;</em>{new Date(astronautData.date_of_death).toLocaleDateString()}</p>
                                    </div>}
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Age:&nbsp;&nbsp;</em>{astronautData.age}</p>
                                </div>
                                <div className="hidden lg:block">
                                    <h1 className='text-xl lg:text-2xl font-bold mt-6 mb-3'>Biography</h1>
                                    <p className='bg-gray-500 p-4 rounded'>{astronautData.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden rounded-lg bg-gray-600 mx-12 mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>Biography</h1>
                        <p className='bg-gray-500 p-4 rounded'>{astronautData.bio}</p>
                    </div>
                    <div className="rounded-lg bg-gray-600 mx-12 lg:max-w-[70vw] lg:mx-auto mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>Mission Info</h1>
                        <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                            <p className="text-md md:text-sm"><em>Flights:&nbsp;&nbsp;</em>{astronautData.flights_count}</p>
                            <p className="text-md md:text-sm"><em>Landings:&nbsp;&nbsp;</em>{astronautData.landings_count}</p>
                            <p className="text-md md:text-sm font-bold"><em>Success Rate&nbsp;&nbsp;</em>{(astronautData.landings_count / astronautData.flights_count)*100}%</p>
                        </div>
                        <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                            <p className="text-md md:text-sm"><em>First Flight:&nbsp;&nbsp;</em>{new Date(astronautData.first_flight).toLocaleString()}</p>
                            <p className="text-md md:text-sm"><em>Last Flight:&nbsp;&nbsp;</em>{new Date(astronautData.last_flight).toLocaleString()}</p>
                            
                        </div>
                        
                        
                    </div>
                </>
        } else {
            page = <>
                    <div className="mx-12 lg:max-w-[75vw] lg:mx-auto">
                        <h1 className="text-3xl mt-6 mb-12 font-bold">Astronaut Details</h1>
                    </div>
                    <div className="flex rounded-lg bg-gray-600 mx-12 lg:max-w-[75vw] lg:mx-auto">
                        <div className="flex-1 m-4 relative">
                            <img src={astronautData.profile_image} className="w-full border-2 border-blue-300" />
                        </div>
                        <div className="flex-1 flex flex-col mr-4">
                            <div className="flex-1 py-3">
                            <h1 className="text-3xl font-bold">{astronautData.name}</h1>
                                <img 
                                    src={findFlagUrlByNationality(astronautData.nationality)} 
                                    alt={astronautData.nationality} 
                                    className='max-w-[35%] my-2'
                                />
                                <div className="mb-2">
                                    {astronautData.status.name === 'Active' && <p className="text-xs max-w-fit font-bold bg-green-500 bg-opacity-75 rounded px-3 py-1.5">{astronautData.status.name}</p>}
                                    {astronautData.status.name === 'Retired' && <p className="text-xs max-w-fit font-bold bg-red-500 bg-opacity-75 rounded px-3 py-1.5">{astronautData.status.name}</p>}
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Affiliation:&nbsp;&nbsp;</em>{astronautData.agency.name}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Affiliation Type:&nbsp;&nbsp;</em>{astronautData.type.name}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Age:&nbsp;&nbsp;</em>{astronautData.age}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Born:&nbsp;&nbsp;</em>{new Date(astronautData.date_of_birth).toLocaleDateString()}</p>
                                </div>
                                {astronautData.date_of_death &&
                                    <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                        <p className="text-md md:text-sm"><em>Died:&nbsp;&nbsp;</em>{new Date(astronautData.date_of_death).toLocaleDateString()}</p>
                                    </div>}
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Age:&nbsp;&nbsp;</em>{astronautData.age}</p>
                                </div>
                                <div className="hidden lg:block">
                                    <h1 className='text-xl lg:text-2xl font-bold mt-6 mb-3'>Biography</h1>
                                    <p className='bg-gray-500 p-4 rounded'>{astronautData.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gray-600 rounded-lg mx-12 lg:max-w-[75vw] mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>Biography</h1>
                        <p className='bg-gray-500 p-4 rounded'>{astronautData.bio}</p>
                    </div>
                    <div className="rounded-lg bg-gray-600 mx-12 lg:max-w-[75vw] lg:mx-auto mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>Mission Info</h1>
                        <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                            <p className="text-md md:text-sm"><em>Flights:&nbsp;&nbsp;</em>{astronautData.flights_count}</p>
                            <p className="text-md md:text-sm"><em>Landings:&nbsp;&nbsp;</em>{astronautData.landings_count}</p>
                            <p className="text-md md:text-sm font-bold"><em>Success Rate&nbsp;&nbsp;</em>{(astronautData.landings_count / astronautData.flights_count)*100}%</p>
                        </div>
                        <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                            <p className="text-md md:text-sm"><em>First Flight:&nbsp;&nbsp;</em>{new Date(astronautData.first_flight).toLocaleString()}</p>
                            <p className="text-md md:text-sm"><em>Last Flight:&nbsp;&nbsp;</em>{new Date(astronautData.last_flight).toLocaleString()}</p>
                            
                        </div>
                        
                        
                    </div>
                </>
        }
    } 
        

    return (
        <>  
            {page}
        </>
    )
}