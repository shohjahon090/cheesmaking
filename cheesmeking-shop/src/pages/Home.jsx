import Hero from "../components/Hero"
import Sidebar from "../components/Sidebar"
import Card from "../components/Card/Index"
import Feture from "../assets/Feture.png"
import Image from '../assets/image 4 (1).png'
import Vector from "../assets/Vector.svg"
import Carusel from "../components/Carusel"
const Home = () => {
  return (
  <div className="flex justify-center bg-[#FFFBED]">
      <div className="flex flex-col justify-center w-[1350px]">
      <Hero/>
      <div className="flex bg-[#FFFBED] justify-center">
        <div>
          <Sidebar/>
        </div>
        <div className="ms-3 ">
          <div className="flex mb-4  gap-5">
            <p className="text-[#FD9339] border-b-2 border-[#FD9339]">Популярные товары</p>
            <p>Акции</p>
          </div>
          <p className="font-bold py-4 ">Ингредиенты</p>
          <Card/>
          <p className="font-bold py-4 ">Оборудование</p>
          <Card/>
        </div>
      </div>
      <div className="py-10 bg-[#FFFBED]">
        <img src={Feture} alt="" />
      </div>
      <div className="p-20 bg-[#FFFBED]">
        <p className="font-bold py-4">
        Мы подобрали для вас
        </p>
        <div className="flex">
          <div className="bg-slider-4 w-1/2 h-96 bg-no-repeat p-5">
             <p  className="text-[30px] font-bold">более 1000 <br /> лучших рецептов</p>
             <p className="py-4">Мы собрали для Вас большую <br />
             базу рецептов.</p>
             <button className="btn px-6 py-3 bg-[#FD9339] text-white mt-10">Перейти</button>
          </div>
          <div className="bg-slider-5 w-1/2 h-96 bg-no-repeat p-5">
             <p  className="text-[30px] font-bold text-white">крутые Наборы <br /> для сыра</p>
             <p className="py-4 text-white">Готовые наборы сэкономятвремя,<br /> мы всё сделали за Вас. 
             </p>
             <button className="btn px-6 py-3 bg-[#FD9339] text-white mt-10">Перейти</button>
          </div>
        </div>
      </div>
      <div className="px-20 bg-[#FFFBED] py-2 flex justify-center">
        <div className="w-80 h-60  bg-white rounded=[5px]">
          <img src={Image} alt="" />
          <div className="p-4">
            <p className="text-[20px] font-bold">Сырная тарелка</p>
            <p>Так называется блюдо, которое состоит из разных сортов сыра. </p>
            <a href="" className="text-[#FD9339] text-decoration flex items-center gap-6">Читать далее <img src={Vector} className="text-[#FD9339] " alt="" /></a>
          </div>
        </div>
      </div>
      <div className="px-20 bg-[#FFFBED] py-2 ">
        <Carusel/>
      </div>
    </div>
  </div>
  )
}

export default Home