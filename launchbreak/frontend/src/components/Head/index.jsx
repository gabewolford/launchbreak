import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import accountLogo from '../../assets/account-circle.svg';


export default function Head({ authenticated, setAuthenticated }) {
    const navigate = useNavigate()

    function signout() {
        localStorage.removeItem("userToken")
        setAuthenticated(false)
        navigate('/')
        console.log(authenticated)
    }

    const defaultUserDropdown = (
    <>
        <Dropdown.Item className="hover:bg-transparent hover:text-orange-400 text-black hover-underline-animation">
            <Link to="/auth/login">
                Log In
            </Link>
        </Dropdown.Item>
        <Dropdown.Item className="hover:bg-transparent hover:text-orange-400 text-black hover-underline-animation">
            <Link to="/auth/signup">
                Create Account
            </Link>
        </Dropdown.Item>
    </>
    )

    const authenticatedUserDropdown = (
        <>
            <Dropdown.Header>
                <span className="block text-sm text-black font-bold">
                Welcome back!
                </span>
                {/* <span className="block truncate text-sm font-bold text-black">
                username
                </span> */}
            </Dropdown.Header>
            <Dropdown.Item className="hover:bg-transparent hover:text-orange-400 text-black hover-underline-animation">
                Account
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item 
                className=" hover:bg-transparent hover:text-orange-400 text-black hover-underline-animation"
                onClick={signout}
            >
                Sign out
            </Dropdown.Item>
        </>
    )
    

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
                    alt="Account" 
                    img={accountLogo}
                    className="scale-75"
                />  
            }
            >
            
            {authenticated && authenticatedUserDropdown}
            {!authenticated && defaultUserDropdown}

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
            {/* <Link 
                className="text-white bg-gray-500 bg-opacity-75 md:bg-transparent px-4 py-2 md:p-0 md:py-1 hover:text-orange-400 hover-underline-animation"
                to="/spacecraft">
                Spacecraft
            </Link> */}
            <Link 
                className="text-white bg-gray-500 bg-opacity-75 md:bg-transparent px-4 py-2 md:p-0 md:py-1 rounded-b-lg hover:text-orange-400 hover-underline-animation"
                to="/astronauts">
                Astronauts
            </Link>
        </Navbar.Collapse>
        </Navbar>
    )
}
