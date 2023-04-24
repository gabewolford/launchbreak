import { Footer } from "flowbite-react"

export default function Foot() {
    return (
        <Footer 
            container={true}
            id="foot"
        >
        <Footer.Copyright
            href="#"
            by="Launchbreak™"
            year={2023}
        />
        <Footer.LinkGroup>
            <Footer.Link 
            href="#"
            className="mx-2"
            >
            Privacy Policy
            </Footer.Link>
            <Footer.Link 
            href="#"
            className="mx-2"
            >
            Contact
            </Footer.Link>
        </Footer.LinkGroup>
        </Footer>
    )
}