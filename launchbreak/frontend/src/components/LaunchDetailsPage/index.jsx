import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../../../utils/api'
import Countdown from 'react-countdown'
import CommentSection from '../CommentSection'
import LoadingSpinner from '../LoadingSpinner'

export default function LaunchDetailsPage({ launchData, setDetailPage, authenticated }) {
    const { id } = useParams()
    
    useEffect(() => {
        getData(`https://ll.thespacedevs.com/2.2.0/launch/upcoming/${id}`)
            .then(res => setDetailPage(res))  
    }, [])
 
    let comments 
    if (authenticated === true) {
        comments = <CommentSection launchId={launchData.id} authenticated={authenticated}/>
    } else if (authenticated === false) {
        comments =
        <p>
            <a className='text-blue-600' href='/auth/login'>Log in</a> or <a className='text-blue-600' href='/auth/signup'>create an account</a> to leave a comment. 
        </p>
    }

    let page = <LoadingSpinner/>
           
    if (launchData) {
        let launchStatus
        const launchStatusData = launchData.status.abbrev
        if (launchStatusData === 'TBD') {
            launchStatus = 
                <div 
                    title={launchData.status.description} 
                    className='bg-yellow-400 text-white font-bold py-1 px-2 rounded w-fit absolute top-0 left-0 m-3'
                >
                {launchStatusData.toUpperCase()}
                </div>
        } else if (launchStatusData === 'TBC') {
            launchStatus = 
                <div 
                    title={launchData.status.description} 
                    className='bg-yellow-400 text-white font-bold py-1 px-2 rounded w-fit absolute top-0 left-0 m-3'
                >
                {launchStatusData.toUpperCase()}
                </div>
        } else if (launchStatusData === 'Go') {
            launchStatus =
                <div 
                    title={launchData.status.description} 
                    className='bg-green-500 text-white font-bold py-1 px-2 rounded w-fit absolute top-0 left-0 m-3'
                >
                {launchStatusData.toUpperCase()}
                </div>
        } else if (launchStatusData === 'In Flight') {
            launchStatus =
                <div 
                    title={launchData.status.description} 
                    className='bg-blue-500 border-2 border-blue-200 text-white font-bold py-1 px-2 rounded w-fit absolute top-0 left-0 m-3'
                >
                {launchStatusData.toUpperCase()}
                </div>
        } else if (launchStatusData === 'Success') {
            launchStatus =
                <div 
                    title={launchData.status.description} 
                    className='bg-blue-500 border-2 border-blue-200 text-white font-bold py-1 px-2 rounded w-fit absolute top-0 left-0 m-3'
                >
                {launchStatusData.toUpperCase()}
                </div>
        } else (
            launchStatus =
                <div 
                    title={launchData.status.description} 
                    className='bg-red-500 text-white font-bold py-1 px-2 rounded w-fit absolute top-0 left-0 m-3'
                >
                {launchStatusData.toUpperCase()}
                </div>
        )
        page = <>
                    <div className="mx-12 lg:max-w-[75vw] lg:mx-auto">
                        <h1 className="text-3xl mt-6 mb-12 font-bold">Launch Details</h1>
                    </div>
                    <div className='mx-12 lg:max-w-[75vw] lg:mx-auto max-h-fit flex flex-col lg:flex-row bg-gray-600 rounded-lg'>
                        <div className="m-4 lg:w-1/2 lg:mr-4 relative">
                            <img src={launchData.image} className="w-full lg:h-auto border-4 border-blue-300"/>
                            {launchStatus}
                            <p className='bg-gray-500 bg-opacity-75 text-xs px-2 py-1 rounded m-3 absolute top-0 right-0'>
                                Window Opens: {new Date(launchData.window_start).toLocaleString()}
                            </p>
                        </div>
                        <div className="mt-0 mb-4 flex-1">
                            <div className="flex flex-col justify-center px-4 lg:pl-0">
                                <h1 className="text-2xl lg:mt-4 font-bold mb-2">{launchData.name}</h1>
                                {launchData.mission && <em className='mb-3 text-blue-300'>{launchData.mission.type} mission to {launchData.mission.orbit.name} ({launchData.mission.orbit.abbrev}) by {launchData.launch_service_provider.name}</em>}
                                <p className="mb-4 text-2xl md:text-4xl font-bold">{new Date(launchData.net).toLocaleString()}</p>
                                {/* <Countdown
                                    date={launchData.net}
                                    renderer={({ days, hours, minutes, seconds, completed }) => (
                                        <p className="mb-4 text-4xl font-bold">
                                        {completed ? 'LIFTOFF!' : `T - ${days}d ${hours}h ${minutes}m ${seconds}s`}
                                        </p>
                                    )}
                                /> */}
                                <p className='mb-4'>{launchData.mission?.description}</p>
                                <div className='mb-1'>
                                    {launchData.webcast_live === false && <a className='bg-gray-500 px-3 py-1 rounded'>Livestream Pending</a>}
                                    {/* {launchData.vidURLs[0].url && <a className='bg-blue-900 hover:bg-blue-500 cursor-pointer px-3 py-1 rounded' href={launchData.vidURLs[0].url} target="blank">Watch Now</a>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='m-6 max-h-fit flex flex-col lg:flex-row gap-5 mx-12 lg:max-w-[75vw] lg:mx-auto'>
                        <div className='bg-gray-600 rounded-lg h-fit lg:w-1/2'>
                            <div className="px-4 pt-4">
                                <h2 className="text-xl font-bold mb-4">Launching From</h2>
                                <div className="bg-gray-500 p-3 mb-4 w-fit text-left rounded">
                                    <p className="text-md lg:text-lg text-blue-300">{launchData.pad.name}</p>
                                    <p className="text-md lg:text-lg">{launchData.pad.location.name}</p>
                                </div>
                            </div>
                            <div className='px-4 pb-4'>
                                <div className="relative">
                                    <iframe 
                                        src ={`https://maps.google.com/maps?q=${launchData.pad.latitude},${launchData.pad.longitude}&hl=en&z=14&output=embed`}
                                        className="min-h-[300px] w-full border-4 border-blue-300"
                                        >
                                    </iframe>
                                </div>
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
                                            {launchData.rocket.configuration.full_name ? <td className="px-4 py-2 text-black">{launchData.rocket.configuration.full_name}</td> : <td className="px-4 py-2 text-black">N/A</td>}
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
                            {comments}
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