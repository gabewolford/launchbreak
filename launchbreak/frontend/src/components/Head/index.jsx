import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { NavLink } from "react-router-dom"


export default function Head() {
    return (
        <Navbar
        fluid={true}
        id="nav"
        >
        <NavLink to="/">
            <span className="self-center text-3xl font-bold text-white">
            Launchbreak
            </span>
        </NavLink>

        <div className="flex md:order-2 mb-1">
            <Dropdown
            arrowIcon={true}
            inline={true}
            className="border-grey rounded-sm"
            label={
                <Avatar 
                    alt="User settings" 
                    img="https://media.licdn.com/dms/image/D5603AQEYpl9aHSV4mg/profile-displayphoto-shrink_400_400/0/1676919210013?e=1687392000&v=beta&t=tRPAP6QTHC48o5wyaMGraZ_LfhhdbxeA8jUZSvGHRDs" 
                    rounded={true}/>
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
            <Dropdown.Item className="hover:bg-transparent hover:text-orange-400 text-black">
                Account
            </Dropdown.Item>
            <Dropdown.Item className="hover:bg-transparent hover:text-orange-400 text-black">
                Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className=" hover:bg-transparent hover:text-orange-400 text-black">
                Sign out
            </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link 
                className="text-white"
                href="/launches">
                Launches
            </Navbar.Link>
            <Navbar.Link 
                className="text-white"
                href="/news">
                News
            </Navbar.Link>
            <Navbar.Link 
                className="text-white"
                href="/agencies">
                Agencies
            </Navbar.Link>
            <Navbar.Link 
                className="text-white"
                href="/spacecraft">
                Spacecraft
            </Navbar.Link>
            <Navbar.Link 
                className="text-white"
                href="/astronauts">
                Astronauts
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    )
}
