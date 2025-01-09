import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer
      className="bg-gray-800 text-gray-300 shadow-md rounded-t-lg p-6"
      data-aos="fade-up"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Первая колонка: Основная информация */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Контактная информация</h3>
          <p className="text-sm">© 2025 BuildingPro. Все права защищены.</p>
          <p className="text-sm">
            <strong>Адрес:</strong> 620036, Свердловская область, г. Екатеринбург, ул. Суходольская, соор. 197, офис 503
          </p>
          <p className="text-sm">
            <strong>Телефон:</strong> 8 800 700 62 44
          </p>
          <p className="text-sm">
            <strong>E-mail:</strong>{' '}
            <a href="mailto:info@praspan.ru" className="text-yellow-400 hover:underline">
              info@praspan.ru
            </a>
          </p>
        </div>

        {/* Вторая колонка: Реквизиты */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Реквизиты</h3>
          <p className="text-sm">
            <strong>ОГРН:</strong> 1196658077758
          </p>
          <p className="text-sm">
            <strong>ИНН/КПП:</strong> 6658530142 / 665801001
          </p>
          <p className="text-sm">
            <strong>Р/сч:</strong> 40702810338410000343 в Филиале «ЕКАТЕРИНБУРГСКИЙ» АО «АЛЬФА-БАНК»
          </p>
          <p className="text-sm">
            <strong>К/сч:</strong> 30101810100000000964
          </p>
          <p className="text-sm">
            <strong>БИК:</strong> 046577964
          </p>
        </div>

        {/* Третья колонка: Ссылки на социальные сети */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Социальные сети</h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://t.me/your_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Telegram-канал
            </a>
            <a
              href="https://vk.com/your_group"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Группа ВКонтакте
            </a>
            <a
              href="http://www.praspan.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Официальный сайт
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
