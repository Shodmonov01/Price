import { useEffect, useState } from 'react'
import axios from '../../api/axios'

function PriceLinolit() {
    const [additionalData, setAdditionalData] = useState([])
    const [additionalData2, setAdditionalData2] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/price/list/material/linolit/')
                setAdditionalData(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/fillers/linolit/')
                setAdditionalData2(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])
    return (
        <div>
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
                    {additionalData.map((item, index) => (
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


            <h1 className='mt-20 text-center font-bold'>Наполнители</h1>


            <table className="w-full border-collapse border border-black mt-3">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-black px-4 py-2 text-center text-[14px]" rowSpan="2">
                            Название продукта
                        </th>
                        <th className="border border-black px-4 py-2 text-center text-[14px]" rowSpan="2">
                            Цена за 1000 кг. в Российских рублях с НДС
                        </th>
                        <th className="border border-black px-4 py-2 text-center text-[14px]" colSpan="1">
                            Крупность наполнителя
                        </th>
                    </tr>
                    <tr>
                        <th className="border border-black px-4 py-2 text-center text-[12px]">
                            (толщина до 10 мм)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {additionalData2.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-black px-4 py-2 text-[14px] text-center">{item.name}</td>
                            <td className="border border-black px-4 py-2 text-[14px] text-center">{item.size_filler}</td>
                            <td className="border border-black px-4 py-2 text-[14px] text-center">Цена по запросу</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PriceLinolit
