import { Link } from 'react-router-dom'


export default function LaunchCard({ launchData, setDetailPageId }) {

    return (
        <>
            <Link 
                to={`/launch/${launchData.slug}`}
                onClick={() => setDetailPageId(launchData.id)}
            >
            <div className='m-6 max-h-fit max-w-fit'>
                <div className="border-2 border-white">
                    <div>
                        <img src={launchData.image} className="w-full"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-lg font-bold">{launchData.name}</h1>
                        <p>{launchData.launch_service_provider.name}</p>
                        <p>{launchData.pad.location.name}</p>
                        <p className="text-sm text-gray-400">{Date(launchData.net)}</p> 
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}
