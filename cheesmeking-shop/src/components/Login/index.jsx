
import { Link } from "react-router-dom"
import Gift from "../../assets/gift.svg"
import Gift1 from "../../assets/gift1.svg"
import Gift2 from "../../assets/gift3.svg"
import Group from "../../assets/Group 324.svg"
const index = () => {
  return (
    <div className=" flex justify-center bg-[#FFFBED]">
          <div className="w-[1350px] flex justify-center py-20">
             <div className="w-[587px] h-[660px] bg-[#FDF2D8] p-10 ">
                <p className=" font-bold mb-2">Регистрация аккаунта</p>   
                <p>Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте скидки.</p> 
                 <img className=" mt-10" src={Gift} alt="" />
                 <p className=" font-bold mt-3">Возвращаем 10% бонусами</p>
                 <p className="text-[14px]">При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по всей Россиию</p>
                 <img className=" mt-10" src={Gift1} alt="" />
                 <p className=" font-bold mt-3">Гарантия качества</p>
                 <p className="text-[14px]">При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по всей Россиию</p>
                 <img className=" mt-10" src={Gift2} alt="" />
                 <p className=" font-bold mt-3">Удобные способы оплаты</p>
                 <p className="text-[14px]">При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по всей Россиию</p>
             </div>
             <div className="w-[587px] h-[660px] bg-[#FFF] ">
                 <div className="px-10 mt-10">
                    <p >Ваше имя и фамилия</p>
                    <input className="border w-full h-10 px-3 rounded-[5px]" type="text" placeholder="Иван Иванов" required />
                 </div>  
                 <div className="px-10 py-4">
                    <p >Электронная почта</p>
                    <input className="border w-full h-10 px-3 rounded-[5px]" type="text" placeholder="yourname@mail.com" required />
                 </div> 
                 <div className="px-10 py-4 flex gap-4">
                    <div>
                      <p>Пароль для входа</p>
                      <input className="border w-[240px] h-10 px-3 rounded-[5px]" type="text"placeholder="От 8 и более символов" required />
                    </div>
                    <div>
                      <p>Подтвердите пароль</p>
                      <input className="border w-[240px] h-10 px-3 rounded-[5px]" type="text"placeholder="Подтвердите пароль" required/>
                    </div>
                 </div> 
                <div className="px-10 py-4">
                 <Link to="/signin"><button className="bg-[#FD9339] text-white w-full h-10 rounded-[5px]">Зарегистрироваться</button></Link>
                  <hr className="bg-[#ccccccc] my-4 text-[2px]" />
                </div>
                <div className="flex justify-center">
                     <img src={Group} alt="" />
                </div>
                <div className="px-10 py-4">
                  <div className="flex gap-2">
                    <input  type="checkbox" />
                    <p className="text-[15px]">Получать письма с новостями и акциями</p>
                  </div>
                  <div className="flex gap-2">
                    <input  type="checkbox" />
                    <p className="text-[14px]">Я прочитал и соглашаюсь с условиями<span className="text-[#FD9339] border-b-2 border-[#FD9339]"> Политики конфиденциальности</span> </p>
                  </div>
                  <hr className="bg-[#ccccccc] my-4" />
                </div>
                <div className="flex justify-center">
                <p>Уже есть профиль? <Link to={"/signin"}><span className="text-[#FD9339] border-b-2 border-[#FD9339] cursor-pointer">Войти в аккаунт</span></Link></p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default index