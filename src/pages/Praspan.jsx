import { useEffect, useState } from 'react'
import axios from '../api/axios'
import praspan from '/praspan2.webp'

const Praspan = () => {
    const [data, setData] = useState([])
    const [additionalData, setAdditionalData] = useState([])
    const [floor1Data, setFloor1Data] = useState([])
    const [floor2Data, setFloor2Data] = useState([])
    const [floor3Data, setFloor3Data] = useState([])

    const [error, setError] = useState(null)

    const handlePrint = () => {
        window.print()
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/price/list/praspan/')
                setData(response.data)
            } catch (err) {
                setError(err.message)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/product/praspan/')
                setAdditionalData(response.data)
            } catch (err) {
                setError(err.message)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/price/list/floor/table1/')
                setFloor1Data(response.data)
                console.log(response.data)
            } catch (err) {
                setError(err.message)
            }
        }

        fetchData()
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/price/list/floor/table2/')
                setFloor2Data(response.data)
                console.log(response.data)
            } catch (err) {
                setError(err.message)
            }
        }

        fetchData()
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/price/list/floor/table3/')
                setFloor3Data(response.data)
                console.log(response.data)
            } catch (err) {
                setError(err.message)
            }
        }

        fetchData()
    }, [])

    return (
        <div className='p-6 mx-52 print:mx-0 print:p-0'>
            <div className='mb-6'>
                <div className='flex justify-between'>
                    <img src={praspan} alt='Логотип компании' className='h-16 mb-4' />

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
                <p className='mt-2 print:text-white'>Цена без скидки, цена конечная</p>
            </header>

            <table className='w-full border-collapse border border-black'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='border border-black  py-1 text-center text-[12px]' rowSpan='2'>
                            Кате гория
                        </th>
                        <th className='border border-black px-4 py-2   text-[12px]' rowSpan='2'>
                            Название продукта
                        </th>
                        <th className='border border-black px-4 py-2 h-3 text-[12px]' colSpan='4'>
                            Цена за 1 кг. в Российских рублях с НДС
                        </th>
                        <th className='border border-black px-4 py-2  text-[12px]' rowSpan='2'>
                            Минимальная партия (кратность), кг
                        </th>
                    </tr>
                    <tr>
                        <th className='border border-black px-4 py-2  h-8 text-[12px]'>Кратно паллетам</th>
                        <th className='border border-black px-4 py-2  h-8 text-[12px]'>От 221 до 1 паллета</th>
                        <th className='border border-black px-4 py-2  h-8 text-[12px]'>От 101 до 220 кг</th>
                        <th className='border border-black px-4 py-2  h-8 text-[12px]'>До 100 кг</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className='border border-black px-4 py-2 w-2   text-[12px]'>{item.category}</td>
                            <td className='border border-black px-4 py-2  text-[10px] '>{item.name}</td>
                            <td className='border border-black px-4 py-2  text-[12px]'>{item.multiples_pallets}</td>
                            <td className='border border-black px-4 py-2  text-[12px]'>{item.from_221_to_1_pallet}</td>
                            <td className='border border-black px-4 py-2  text-[12px]'>
                                {item.from_101_to_220_pallet}
                            </td>
                            <td className='border border-black px-4 py-2  text-[12px]'>{item.up_to_100_kg}</td>
                            <td className='border border-black px-4 py-2  w-7 text-[12px]'>{item.minimum_lot}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <header className='mb-6 text-center'>
                <h2 className='text-3xl font-bold mb-4'>Сопутствующие товары</h2>
            </header>
            <table className='w-full border-collapse border border-black'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='border border-black px-4 py-2'>ID</th>
                        <th className='border border-black px-4 py-2'>Название</th>
                        <th className='border border-black px-4 py-2'>Цена</th>
                        <th className='border border-black px-4 py-2'>Единица измерения</th>
                    </tr>
                </thead>
                <tbody>
                    {additionalData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className='border border-black px-4 py-2'>{item.id}</td>
                            <td className='border border-black px-4 py-2'>{item.name}</td>
                            <td className='border border-black px-4 py-2'>{item.price}</td>
                            <td className='border border-black px-4 py-2'>{item.unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className='w-full border-collapse border border-black'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='border border-black px-4 py-2' rowSpan='2'>
                            Категория
                        </th>
                        <th className='border border-black px-4 py-2' rowSpan='2'>
                            Название продукта
                        </th>
                        <th className='border border-black px-4 py-2' colSpan='4'>
                            Цена за 1 кг. в Российских рублях с НДС
                        </th>
                        <th className='border border-black px-4 py-2' rowSpan='2'>
                            Минимальная партия (кратность), кг
                        </th>
                    </tr>
                    <tr>
                        <th className='border border-black px-4 py-2'>Кратно паллетам</th>
                        <th className='border border-black px-4 py-2'>От 221 до 1 паллета</th>
                        <th className='border border-black px-4 py-2'>От 101 до 220 кг</th>
                        <th className='border border-black px-4 py-2'>До 100 кг</th>
                    </tr>
                </thead>
                <tbody>
                    {floor1Data.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className='border border-black px-4 py-2'>{item.category}</td>
                            <td className='border border-black px-4 py-2'>{item.name}</td>
                            <td className='border border-black px-4 py-2'>{item.multiples_pallets}</td>
                            <td className='border border-black px-4 py-2'>{item.from_221_to_1_pallet}</td>
                            <td className='border border-black px-4 py-2'>{item.from_101_to_220_pallet}</td>
                            <td className='border border-black px-4 py-2'>{item.up_to_100_kg}</td>
                            <td className='border border-black px-4 py-2'>{item.minimum_lot}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

           
        </div>
    )
}

export default Praspan
