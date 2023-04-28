import { Link } from 'react-router-dom'


export default function SpacecraftCard({ spacecraftData, setDetailPageId }) {

    return (
        <>
            <Link 
                to={`/spacecraft/${spacecraftData.id}`}
                onClick={() => setDetailPageId(spacecraftData.id)}
            >
            <div id="spacecraft-card" className='mb-6 p-4 flex flex-col lg:flex-row bg-gray-600 rounded-lg'>
                <div className="lg:w-1/2 lg:mr-4">
                    {spacecraftData.spacecraft_config.image_url && <img src={spacecraftData.spacecraft_config.image_url} alt={spacecraftData.spacecraft_config.name} className="max-h-fill w-full lg:h-auto border-4 border-blue-300"/>}
                    {/* {!agencyData.logo_url && <div className="lg:h-auto border-4 border-blue-300">No logo uploaded.</div>} */}
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                    <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold mb-2">{spacecraftData.name}</h1>
                        <p className='mb-3'>{spacecraftData.serial_number}</p>
                        <p className="mb-3">{spacecraftData.status.name}</p> 
                        <p className="mb-3"></p>
                        <p className="mb-3"></p>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}