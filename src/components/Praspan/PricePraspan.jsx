import { useEffect, useState } from 'react'
import axios from '../../api/axios'

function PricePraspan() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/price/list/praspan/')
                setData(response.data)
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
        </div>
    )
}

export default PricePraspan
