export default function AstronautCard({ astronautData }) {
    return (
        <>
            <div className="m-6">
                <p className="text-white">{astronautData.name}</p>
            </div>
        </>
    )
}