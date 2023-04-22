import { useState, useEffect } from "react"
import { getData } from "../../../utils/api"
import SpacecraftCard from "../SpacecraftCard"


export default function SpacecraftPage() {
    const [spacecrafts, setSpacecraft] = useState([])

    useEffect(() => {
        getData('https://lldev.thespacedevs.com/2.2.0/spacecraft/')
            .then(res => {
                setSpacecraft(res.results)
            })
    }, [])


    let spacecraftList = <p>Retrieving spacecraft data...</p>

    if (spacecrafts.length > 0) {
        spacecraftList = spacecrafts.map((spacecraft, i) => <SpacecraftCard key={i} spacecraftData={spacecraft} />)
    } 

    return (
        <>
            <div className="">
                {spacecraftList}
            </div>
            
        </>
    )
}