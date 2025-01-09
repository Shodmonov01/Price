
const ProductLegend = () => {
  return (
    <div className="relative p-6">
      <h2 className="text-center text-xl font-bold mb-4">
        Легенда кодировки названий для <span className="italic">«текучих»</span> продуктов:
      </h2>

      <div className="text-center mb-8 relative">
        <span className="text-green-600 text-2xl font-bold">PRASPAN® UP-C301 CP</span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 h-16">
          <div className="w-px bg-gray-400 h-full mx-auto"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 relative">
        <div className="text-right pr-4 border-r border-gray-300 relative">
          <div className="absolute top-0 right-0 transform translate-x-1/2 h-full border-r border-gray-400"></div>
          <div className="mb-4 relative">
            <p className="font-bold">Название бренда</p>
            <p>под которым выпускается продукт</p>
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gray-400">
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-l border-gray-400 transform rotate-45"></div>
            </div>
          </div>
          <div className="mb-4 relative">
            <p className="font-bold">Использование цвета</p>
            <p>(0 - нет пигмента, 1 - Пигмент 1 типа...)</p>
            
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gray-400">
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-l border-gray-400 transform rotate-45"></div>
            </div>
          </div>
          <div className="relative">
            <p className="font-bold">В качестве чего используется состав</p>
            <p>(CH - химический упрочнитель, ...)</p>
          
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gray-400">
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-l border-gray-400 transform rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="pl-4 relative">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 h-full border-l border-gray-400"></div>
          <div className="mb-4 relative">
            <p className="font-bold">Специфические характеристики</p>
            <p>(CP - химическая стойкость, AS - антистатика, ...)</p>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gray-400">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-r border-gray-400 transform rotate-45"></div>
            </div>
          </div>
          <div className="mb-4 relative">
            <p className="font-bold">Уровень продукта</p>
            <p>(Для строительных растворов...)</p>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gray-400">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-r border-gray-400 transform rotate-45"></div>
            </div>
          </div>
          <div className="relative">
            <p className="font-bold">Тип используемой смолы</p>
            <p>(LI - литий, UP - полиэфирная...)</p>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gray-400">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-r border-gray-400 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLegend;
