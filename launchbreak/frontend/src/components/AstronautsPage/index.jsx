import { useState, useEffect } from "react"
import { getData } from "../../../utils/api"
import AstronautCard from "../AstronautCard"


export default function AstronautsPage() {
    const [astronauts, setAstronauts] = useState([])

    useEffect(() => {
        getData('https://lldev.thespacedevs.com/2.2.0/astronaut/')
            .then(res => {
                setAstronauts(res.results)
            })
    }, [])


    let astronautList = <p className="text-white">Retrieving astronaut data...</p>

    if (astronauts.length > 0) {
        astronautList = astronauts.map((astronaut, i) => <AstronautCard key={i} astronautData={astronaut} />)
    } 

    return (
        <>
            <div className="">
                {astronautList}
            </div>
            
        </>
    )
}

