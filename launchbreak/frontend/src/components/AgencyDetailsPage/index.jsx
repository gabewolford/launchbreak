import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../../../utils/api'
import { findFlagUrlByIso3Code } from 'country-flags-svg'
import LoadingSpinner from '../LoadingSpinner'


export default function AgencyDetailsPage({ agencyData, setDetailPage }) {
    const { id } = useParams()

    useEffect(() => {
        getData(`https://lldev.thespacedevs.com/2.2.0/agencies/${id}`)
            .then(res => setDetailPage(res))
    }, [])

    let page = <LoadingSpinner/>

    if (agencyData) {
        let successRate = ((agencyData.successful_launches / agencyData.total_launch_count)*100)
        let launchSuccessRate 
        if (successRate < 50) {
            launchSuccessRate = 
            <p className="text-lg md:text-md font-bold text-white bg-red-500 px-1 rounded">
                <em>Success Rate:&nbsp;&nbsp;</em>
                {((agencyData.successful_launches / agencyData.total_launch_count) *100).toFixed(2)}%
            </p>
        } else if (successRate >= 50 && successRate < 85) {
            launchSuccessRate = 
            <p className="text-lg md:text-md font-bold text-white bg-yellow-400 px-1 rounded">
                <em>Success Rate:&nbsp;&nbsp;</em>
                {((agencyData.successful_launches / agencyData.total_launch_count) *100).toFixed(2)}%
            </p>
        } else if (successRate >= 85) {
            launchSuccessRate = 
            <p className="text-lg md:text-md font-bold text-white bg-green-500 px-1 rounded">
                <em className=''>Success Rate:&nbsp;&nbsp;</em>
                {((agencyData.successful_launches / agencyData.total_launch_count) *100).toFixed(2)}%
            </p>
        }

        let landSuccessRate = ((agencyData.successful_landings / agencyData.attempted_landings)*100)
        let landingSuccessRate 
        if (landSuccessRate < 50) {
            landingSuccessRate = 
            <p className="text-lg md:text-md font-bold text-white bg-red-500 px-1 rounded">
                <em>Success Rate:&nbsp;&nbsp;</em>
                {landSuccessRate.toFixed(2)}%
            </p>
        } else if (landSuccessRate >= 50 && landSuccessRate < 85) {
            landingSuccessRate = 
            <p className="text-lg md:text-md font-bold text-white bg-yellow-400 px-1 rounded">
                <em>Success Rate:&nbsp;&nbsp;</em>
                {landSuccessRate.toFixed(2)}%
            </p>
        } else if (landSuccessRate >= 85) {
            landingSuccessRate = 
            <p className="text-lg md:text-md font-bold text-white bg-green-500 px-1 rounded">
                <em className=''>Success Rate:&nbsp;&nbsp;</em>
                {landSuccessRate.toFixed(2)}%
            </p>
        }
        
        let launchStatistics
        if (agencyData.total_launch_count) {
            launchStatistics =
                <div className="rounded-lg bg-gray-600 mt-4 p-4 md:w-1/2">
                    <h1 className='text-2xl font-bold mb-4'>Launch Statistics</h1>
                    <div className="bg-gray-500 p-2 w-fit rounded">
                        <p className="text-md md:text-sm"><em>Successful Launches:&nbsp;&nbsp;</em>{agencyData.successful_launches}</p>
                        <p className="text-md md:text-sm"><em>Failed Launches:&nbsp;&nbsp;</em>{agencyData.failed_launches}</p>
                        <p className="text-md md:text-sm mb-2"><em>Total Launches:&nbsp;&nbsp;</em>{agencyData.total_launch_count}</p>
                        {launchSuccessRate}
                    </div>
                </div>
        }

        let landingStatistics
        if (agencyData.attempted_landings) {
            landingStatistics =
                <div className="rounded-lg bg-gray-600 md:mt-4 p-4 md:w-1/2">
                    <h1 className='text-2xl font-bold mb-4'>Landing Statistics</h1>
                    <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                        <p className="text-md md:text-sm"><em>Successful Landings:&nbsp;&nbsp;</em>{agencyData.successful_landings}</p>
                        <p className="text-md md:text-sm"><em>Failed Landings:&nbsp;&nbsp;</em>{agencyData.failed_landings}</p>
                        <p className="text-md md:text-sm mb-2"><em>Total Landing Attempts:&nbsp;&nbsp;</em>{agencyData.attempted_landings}</p>
                        {landingSuccessRate}
                    </div>
                </div>
        } 

        page = <>
                <div className="mx-6 md:mx-12 lg:max-w-[75vw] lg:mx-auto">
                    <h1 className="text-3xl mt-6 mb-12 font-bold">Agency Details</h1>

                    <div className="flex rounded-lg bg-gray-600 lg:max-w-[75vw]">
                        <div className="flex-1 m-4 relative ">
                            <img src={agencyData.logo_url} className="w-full border-2 border-blue-300 p-6" />
                        </div>
                        <div className="flex-1 flex flex-col mr-4 ">
                            <div className="flex-1 py-3">
                            <h1 className="text-3xl font-bold mb-2">{agencyData.name}</h1>
                                <img 
                                    src={findFlagUrlByIso3Code(agencyData.country_code)} 
                                    alt={agencyData.country_code} 
                                    className='max-w-[25%] mb-2'
                                /> 
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Abbreviation:&nbsp;&nbsp;</em>{agencyData.abbrev}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm">{agencyData.administrator}</p>
                                </div>
                                <div className="bg-gray-500 p-2 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Founded:&nbsp;&nbsp;</em>{agencyData.founding_year}</p>
                                </div>
                                {agencyData.launchers && <div className="bg-gray-500 p-2 w-fit rounded"> <p className="text-md md:text-sm"><em>Launchers:&nbsp;&nbsp;</em>{agencyData.launchers}</p>
                                </div>}
                                
                                <div className="hidden lg:block">
                                    <h1 className='text-xl lg:text-2xl font-bold mt-6 mb-3'>About</h1>
                                    <p className='bg-gray-500 p-4 rounded'>{agencyData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gray-600 rounded-lg mt-4 p-4">
                        <h1 className='text-2xl font-bold mb-4'>About</h1>
                        <p className='bg-gray-500 p-4 rounded'>{agencyData.description}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        {launchStatistics}
                        {landingStatistics}
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