export default function LaunchCard({ launchData }) {

    return (
        <>
            <div className="m-6 border-2 border-white">
                <img src={launchData.image}/>
                <h1 className="text-lg font-bold">{launchData.name}</h1>
                <p>{launchData.launch_service_provider.name}</p>
                <p>{launchData.pad.location.name}</p>
                <p className="text-sm text-gray-400">{Date(launchData.net)}</p>
            </div>
        </>
    )
}
