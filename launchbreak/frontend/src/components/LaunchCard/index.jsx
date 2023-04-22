export default function LaunchCard({ launchData }) {
    return (
        <>
            <div className="m-6">
                <img src={launchData.image}/>
                <h1>{launchData.name}</h1>
                <p>{launchData.launch_service_provider.name}</p>
                <p>{launchData.pad.location.name}</p>
                <p>{launchData.net}</p>
            </div>
        </>
    )
}
