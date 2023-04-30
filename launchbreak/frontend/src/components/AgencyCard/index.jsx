import { Link } from 'react-router-dom'
import { findFlagUrlByIso3Code } from 'country-flags-svg'


export default function AgencyCard({ agencyData, setDetailPage }) {

    return (
        <>
            <Link 
                to={`/agencies/${agencyData.id}`}
                onClick={() => setDetailPage(agencyData)}
            >
            <div id="agency-card" className='mb-6 p-4 flex flex-col lg:flex-row bg-gray-600 rounded-lg lg:max-h-[300px]'>
                <div className="lg:w-1/2 lg:mr-4 relative">
                    {agencyData.logo_url && <img src={agencyData.logo_url} className="lg:max-h-[250px] w-auto lg:h-auto border-4 border-blue-300 p-6"/>}
                    {!agencyData.logo_url && <div className="lg:h-auto border-4 border-blue-300 p-6">No logo uploaded.</div>}
                    <img 
                            src={findFlagUrlByIso3Code(agencyData.country_code)} 
                            alt={agencyData.country_code} 
                            className='max-w-[15%] absolute top-0 left-0 m-3'
                        /> 
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold">{agencyData.name}</h1>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}