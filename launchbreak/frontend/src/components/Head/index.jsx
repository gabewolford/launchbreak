import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { NavLink } from "react-router-dom"


export default function Head() {
    return (
        <Navbar
        fluid={true}
        id="nav"
        >
        <NavLink to="/">
            <span className="self-center ml-2 text-2xl font-bold text-orange-400">
            Launchbreak
            </span>
        </NavLink>

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
        <Navbar.Collapse className="mx-4">
            <Navbar.Link 
                className="text-white hover:text-orange-400"
                href="/launches">
                Launches
            </Navbar.Link>
            <Navbar.Link 
                className="text-white hover:text-orange-400"
                href="/news">
                News
            </Navbar.Link>
            <Navbar.Link 
                className="text-white hover:text-orange-400"
                href="/agencies">
                Agencies
            </Navbar.Link>
            <Navbar.Link 
                className="text-white hover:text-orange-400"
                href="/spacecraft">
                Spacecraft
            </Navbar.Link>
            <Navbar.Link 
                className="text-white hover:text-orange-400"
                href="/astronauts">
                Astronauts
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    )
}
