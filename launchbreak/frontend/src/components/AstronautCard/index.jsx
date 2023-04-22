export default function AstronautCard({ astronautData }) {
    return (
        <>
            <div className="m-6">
                <p>{astronautData.name}</p>
            </div>
        </>
    )
}