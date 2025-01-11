import praspan from '/praspan2.webp'
import PricePraspan from '../components/Praspan/PricePraspan'
import RelatedProducts from '../components/Praspan/RelatedProducts'
import PriceRefloor from '../components/Praspan/PriceRefloor'
import PriceLinolit from '../components/Praspan/PriceLinolit'
import { Link } from 'react-router-dom'

const Praspan = () => {
    const handlePrint = () => {
        window.print()
    }

    return (
        <div className='p-6 mx-52 print:mx-0 print:p-0'>
            <div className='mb-6'>
                <div className='flex justify-between'>
                    <Link to='/'>
                        <img src={praspan} alt='Логотип компании' className='h-16 mb-4' />
                    </Link>

                    <div className='print:hidden'>
                        <button
                            onClick={handlePrint}
                            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
                        >
                            Печать
                        </button>
                    </div>
                </div>

                <h1 className='font-bold  mb-2 text-[15px]'>
                    ЗАВОД ПО ПРОИЗВОДСТВУ ПОЛИМЕРНЫХ ПОКРЫТИЙ И СУХИХ СМЕСЕЙ ДЛЯ ПОЛОВ
                </h1>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-lg font-bold'>ООО ТД Промышленные полы `&quot`</h2>
                        <p>Адрес: г. Москва, ул. Примерная, д. 10</p>
                        <p>Телефон: +7 (495) 123-45-67</p>
                        <p>Email: info@example.com</p>
                    </div>

                    <div>
                        <h2 className='text-lg font-bold'>ООО ТД Промышленные полы `&quot`</h2>
                        <p>Адрес: г. Москва, ул. Примерная, д. 10</p>
                        <p>Телефон: +7 (495) 123-45-67</p>
                        <p>Email: info@example.com</p>
                    </div>
                </div>
            </div>

            <header className='mb-6 text-center bg-green-600 text-white '>
                <h1 className='text-4xl font-bold mb-4'>Прайс-лист</h1>
            </header>

            <PricePraspan />

            <header className='mb-6 text-center'>
                <h2 className='text-3xl font-bold mb-4'>Сопутствующие товары</h2>
            </header>
            <RelatedProducts />

            <PriceRefloor />

            <PriceLinolit />
        </div>
    )
}

export default Praspan
