export default function SpacecraftCard({ spacecraftData }) {
    return (
        <>
            <div className="m-6">
                <p className="text-white">{spacecraftData.name}</p>
            </div>
        </>
    )
}