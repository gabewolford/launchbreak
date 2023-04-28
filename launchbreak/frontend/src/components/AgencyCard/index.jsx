import { Link } from 'react-router-dom'


export default function AgencyCard({ agencyData, setDetailPage }) {

    return (
        <>
            <Link 
                to={`/agencies/${agencyData.id}`}
                onClick={() => setDetailPage(agencyData)}
            >
            <div id="agency-card" className='mb-6 p-4 flex flex-col lg:flex-row bg-gray-600 rounded-lg'>
                <div className="lg:w-1/2 lg:mr-4">
                    {agencyData.logo_url && <img src={agencyData.logo_url} className="max-h-fill w-full lg:h-auto border-4 border-blue-300 p-6"/>}
                    {!agencyData.logo_url && <div className="lg:h-auto border-4 border-blue-300 p-6">No logo uploaded.</div>}
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                    <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold mb-2">{agencyData.name}</h1>
                        <p className='mb-3'>{agencyData.founding_year}</p>
                        <p className="">{agencyData.country_code}</p> 
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}