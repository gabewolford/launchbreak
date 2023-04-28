import { useEffect } from 'react'
import { getData } from '../../../utils/api'
import CommentSection from '../CommentSection'
import LoadingSpinner from '../LoadingSpinner'

export default function LaunchDetailsPage({ launchData, updateDetails, detailPageId }) {

    useEffect(() => {
        getData(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${detailPageId}`)
            .then(res => updateDetails(res))

        // setTimeout(() => {
        //     console.log('1 second delay')
        // }, 1000)
        
        // if (launchData) {
        //     console.log(launchData)
        //     localStorage.setItem('launch', JSON.stringify(launchData))
        // } else {
        //     updateDetails(JSON.parse(localStorage.getItem('launch')))
        // }
    }, [])

 
    let page = <>
                <LoadingSpinner/>
                </>

    if (launchData && launchData.id === detailPageId) {
        page = <>
                    <div className="mx-12">
                        <h1 className="text-3xl mt-6 mb-12 font-bold">Launch Details</h1>
                    </div>
                    <div className='mx-12 lg:max-w-[75vw] lg:mx-auto max-h-fit flex flex-col lg:flex-row bg-gray-600 rounded-lg'>
                        <div className="m-4 lg:w-1/2 lg:mr-4">
                            <img src={launchData.image} className="w-full lg:h-auto border-4 border-blue-300"/>
                        </div>
                        <div className="mt-0 mb-4 flex-1">
                            <div className="flex flex-col justify-center px-4 lg:pl-0">
                                <h1 className="text-2xl lg:mt-4 font-bold mb-2">{launchData.name}</h1>
                                {launchData.mission && <em className='mb-3 text-blue-300'>{launchData.mission.type} mission to {launchData.mission.orbit.name} ({launchData.mission.orbit.abbrev}) by {launchData.launch_service_provider.name}</em>}
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
                        <div className='bg-gray-600 rounded-lg h-fit lg:w-1/2'>
                            <div className="px-4 pt-4">
                                <h2 className="text-xl font-bold mb-2">Launching From</h2>
                                <p className='text-blue-300'>{launchData.pad.name}</p>
                                <p className='text-blue-300'>{launchData.pad.location.name}</p>
                            </div>
                            <div className='p-4'>
                                <iframe 
                                    src ={`https://maps.google.com/maps?q=${launchData.pad.latitude},${launchData.pad.longitude}&hl=en&z=14&output=embed`}
                                    className="min-h-[200px] w-full border-4 border-blue-300"
                                    >
                                </iframe>
                            </div>
                        </div>

                        <div className="h-fit lg:w-1/2">
                            <section className="bg-gray-600 rounded-lg h-fit flex">
                                <table className="w-full text-sm text-left mx-4 mb-4">
                                    <thead className="text-xl">
                                        <tr>
                                            <th scope="col" className="py-3">
                                                Rocket Details
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='px-4 border-4 border-blue-300'>
                                        <tr className="bg-white border-b">
                                            <td scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Name
                                            </td>
                                            {launchData.rocket.configuration.full_name ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration?.full_name}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="border-b bg-gray-100">
                                            <th scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Family
                                            </th>
                                            {launchData.rocket.configuration.family ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.family}</td> : <td className="px-4 py-2 text-black">N/A</td>}

                                        </tr>
                                        <tr className="bg-white border-b">
                                            <td scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Variant
                                            </td>
                                            {launchData.rocket.configuration.variant ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.variant}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="border-b bg-gray-100">
                                            <th scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Stages
                                            </th>
                                            {launchData.rocket.configuration.max_stages ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.max_stages}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="bg-white border-b">
                                            <td scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Reusable
                                            </td>
                                            {(launchData.rocket.configuration.reusable && launchData.rocket.configuration.reusable === true) && <td className="px-4 py-2 text-black">Yes</td>}
                                            {(launchData.rocket.configuration.reusable && launchData.rocket.configuration.reusable === false) && <td className="px-4 py-2 text-black">No</td>}
                                            {(!launchData.rocket.configuration.reusable) && <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="border-b bg-gray-100">
                                            <th scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Length (m)
                                            </th>
                                            {launchData.rocket.configuration.length ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.length}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="bg-white border-b">
                                            <td scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Diameter (m)
                                            </td>
                                            {launchData.rocket.configuration.diameter ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.diameter}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="border-b bg-gray-100">
                                            <th scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Launch Mass (T) 
                                            </th>
                                            {launchData.rocket.configuration.launch_mass ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.launch_mass.toLocaleString()}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="bg-white border-b">
                                            <td scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                LEO Capcity (kg)
                                            </td>
                                            {launchData.rocket.configuration.leo_capacity ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.leo_capacity.toLocaleString()}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="border-b bg-gray-100">
                                            <th scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                GTO Capcity (kg)
                                            </th>
                                            {launchData.rocket.configuration.gto_capacity ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.gto_capacity.toLocaleString()}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                        <tr className="bg-white border-b">
                                            <th scope="row" className="px-4 py-2 text-black italic font-bold border-r">
                                                Liftoff Thrust (kN)
                                            </th>
                                            {launchData.rocket.configuration.to_thrust ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.to_thrust.toLocaleString()}</td> : <td className="px-4 py-2 text-black">N/A</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>

                    <hr className='my-12 mx-6'/>

                    <div className='mx-12 max-h-fit flex flex-col lg:flex-row lg:max-w-[75vw] lg:mx-auto gap-5'>
                        <div className="lg:w-2/3">
                            <h1 className='text-2xl font-bold mb-5'>Comments</h1>
                            <CommentSection launchId={detailPageId}/>
                        </div>

                        <figure className='lg:w-1/3'>
                            <img src={launchData.mission_patches[0]?.image_url}/>
                            <figcaption className='text-white text-center'>{launchData.mission_patches[0]?.name}</figcaption>
                        </figure>

                    </div>
                </>
    }

    return (
        <>
            {page}
        </>
    )
}