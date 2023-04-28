import { useEffect } from 'react'
import { getData } from '../../../utils/api'
import LoadingSpinner from '../LoadingSpinner'


export default function AgencyDetailsPage({ agencyData, updateDetails, detailPageId }) {
    
    useEffect(() => {
        getData(`https://lldev.thespacedevs.com/2.2.0/agencies/${detailPageId}`)
            .then(res => updateDetails(res))
    }, [])

    let page = <LoadingSpinner/>

    if (agencyData && agencyData.id === detailPageId) {
         page = <>
                    <div className="mx-12">
                        <h1 className="text-3xl mt-6 mb-12 font-bold">Agency Details</h1>
                    </div>
                    <div className="flex rounded-lg bg-gray-600 mx-12 lg:max-w-[70vw] lg:mx-auto">
                        <div className="flex-1 m-4 relative">
                            <img src={agencyData.logo_url} className="w-full border-2 border-blue-300 p-6" />
                        </div>
                        <div className="flex-1 flex flex-col mr-4">
                            <div className="flex-1 py-3">
                            <h1 className="text-3xl font-bold mb-2">{agencyData.name}</h1>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Abbreviation:&nbsp;&nbsp;</em>{agencyData.abbrev}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Administrator :&nbsp;&nbsp;</em>{agencyData.administrator}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Founded:&nbsp;&nbsp;</em>{agencyData.founding_year}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Launchers:&nbsp;&nbsp;</em>{agencyData.age}</p>
                                </div>
                                <div className="hidden lg:block">
                                    <h1 className='text-xl lg:text-2xl font-bold mt-6 mb-3'>About</h1>
                                    <p className='bg-gray-500 p-4 rounded'>{agencyData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gray-600 rounded-lg mx-12 mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>About</h1>
                        <p className='bg-gray-500 p-4 rounded'>{agencyData.description}</p>
                    </div>
                    <div className="rounded-lg bg-gray-600 mx-12 lg:max-w-[70vw] lg:mx-auto mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>Launch Statistics</h1>
                        <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                            <p className="text-md md:text-sm"><em>Total Launches:&nbsp;&nbsp;</em>{agencyData.total_launch_count}</p>
                            <p className="text-md md:text-sm"><em>Successful Launches:&nbsp;&nbsp;</em>{agencyData.successful_launches}</p>
                            <p className="text-md md:text-sm font-bold"><em>Success Rate&nbsp;&nbsp;</em>{(agencyData.successful_launches / agencyData.total_launch_count)*100}%</p>
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