export default function SpacecraftCard({ spacecraftData }) {
    return (
        <>
            <div className="m-6">
                <p>{spacecraftData.name}</p>
            </div>
        </>
    )
}