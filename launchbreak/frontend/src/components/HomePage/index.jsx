import './styles.css'
import { Helmet } from 'react-helmet'

export default function HomePage({ launchData, recentNewsData }) {
    return (
        <>
        <Helmet>
            <title>Launchbreak | Home</title>
        </Helmet>
        <div className="mx-6 md:mx-12 lg:w-[70vw] lg:mx-auto">
            <h1 className="mt-6 mb-12 text-3xl font-bold text-white">Next Launch</h1>
                {launchData}
            <hr className='mt-12'/>
            <h1 className="mt-12 mb-12 text-3xl font-bold text-white">Recent News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                {recentNewsData}
            </div>
                
        </div>
            
        </>
    )
}