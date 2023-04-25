import { Link } from "react-router-dom"


export default function AstronautCard({ astronautData, setDetailPageId }) {
    return (
        <>
            <Link 
                to={`/astronaut/${astronautData.id}`}
                onClick={() => setDetailPageId(astronautData.id)}
            >
            <div className="m-6 border-2 border-white">
                <img src={astronautData.profile_image}/>
                <h1 className="text-2xl font-bold">{astronautData.name}</h1>
                <p>{astronautData.bio}</p>
            </div>
            </Link>
        </>
    )
}