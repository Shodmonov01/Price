// import { useEffect, useState } from 'react'
// import axios from '../../api/axios'

// function PriceRefloor() {
//     const [floor1Data, setFloor1Data] = useState([])
//     const [floor2Data, setFloor2Data] = useState([])
//     const [floor3Data, setFloor3Data] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('/price/list/floor/table1/')
//                 setFloor1Data(response.data)
//                 console.log(response.data)
//             } catch (err) {
//                 console.log(err)
//             }
//         }

//         fetchData()
//     }, [])
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('/price/list/floor/table2/')
//                 setFloor1Data(response.data)
//                 console.log(response.data)
//             } catch (err) {
//                 console.log(err)
//             }
//         }

//         fetchData()
//     }, [])
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('/price/list/floor/table3/')
//                 setFloor1Data(response.data)
//                 console.log(response.data)
//             } catch (err) {
//                 console.log(err)
//             }
//         }

//         fetchData()
//     }, [])
//     return (
//         <div>
//             <table className='w-full border-collapse border border-black'>
//                 <thead className='bg-gray-100'>
//                     <tr>
//                         <th className='border border-black  py-1 text-center text-[12px]' rowSpan='2'>
//                             Кате гория
//                         </th>
//                         <th className='border border-black px-4 py-2   text-[12px]' rowSpan='2'>
//                             Название продукта
//                         </th>
//                         <th className='border border-black px-4 py-2 h-3 text-[12px]' colSpan='4'>
//                             Цена за 1 кг. в Российских рублях с НДС
//                         </th>
//                         <th className='border border-black px-4 py-2  text-[12px]' rowSpan='2'>
//                             Минимальная партия (кратность), кг
//                         </th>
//                     </tr>
//                     <tr>
//                         <th className='border border-black px-4 py-2  h-8 text-[12px]'>Кратно паллетам</th>
//                         <th className='border border-black px-4 py-2  h-8 text-[12px]'>От 221 до 1 паллета</th>
//                         <th className='border border-black px-4 py-2  h-8 text-[12px]'>От 101 до 220 кг</th>
//                         <th className='border border-black px-4 py-2  h-8 text-[12px]'>До 100 кг</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {floor1Data.map((item, index) => (
//                         <tr key={index}>
//                             <td className='border border-black px-4 py-2 w-2   text-[12px]'>{item.category}</td>
//                             <td className='border border-black px-4 py-2  text-[10px] '>{item.name}</td>
//                             <td className='border border-black px-4 py-2  text-[12px]'>{item.multiples_pallets}</td>
//                             <td className='border border-black px-4 py-2  text-[12px]'>{item.from_221_to_1_pallet}</td>
//                             <td className='border border-black px-4 py-2  text-[12px]'>
//                                 {item.from_101_to_220_pallet}
//                             </td>
//                             <td className='border border-black px-4 py-2  text-[12px]'>{item.up_to_100_kg}</td>
//                             <td className='border border-black px-4 py-2  w-7 text-[12px]'>{item.minimum_lot}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default PriceRefloor


import { useEffect, useState } from 'react';
import axios from '../../api/axios';

// Компонент для отображения таблицы
const PriceTable = ({ data }) => (
    <table className='w-full border-collapse border border-black mb-6'>
        <thead className='bg-gray-100'>
            <tr>
                <th className='border border-black py-1 text-center text-[12px]' rowSpan='2'>Категория</th>
                <th className='border border-black px-4 py-2 text-[12px]' rowSpan='2'>Название продукта</th>
                <th className='border border-black px-4 py-2 text-[12px]' colSpan='4'>
                    Цена за 1 кг. в Российских рублях с НДС
                </th>
                <th className='border border-black px-4 py-2 text-[12px]' rowSpan='2'>Минимальная партия (кратность), кг</th>
            </tr>
            <tr>
                <th className='border border-black px-4 py-2 text-[12px]'>Кратно паллетам</th>
                <th className='border border-black px-4 py-2 text-[12px]'>От 221 до 1 паллета</th>
                <th className='border border-black px-4 py-2 text-[12px]'>От 101 до 220 кг</th>
                <th className='border border-black px-4 py-2 text-[12px]'>До 100 кг</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td className='border border-black px-4 py-2 text-[12px]'>{item.category}</td>
                    <td className='border border-black px-4 py-2 text-[10px]'>{item.name}</td>
                    <td className='border border-black px-4 py-2 text-[12px]'>{item.multiples_pallets}</td>
                    <td className='border border-black px-4 py-2 text-[12px]'>{item.from_221_to_1_pallet}</td>
                    <td className='border border-black px-4 py-2 text-[12px]'>{item.from_101_to_220_pallet}</td>
                    <td className='border border-black px-4 py-2 text-[12px]'>{item.up_to_100_kg}</td>
                    <td className='border border-black px-4 py-2 text-[12px]'>{item.minimum_lot}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

function PriceRefloor() {
    const [floor1Data, setFloor1Data] = useState([]);
    const [floor2Data, setFloor2Data] = useState([]);
    const [floor3Data, setFloor3Data] = useState([]);

    useEffect(() => {
        const fetchTableData = async (url, setData) => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTableData('/price/list/floor/table1/', setFloor1Data);
        fetchTableData('/price/list/floor/table2/', setFloor2Data);
        fetchTableData('/price/list/floor/table3/', setFloor3Data);
    }, []);

    return (
        <div>
            <PriceTable data={floor1Data} />
            <PriceTable data={floor2Data} />
            <PriceTable data={floor3Data} />
        </div>
    );
}

export default PriceRefloor;
