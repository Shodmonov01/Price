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
                        <h2 className='text-lg font-bold'>ООО ТД Промышленные полы </h2>
                        <p className='text-sm'>
                            620036, Свердловская область, г. Екатеринбург,
                            <br /> ул. Суходольская, соор. 197, офис 503
                        </p>
                        <p>Тел: 8 800 700 62 44</p>
                        <p>Email: info@praspan.ru</p>
                        <a href='http://www.praspan.ru' target='_blank' rel='noopener noreferrer' className=''>
                            www.praspan.ru
                        </a>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-sm'>
                            <strong>ОГРН:</strong> 1196658077758
                        </p>
                        <p className='text-sm'>
                            <strong>ИНН/КПП:</strong> 6658530142 / 665801001
                        </p>
                        <p className='text-sm'>
                            <strong>Р/сч:</strong> 40702810338410000343 в <br /> Филиале «ЕКАТЕРИНБУРГСКИЙ» АО
                            «АЛЬФА-БАНК»
                        </p>
                        <p className='text-sm'>
                            <strong>К/сч:</strong> 30101810100000000964 <strong>БИК:</strong> 046577964
                        </p>
                    </div>
                </div>
            </div>

            <header className='mb-6 text-center bg-green-500 text-white py-5'>
                <h1 className='text-2xl font-bold  uppercase'>Прайс-лист praspan</h1>
            </header>

            <PricePraspan />

            <div className='pt-5 pb-8 text-center'>
                <p className='font-bold'>
                    * Минимальная сумма заказа краски PRASPAN EP, PU, AC нестандартного цвета (Тип 3) - от 30 000 руб.
                </p>
                <p>
                    Тип 1: 7001 - серый; 7035 - светло-серый; 1001 - бежевый; 7036 - серый пластик; 7032 - серый галька;
                </p>
                <p>
                    Тип 2: 9010 - белый; 9004 - чёрный; 6001 - зеленый (резеда); 3013 - красный Тип 3: все цвета по RAL,
                    которые не вошли в тип 1 и 2.
                </p>
                <p className='pt-10 font-bold'> ***PRASPAN EP-C200 AS/300 AS Тип 1: 7042 - светло-серый.</p>
            </div>

            <header className='mb-6 text-center'>
                <h2 className='text-[18px] font-bold mb-1 print:mt-24'>Сопутствующие товары</h2>
            </header>
            <RelatedProducts />

            <header className='mb-6 text-center bg-blue-400 text-white py-5 mt-32'>
                <h1 className='text-2xl font-bold  uppercase'>Прайс-лист refloor</h1>
            </header>

            <PriceRefloor />


            <header className='mb-6 text-center bg-red-600 text-white py-5 mt-32 print:mt-[420px]'>
                <h1 className='text-2xl font-bold  uppercase'>Прайс-лист материалов linolit</h1>
            </header>

            <PriceLinolit />
        </div>
    )
}

export default Praspan
