import { useEffect, useState } from 'react'
import axios from '../../api/axios'

function RelatedProducts() {
    const [additionalData, setAdditionalData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/product/praspan/')
                setAdditionalData(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])
    return (
        <div className='mx-20'>
            <table className='w-full border-collapse border border-black'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='border border-black px-4 py-2 text-[12px]'>ID</th>
                        <th className='border border-black px-4 py-2 text-[12px]'>Название</th>
                        <th className='border border-black px-4 py-2 text-[12px]'>Цена</th>
                        <th className='border border-black px-4 py-2 text-[12px]'>Единица измерения</th>
                    </tr>
                </thead>
                <tbody>
                    {additionalData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className='border border-black px-4 py-2 text-[12px]'>{item.id}</td>
                            <td className='border border-black px-4 py-2 text-[12px]'>{item.name}</td>
                            <td className='border border-black px-4 py-2 text-[12px]'>{item.price}</td>
                            <td className='border border-black px-4 py-2 text-[12px]'>{item.unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RelatedProducts
