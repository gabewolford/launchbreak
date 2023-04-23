export default function AstronautCard({ astronautData }) {
    return (
        <>
            <div className="m-6 border-2 border-white">
                <img src={astronautData.profile_image}/>
                <h1 className="text-2xl font-bold">{astronautData.name}</h1>
                <p>{astronautData.bio}</p>
            </div>
        </>
    )
}