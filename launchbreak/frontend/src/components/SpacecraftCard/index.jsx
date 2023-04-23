export default function SpacecraftCard({ spacecraftData }) {
    return (
        <>
            <div className="m-6 border-2 border-white">
                <img src={spacecraftData.spacecraft_config.image_url}/>
                <h1 className="text-xl font-bold text-orange-500">{spacecraftData.name}</h1>
                <p>{spacecraftData.description}</p>
            </div>
        </>
    )
}