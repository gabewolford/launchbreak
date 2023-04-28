export default function SpacecraftPage({ spacecraftList }) {
    return (
        <>
            <div className="mx-12">
                <h1 className="mt-6 mb-12 text-3xl font-bold text-white">Spacecraft</h1>
                    <div className="grid grid-cols-1 lg:w-[70vw] mx-auto">
                        {spacecraftList}
                    </div>
            </div>
        </>
    )
}