import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <header
        className="bg-gray-800 text-white shadow-md rounded-b-lg p-6"
        data-aos="fade-down"
      >
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Левая сторона */}
          <div className="lg:w-2/3">
            <h1 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">
              ЗАВОД ПО ПРОИЗВОДСТВУ ПОЛИМЕРНЫХ ПОКРЫТИЙ И СУХИХ СМЕСЕЙ ДЛЯ ПОЛОВ
            </h1>
            <h2 className="text-lg lg:text-xl font-semibold mb-2">
              ООО «Торговый дом «Промышленные полы»
            </h2>
         
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
