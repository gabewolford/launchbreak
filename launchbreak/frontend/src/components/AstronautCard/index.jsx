import { Link } from "react-router-dom"
import { findFlagUrlByNationality } from "country-flags-svg"


export default function AstronautCard({ astronautData, setDetailPageId }) {
    
    let card = <>
                <div id="astronaut-card" className="flex rounded-lg">
                        <div className="flex-1 flex m-4">
                            <img src={astronautData.profile_image} className="w-full border-2 border-blue-300" />
                        </div>
                        <div className="flex-1 flex flex-col mr-4">
                            <div className="flex-1 py-3">
                                <h1 className="text-3xl font-bold">{astronautData.name}</h1>
                                <img 
                                    src={findFlagUrlByNationality(astronautData.nationality)} 
                                    alt={astronautData.nationality} 
                                    className='max-w-[35%] my-2'
                                />
                                <div className="mb-2">
                                    {astronautData.status.name === 'Active' && <p className="text-xs max-w-fit font-bold bg-green-500 bg-opacity-75 rounded px-3 py-1.5">{astronautData.status.name}</p>}
                                    {astronautData.status.name === 'Retired' && <p className="text-xs max-w-fit font-bold bg-red-500 bg-opacity-75 rounded px-3 py-1.5">{astronautData.status.name}</p>}
                                </div>
                                <div className="bg-gray-500 p-1 mb-2 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Affiliation:&nbsp;&nbsp;</em>{astronautData.agency.abbrev}</p>
                                </div>
                                <div className="bg-gray-500 p-1 mb-2 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Age:&nbsp;&nbsp;</em>{astronautData.age}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    </>

    if (astronautData.in_space === true) {
        const inSpaceBadge = <span className="px-2 py-1 text-md text-xs bg-orange-400 rounded m-2 absolute top-0">In Space</span>
        card = <div id="astronaut-card-in-space" className="flex rounded-lg border-4 border-orange-400">
                    <div className="flex-1 flex m-4 relative">
                        <img src={astronautData.profile_image} className="w-full border-2 border-blue-300" />
                        {inSpaceBadge}
                    </div>
                    <div className="flex-1 flex flex-col mr-4">
                        <div className="flex-1 py-3">
                            <h1 className="text-3xl font-bold">{astronautData.name}</h1>
                            <img 
                                src={findFlagUrlByNationality(astronautData.nationality)} 
                                alt={astronautData.nationality} 
                                className='max-w-[35%] my-2'
                            />
                            <div className="mb-2">
                                {astronautData.status.name === 'Active' && <p className="text-xs max-w-fit font-bold bg-green-500 bg-opacity-75 rounded px-3 py-1.5">{astronautData.status.name}</p>}
                                {astronautData.status.name === 'Retired' && <p className="text-xs max-w-fit font-bold bg-red-500 bg-opacity-75 rounded px-3 py-1.5">{astronautData.status.name}</p>}
                            </div>
                            <div className="bg-gray-500 p-1 mb-2 w-fit rounded">
                                <p className="text-md md:text-sm"><em>Affiliation:&nbsp;&nbsp;</em>{astronautData.agency.abbrev}</p>
                            </div>
                            <div className="bg-gray-500 p-1 mb-2 w-fit rounded">    
                                <p className="text-md md:text-sm"><em>Age:&nbsp;&nbsp;</em>{astronautData.age}</p>
                            </div>
                        </div>
                    </div>
                </div>
    } 
    
    return (
        <Link 
            to={`/astronaut/${astronautData.id}`}
            onClick={() => setDetailPageId(astronautData.id)}
        >
       {card}
        </Link>
    )
}