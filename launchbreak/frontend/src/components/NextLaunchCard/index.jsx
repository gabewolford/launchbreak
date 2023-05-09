import { Link } from 'react-router-dom'
import Countdown from 'react-countdown';


export default function NextLaunchCard({ launchData, setDetailPage }) {

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


    return (
        <>
            <Link 
                to={`/launch/${launchData.id}`}
                onClick={() => setDetailPage(launchData)}
            >
            <div id="launch-card" className='mb-6 p-4 flex flex-col lg:flex-row bg-gray-600 rounded-lg'>
                <div className="lg:w-1/2 lg:mr-4 relative">
                    <img src={launchData.image} className="max-h-fill w-full lg:h-auto border-4 border-blue-300"/>
                    {launchStatus}
                    <div className='bg-gray-500 bg-opacity-75 text-xs px-2 py-1 rounded m-3 absolute top-0 right-0'>
                        Window Opens: {new Date(launchData.window_start).toLocaleString()}
                    </div>
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                    <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold mb-2">{launchData.name}</h1>
                        <p className='mb-3 text-blue-300 text-lg font-bold'>{launchData?.launch_service_provider?.name}</p>
                        {/* <p className="mb-4 text-2xl md:text-4xl font-bold">{new Date(launchData.net).toLocaleString()}</p>  */}
                        <Countdown
                            date={launchData.net}
                            renderer={({ days, hours, minutes, seconds, completed }) => (
                                <h1 className="mb-4 text-4xl font-bold">
                                {completed ? 'LIFTOFF!' : `T - ${days}d ${hours}h ${minutes}m ${seconds}s`}
                                </h1>
                            )}
                        />

                        <div className='bg-gray-600 rounded-lg h-fit'>
                            <div className="bg-gray-500 p-3 w-fit text-left rounded">
                                <p className="text-md text-blue-300">{launchData.pad.name}</p>
                                <p className="text-md">{launchData.pad.location.name}</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}
