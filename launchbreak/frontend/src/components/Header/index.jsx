import { NavLink } from "react-router-dom"


export default function Header() {
    return (

        <nav className="flex items-center justify-between flex-wrap p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <NavLink 
                    to="/"
                    className="text-white font-semibold text-2xl tracking-tight hover:text-orange-300 hover:cursor-pointer"
                >
                    <p>Launchbreak</p>
                </NavLink>
            </div>
            <div className="block md:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-end md:flex md:items-center md:w-auto">
                <div className="text-sm md:flex-grow w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div className="mr-4">
                        <ul>
                        <NavLink 
                            to="/launches"
                            className="block mt-4 font-semibold md:inline-block md:mt-0 text-white hover:text-orange-300 mx-4"
                        >
                            <li>Launches</li>
                        </NavLink>
                        <NavLink 
                            to="/news"
                            className="block mt-4 font-semibold md:inline-block md:mt-0 text-white hover:text-orange-300 mx-4"
                        >
                            <li>News</li>
                        </NavLink>
                        <NavLink 
                            to="/agencies"
                            className="block mt-4 font-semibold md:inline-block md:mt-0 text-white hover:text-orange-300 mx-4"
                        >
                            <li>Agencies</li>
                        </NavLink>
                        <NavLink 
                            to="/spacecraft"
                            className="block mt-4 font-semibold md:inline-block md:mt-0 text-white hover:text-orange-300 mx-4"
                        >
                            <li>Spacecraft</li>
                        </NavLink>
                        <NavLink 
                            to="/astronauts"
                            className="block mt-4 font-semibold md:inline-block md:mt-0 text-white hover:text-orange-300 mx-4"
                        >
                            <li>Astronauts</li>
                        </NavLink>
                        <NavLink to="/account">
                            <img src="../src/assets/space-station.svg" alt="account" className="block mt-4 font-semibold md:inline-block md:mt-0 text-white hover:text-orange-300 ml-4"/>
                        </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}