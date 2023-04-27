import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { Link, NavLink } from "react-router-dom"


export default function Head() {
    return (
        <Navbar
        fluid={true}
        id="nav"
        >
        <Link to="/">
            <span className="self-center ml-2 text-2xl font-bold text-orange-400 hover-underline-animation">
            Launchbreak
            </span>
        </Link>

        <div className="flex md:order-2 mb-1">
            <Dropdown
            arrowIcon={false}
            inline={true}
            className="border-grey rounded-sm"
            label={
                <Avatar 
                    alt="User settings" 
                    img="https://media.licdn.com/dms/image/D5603AQEYpl9aHSV4mg/profile-displayphoto-shrink_400_400/0/1676919210013?e=1687392000&v=beta&t=tRPAP6QTHC48o5wyaMGraZ_LfhhdbxeA8jUZSvGHRDs" 
                    rounded={true}
                    className="mr-2"
                />
                    
            }
            >
            <Dropdown.Header>
                <span className="block text-sm text-black">
                Welcome back,
                </span>
                <span className="block truncate text-sm font-bold text-black">
                username
                </span>
            </Dropdown.Header>
            <Dropdown.Item className="hover:bg-transparent hover:text-orange-400 text-black hover-underline-animation">
                Account
            </Dropdown.Item>
            <Dropdown.Item className="hover:bg-transparent hover:text-orange-400 text-black hover-underline-animation">
                Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className=" hover:bg-transparent hover:text-orange-400 text-black hover-underline-animation">
                Sign out
            </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse id="mobile-nav" className="xs:ml-4">
            <Link 
                className="text-white bg-gray-500 bg-opacity-75 md:bg-transparent px-4 py-2 md:p-0 md:py-1 rounded-t-lg hover:text-orange-400 hover-underline-animation"
                to="/launches">
                Launches
            </Link>
            <Link 
                className="text-white bg-gray-500 bg-opacity-75 md:bg-transparent px-4 py-2 md:p-0 md:py-1 hover:text-orange-400 hover-underline-animation"
                to="/news">
                News
            </Link>
            <Link 
                className="text-white bg-gray-500 bg-opacity-75 md:bg-transparent px-4 py-2 md:p-0 md:py-1 hover:text-orange-400 hover-underline-animation"
                to="/agencies">
                Agencies
            </Link>
            <Link 
                className="text-white bg-gray-500 bg-opacity-75 md:bg-transparent px-4 py-2 md:p-0 md:py-1 hover:text-orange-400 hover-underline-animation"
                to="/spacecraft">
                Spacecraft
            </Link>
            <Link 
                className="text-white bg-gray-500 bg-opacity-75 md:bg-transparent px-4 py-2 md:p-0 md:py-1 rounded-b-lg hover:text-orange-400 hover-underline-animation"
                to="/astronauts">
                Astronauts
            </Link>
        </Navbar.Collapse>
        </Navbar>
    )
}
