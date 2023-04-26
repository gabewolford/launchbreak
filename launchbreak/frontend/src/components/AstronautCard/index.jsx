import { Link } from "react-router-dom"


export default function AstronautCard({ astronautData, setDetailPageId }) {
    
    
    return (
        <>
            <Link 
                to={`/astronaut/${astronautData.id}`}
                onClick={() => setDetailPageId(astronautData.id)}
            >
            <div id="astronaut-card" className="flex">
                <div className="flex-1 flex relative">
                    <img src={astronautData.profile_image} className="w-full" />
                    {astronautData.status.name === 'Active' && <span className="text-xs bg-green-500 bg-opacity-75 m-1.5 px-2 absolute top-0 left-0 p-0.5">{astronautData.status.name}</span>}
                    {astronautData.status.name === 'Retired' && <span className="text-xs bg-red-500 bg-opacity-75  m-1.5 px-2 absolute top-0 left-0 p-0.5">{astronautData.status.name}</span>}
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="bg-gray-600 flex-1 p-3 h-1/2">
                        <h1 className="text-xl lg:text-2xl font-bold pb-2">{astronautData.name}</h1>
                        <p className="">Nationality: {astronautData.nationality}</p>
                        <p className="">Born: {new Date(astronautData.date_of_birth).toDateString()}</p>
                        <p className="">Age: {astronautData.age}</p>
                    </div>
                    <div className="flex-1 bg-gray-400 relative p-3 h-1/2">
                        
                        <p className="mb-2">Flights: {astronautData.flights_count}</p>
                        <p className="text-sm">First Flight: {new Date(astronautData.first_flight).toDateString()}</p>
                        <p className="text-sm">Last Flight: {new Date(astronautData.last_flight).toDateString()}</p>
                        <img src={astronautData.agency.logo_url} className="max-h-12 md:max-h-9 lg:max-h-6 xl:max-h-12 m-2 absolute bottom-0 right-0" />

                    </div>
                </div>
            </div>
        
           



            
            </Link>
        </>
    )
}