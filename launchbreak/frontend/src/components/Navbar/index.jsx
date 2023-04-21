export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-500 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">

                    <a className="text-white font-semibold text-2xl tracking-tight hover:text-orange-300 hover:cursor-pointer">Launchbreak</a>
            </div>
            <div className="block md:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-end md:flex md:items-center md:w-auto">
                <div className="text-sm md:flex-grow w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div className="mr-4">
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-orange-300 mr-4">
                            Launches
                        </a>
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-orange-300 mr-4">
                            News
                        </a>
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-orange-300">
                            Agencies
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none rounded text-white hover:border-transparent bg-orange-500 hover:bg-orange-400 hover:text-white mt-4 md:mt-0">
                            CTA
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}