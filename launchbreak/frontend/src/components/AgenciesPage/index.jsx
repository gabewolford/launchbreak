import { useState, useEffect } from "react"
import { getData } from "../../../utils/api"
import AgencyCard from "../AgencyCard"


export default function AgenciesPage() {
    const [agencies, setAgencies] = useState([])

    useEffect(() => {
        getData('https://lldev.thespacedevs.com/2.2.0/agencies/')
            .then(res => {
                setAgencies(res.results)
            })
    }, [])


    let agencyList = <p className="text-white">Retrieving space agency data...</p>

    if (agencies.length > 0) {
        agencyList = agencies.map((agency, i) => <AgencyCard key={i} agencyData={agency} />)
    } 

    return (
        <>
            <div className="">
                {agencyList}
            </div>
            
        </>
    )
}
