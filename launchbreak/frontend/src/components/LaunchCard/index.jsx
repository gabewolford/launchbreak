import { Link } from 'react-router-dom'


export default function LaunchCard({ launchData, setDetailPage }) {

    return (
        <>
            <Link 
                to={`/launch/${launchData.id}`}
                onClick={() => setDetailPage(launchData)}
            >
            <div id="launch-card" className='mb-6 p-4 flex flex-col lg:flex-row bg-gray-600 rounded-lg'>
                <div className="lg:w-1/2 lg:mr-4">
                    <img src={launchData.image} className="max-h-fill w-full lg:h-auto border-4 border-blue-300"/>
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                    <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold mb-2">{launchData.name}</h1>
                        <p className='mb-3 text-blue-300 text-lg font-bold'>{launchData?.launch_service_provider?.name}</p>

                        <p className="mb-3 text-2xl md:text-4xl font-bold">{new Date(launchData.net).toLocaleString()}</p> 
                        
                        <div title={launchData.status.description}>Status: {launchData.status.name}</div>
                        <div className='bg-gray-600 rounded-lg h-fit'>
                            <div className="pt-4">
                                <h2 className="text-l font-bold mb-4">Launching From</h2>
                                <div className="bg-gray-500 p-3 mb-4 w-fit text-left rounded">
                                    <p className="text-md text-blue-300">{launchData.pad.name}</p>
                                    <p className="text-md">{launchData.pad.location.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}
