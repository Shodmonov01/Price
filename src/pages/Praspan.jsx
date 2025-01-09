import React from "react";
import praspan from '/praspan.png';
import ProductLegend from "../components/ProductLegend";


const Praspan = () => {
  const handlePrint = () => {
    window.print();
  };

  const staticData = [
    { category: "B", product: "PRASPAN PU-P150", price1: "1,005", price2: "1,035", price3: "1,065", price4: "1,156", minBatch: "20" },
    { category: "B", product: "PRASPAN EP-P100", price1: "957", price2: "986", price3: "1,014", price4: "1,101", minBatch: "20" },
    { category: "C", product: "PRASPAN EP-C150", price1: "547", price2: "563", price3: "580", price4: "629", minBatch: "30" },
    // Добавьте больше строк по необходимости
  ];

  return (
    <div className="p-6">
      {/* Лого и данные компании */}
      <div className="flex items-center mb-6">
        <img
          src={praspan} // Укажите путь к логотипу
          alt="Логотип компании"
          className="h-16 mr-4"
        />
        <div>
          <h2 className="text-lg font-bold">ООО ТД Промышленные полы `&quot`</h2>
          <p>Адрес: г. Москва, ул. Примерная, д. 10</p>
          <p>Телефон: +7 (495) 123-45-67</p>
          <p>Email: info@example.com</p>
        </div>
      </div>

      {/* Хедер */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Прайс-лист</h1>
        <p className="text-xl">13.12.2024</p>
        <p className="mt-2">Цена без скидки, цена конечная</p>
      </header>

      <ProductLegend/>

      {/* Таблица */}
      <table className="table-auto border-collapse border border-gray-300 w-full mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Категория</th>
            <th className="border border-gray-300 px-4 py-2">Название продукта</th>
            <th className="border border-gray-300 px-4 py-2">Цена от 221 до 1 паллет (руб)</th>
            <th className="border border-gray-300 px-4 py-2">Цена от 101 до 220 кг (руб)</th>
            <th className="border border-gray-300 px-4 py-2">Цена до 100 кг (руб)</th>
            <th className="border border-gray-300 px-4 py-2">Мин. партия (кг)</th>
          </tr>
        </thead>
        <tbody>
          {staticData.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{row.category}</td>
              <td className="border border-gray-300 px-4 py-2">{row.product}</td>
              <td className="border border-gray-300 px-4 py-2">{row.price1}</td>
              <td className="border border-gray-300 px-4 py-2">{row.price2}</td>
              <td className="border border-gray-300 px-4 py-2">{row.price3}</td>
              <td className="border border-gray-300 px-4 py-2">{row.minBatch}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Инструкция */}
      <footer className="text-center text-sm text-gray-600 mt-4">
        <p>Директор ООО "ТД "Промышленные полы"</p>
        <p>Рублев А.В.</p>
        <p>Минимальная сумма заказа нестандартного цвета: от 30 000 руб.</p>
      </footer>

      {/* Кнопка для печати */}
      <div className="mt-6 text-center">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Печать
        </button>
      </div>
    </div>
  );
};

export default Praspan;
