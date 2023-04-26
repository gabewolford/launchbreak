import { Link } from 'react-router-dom'


export default function LaunchCard({ launchData, setDetailPageId }) {

    return (
        <>
            <Link 
                to={`/launch/${launchData.slug}`}
                onClick={() => setDetailPageId(launchData.id)}
            >
            <div id='launch-card' className='m-6 p-4 flex flex-col lg:flex-row'>
                <div className="lg:w-1/2 lg:mr-4">
                    <img src={launchData.image} className="max-h-fill w-full lg:h-auto"/>
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                    <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold mb-2">{launchData.name}</h1>
                                <p className='mb-3 text-blue-300 text-lg font-bold'>{launchData?.launch_service_provider?.name}</p>

                                <p className="mb-4 text-2xl md:text-4xl font-bold">{new Date(launchData.net).toLocaleString()}</p> 
                        
                        <p>{launchData.pad.name}</p>
                        <p className=''>{launchData.pad.location.name}</p>

                        
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}
