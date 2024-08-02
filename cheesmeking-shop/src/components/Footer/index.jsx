import Logo from "../../assets/Logo.svg"
import Ruble from "../../assets/Footer/Ruble.svg"
import Sberbank from "../../assets/Footer/Sberbank.svg"
import Vector from "../../assets/Footer/Vector.svg"
import Yandex from "../../assets/Footer/Yandex.svg"
import Mastercard from "../../assets/Footer/Mastercard.svg"
import Visa from "../../assets/Footer/Visa.svg"
import Time from "../../assets/Header/time.svg"
import Location from "../../assets/Header/location.svg"


const index = () => {
  return (
  <div >    
 <footer className="bg-white  dark:text-gray-900">
    <div className="mx-auto w-full max-w-screen-xl px-10 py-6 lg:py-8">
        <div className="md:flex gap-20">
          <div className="mb-3 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
              </a>
              <p className="text-[14px] mt-2">Все материалы данного сайта <br /> являются объектами авторского<br /> права.</p>
              <p className="text-[14px] font-semibold ">Разработка сайта: ЛяЧиз</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:gap-5  sm:grid-cols-4">
              <div className="text-[12px]">
                  <h2 className=" mb-3 font-semibold text-gray-900 uppercase ">Компания</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-1">
                          <a href="#" className="hover:underline ">О компании</a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline">Акции и скидки</a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline">Доставка и оплата</a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline">Отзывы</a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline">Гарантия и возврат</a>
                      </li>
                  </ul>
              </div>
              <div className="text-[12px]">
              <h2 className=" mb-3 font-semibold text-gray-900 uppercase ">Поддержка</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-1">
                          <a href="#" className="hover:underline ">Вопрос-ответ</a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline">Бонусная программа</a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline">Политика конфиденциальности</a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline">Персональные данных</a>
                      </li>
                  </ul>
              </div>
              <div className="text-[12px] "   >
                  <h2 className="mb-6 font-semibold text-gray-900 uppercase ">Способы оплаты</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-1">
                          <a href="#" className="hover:underline flex gap-2 items-center">
                            <img src={Ruble} alt="" />
                            <img src={Vector} alt="" />
                            <img src={Sberbank} alt="" />
                            <img src={Yandex} alt="" />
                          </a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline flex gap-2">
                            <img src={Mastercard} alt="" />
                            <img src={Visa} alt="" />
                          </a>
                      </li>
                  </ul>
              </div>
              <div className="text-[12px] "   >
                  <h2 className="mb-2 font-semibold text-gray-900 uppercase ">+7 495 120-00-00</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-1">
                          <a href="#" className="hover:underline flex gap-2 items-center">
                            <img src={Time} alt="" />
                            Пн-пт 9:00 - 19:00
                          </a>
                      </li>
                      <li className="mb-1">
                          <a href="#" className="hover:underline flex gap-2">
                             <img src={Location} alt="" />
                             г. Москва,  улица Свободы 1/7
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div>
        
      </div>
      </div>
</footer>

    </div>
  )
}

export default index