export default function AgencyCard({ agencyData }) {
    return (
        <>
            <div className="m-6">
                <p className="text-white">{agencyData.name}</p>
            </div>
        </>
    )
}