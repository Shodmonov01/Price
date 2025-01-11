import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import praspan from '/praspan.png'
import linolit from '/linolit.png'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col'>
            <Header />
            <main className='flex-grow flex flex-col items-center justify-center text-center p-6'>
                <h2 className='text-3xl font-bold text-gray-800 mb-6'>Выберите прайс</h2>

                <div className='flex justify-center items-center gap-5'>
                    <a
                        href='praspan'
                        className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl w-full sm:w-64 text-center'
                        data-aos='fade-right'
                    >
                        <img src={praspan} alt='Praspan' className='rounded-lg' />
                    </a>

                    <a
                        href='linolit'
                        className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl w-full sm:w-64 text-center'
                        data-aos='fade-left'
                    >
                        <img src={linolit} alt='Linolit' className='rounded-lg' />
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home
