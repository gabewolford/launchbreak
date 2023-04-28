import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-5xl mb-4">404 ERROR</h1>
                    <h4 className="text-xl mb-6">Sorry, this page does not exist.</h4>
                    <button>
                        <Link to="/">
                            <p className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-lg font-bold">GO HOME</p>
                        </Link>
                    </button>   
                </div>
            </div>
        </>
    )
}