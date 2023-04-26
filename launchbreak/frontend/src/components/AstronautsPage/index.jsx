export default function AstronautsPage({ astronautList }) {

    return (
        <>
        <div className="lg:mx-12">
            <h1 className="m-6 text-3xl font-bold text-white">Astronauts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 gap-5">
                    {astronautList}
                </div>
        </div>
            <div>
                
            </div>
            
        </>
    )
}

