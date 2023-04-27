import { Link } from "react-router-dom"


export default function AstronautCard({ astronautData, setDetailPageId }) {
    
    let card = <>
                <div id="astronaut-card" className="flex rounded-lg">
                        <div className="flex-1 flex m-4">
                            <img src={astronautData.profile_image} className="w-full border-2 border-blue-300" />
                        </div>
                        <div className="flex-1 flex flex-col mr-4">
                            <div className="flex-1 py-3">
                                <h1 className="text-3xl font-bold mb-2">{astronautData.name}</h1>
                                <div className="mb-3">
                                    {astronautData.status.name === 'Active' && <span className="text-xs bg-green-500 bg-opacity-75 rounded px-2 py-0.5">{astronautData.status.name}</span>}
                                    {astronautData.status.name === 'Retired' && <span className="text-xs bg-red-500 bg-opacity-75 rounded px-2 py-0.5">{astronautData.status.name}</span>}
                                </div>
                                <div className="bg-gray-500 p-1 mb-1 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Nationality:&nbsp;&nbsp;</em>{astronautData.nationality}</p>
                                </div>
                                <div className="bg-gray-500 p-1 mb-1 w-fit rounded">
                                    <p className="text-md md:text-sm"><em>Affiliation:&nbsp;&nbsp;</em>{astronautData.agency.abbrev}</p>
                                </div>
                                <div className="bg-gray-500 p-1 mb-1 w-fit rounded">    
                                    <p className="text-md md:text-sm"><em>Age:&nbsp;&nbsp;</em>{astronautData.age}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    </>

    if (astronautData.in_space === true) {
        const inSpaceBadge = <span className="px-2 py-1 text-md text-xs bg-yellow-300 bg-opacity-90 rounded m-2 absolute top-0">In Space</span>
        card = <div id="astronaut-card-in-space" className="flex rounded-lg border-4 border-yellow-300">
                    <div className="flex-1 flex m-4 relative">
                        <img src={astronautData.profile_image} className="w-full border-2 border-blue-300" />
                        {inSpaceBadge}
                    </div>
                    <div className="flex-1 flex flex-col mr-4">
                        <div className="flex-1 py-3">
                            <h1 className="text-3xl font-bold mb-2">{astronautData.name}</h1>
                            <div className="mb-3">
                                {astronautData.status.name === 'Active' && <span className="text-xs bg-green-500 bg-opacity-75 rounded px-2 py-0.5">{astronautData.status.name}</span>}
                                {astronautData.status.name === 'Retired' && <span className="text-xs bg-red-500 bg-opacity-75 rounded px-2 py-0.5">{astronautData.status.name}</span>}
                            </div>
                            <div className="bg-gray-500 p-1 mb-1 w-fit rounded">
                                <p className="text-md md:text-sm"><em>Nationality:&nbsp;&nbsp;</em>{astronautData.nationality}</p>
                            </div>
                            <div className="bg-gray-500 p-1 mb-1 w-fit rounded">
                                <p className="text-md md:text-sm"><em>Affiliation:&nbsp;&nbsp;</em>{astronautData.agency.abbrev}</p>
                            </div>
                            <div className="bg-gray-500 p-1 mb-1 w-fit rounded">    
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