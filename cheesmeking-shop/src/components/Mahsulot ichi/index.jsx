import Sidebar from "../Sidebar"
import { useState } from "react"
import Vector from '../../assets/Vector.svg'
import Group from '../../assets/Group.png'
import Image from '../../assets/Image (1).png'
import Carusel from "../Carusel"
const index = () => {
  const [count, setCount] = useState(1)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    if (count > 1) {
      setCount(count - 1)
    }
    else {
      setCount(1)
    }
  }
  return (
<div className="   flex justify-center bg-[#FFFBED]">
<div className="py-5 bg-[#FFFBED] w-[1350px] ">
  <div className="mt-1">
   <p className="flex items-center px-20 mb-2 gap-1 text-[13px]">Главная <img src={Vector} alt="" />Ингредиенты <img src={Vector} alt="" />Кисломолочные закваски<img src={Vector} alt="" />Мезофильная закваска Hansen Flora Danica (50U)</p>
      <div className="flex">
      <div>
          <Sidebar/>
        </div>
        <div className="px-5">
          <p> Мезофильная закваска Hansen Flora Danica (50U)</p>
          <div className="flex gap-3 items-center">
            <img src={Group} alt="" />
            <a href="" className="border-b border-black">2 Отзыва</a>
          </div>
          <div className="flex gap-5">
            <div>
              <img src={Image} alt="" />
            </div>
            <div>
              <p className="text-[#34B15F]">В наличии</p>
              <div className="flex justify-between gap-60 mt-3">
                <div className="flex gap-2 ">
                  <p className=" font-bold text-[#FD9339]">950 руб.</p>
                  <del className="text-[12px]">1200 руб.</del>
                </div>
                <div >
                   <p className="text-[#FD9339]">В избранное</p>
                </div>
              </div>
              <p color=""><span className="text-[#FD9339] font-bold">+95</span> бонусных рублей <span className="text-[#FD9339] font-bold">?</span></p>
              <p><span className=" font-bold">Артикул</span>:  23006  </p>
              <p><span className=" font-bold" >Производитель</span>:  Lactofarm ECO, Италия</p>
              <div className="flex gap-5">
                <div className="w-[170px] h-10 bg-white mt-2 rounded-[5px] border-[1px] border-[#D9D9D9] flex justify-center gap-10 items-center font-bold">
                 <p onClick={decrement}>-</p>
                 <p>{count}</p>
                 <p onClick={increment}>+</p>
                </div>
                <div className="">
                   <button className="w-[270px] h-10 bg-[#FD9339] text-white mt-2 rounded-[5px] border-[1px] border-[#D9D9D9] font-bold">В корзину</button>
                </div>
              </div>
              <div className="w-[460px] h-20 mt-5 bg-[#F2EFE2] rounded-[5px] p-3">
                <p className="text-[14px]">Выберите регион для рассчета стоимости доставки:</p>
                <select className="w-[430px] h-7 mt-2 px-2 rounded-[5px]" name="" id="">
                  <option value="">Выберите регион</option>
                  <option value="">Uzbekiston</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex gap-5 mt-5">
              <p className="text-[#FD9339] border-b-2 border-[#FD9339]">Описание</p>
              <p>Доставка и оплата</p>
              <p>Отзывы (3)</p>
            </div>
            <div className="w-[900px] h-[500px] bg-[#FFF] rounded-[5px] p-4">
              <p className="text-[15.45px]">P00802 Эта форма небольших размеров предназначена для получения маленьких головок сыра Рикотта и других мягких сыров в условиях домашнего или фермерского производства. Наличие хорошего дренажа обеспечивает ее использование для прессования сыров с плесенью, в том числе сорта Французский нешатель. Размер сырной головки, которую удается получить при использовании этой формы – до 80 г. Это аккуратный, готовый к подаче кусочек сыра, который не придется нарезать. Изготовлена форма из специального высококачественного пищевого пластика, который хорошо адаптирован к агрессивной молочнокислой среде.</p>
              <hr className="mt-3" />
              <div className="flex gap-20 mt-5">
                <p className="font-bold">Выход сыра</p>
                <p>до 5-6 кг</p>
              </div>
              <hr className="mt-3" />
              <div className="flex gap-20 mt-5">
                <p className="font-bold">Материал</p>
                <p>высококачественный пищевой пластик</p>
              </div>
              <hr className="mt-3" />
              <div className="flex gap-20 mt-5">
                <p className="font-bold">Наличие дна</p>
                <p>есть</p>
              </div>
              <hr className="mt-3" />
              <div className="flex gap-20 mt-5">
                <p className="font-bold">Наличие ножек</p>
                <p>нет</p>
              </div>
              <hr className="mt-3" />
              <div className="flex gap-20 mt-5">
                <p className="font-bold">Размеры</p>
                <p>высота - 22 см, диаметр верха - 27 см</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20">
        <Carusel/>
      </div>
   </div>
    </div>
</div>
  )
}

export default index