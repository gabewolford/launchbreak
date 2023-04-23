export default function AgencyCard({ agencyData }) {
    return (
        <>
            <div className="m-6 border-2 border-white">
                <img src={agencyData.logo_url}/>
                <h1 className="text-2xl text-white">{agencyData.name}</h1>
                <p>Founded: {agencyData.founding_year}</p>
                <p>{agencyData.country_code}</p>
            </div>
        </>
    )
}