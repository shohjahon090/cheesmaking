
import { Link } from "react-router-dom"
import Group from "../../assets/Group 324.svg"
const index = () => {

  return (
    <div className=" flex justify-center bg-[#FFFBED]">
          <div className="w-[1350px] flex justify-center py-20">
             <div className="w-[587px] h-[660px] bg-[#ffffff] p-10 ">
                <p className="text-xl font-bold text-center">Постоянный покупатель</p>  
                 <div className="px-10 mt-20">
                    <p >Электронная почта</p>
                    <input id="pochta" className="border w-full h-10 px-3 rounded-[5px]" type="text" placeholder="yourname@mail.com" required/>
                 </div> 
                 <div className="px-10 py-5">
                    <p >Ваш пароль</p>
                    <input id="parol" className="border w-full h-10 px-3 rounded-[5px]" type="text" placeholder="От 8 и более символов" required/>
                 </div>
                 <div className="px-10 py-5">
                    <button className=" w-full h-10 px-3 bg-[#FD9339] text-white rounded-[5px]">Войти</button>
                 </div>
                 <hr className="" />
                 <div className="flex justify-center mt-5">
                    <img src={Group} alt="" />
                 </div>
                <div className="flex justify-center mt-20">
                   <p className="text-[#FD9339]  border-b-2 border-[#FD9339]">Забыли пароль?</p>
                </div>
             </div>
             <div className="w-[587px] h-[660px] bg-[#FDF2D8] ">
                <div className="flex justify-center items-center flex-col p-10 mt-44">
                  <p className="text-xl font-bold">Создайте аккаунт</p>
                  <p className="text-center">Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте скидки.</p>
                  <Link to={"/login"}><button  className="w-80 h-10 mt-10 bg-[#FD9339] text-white rounded-[5px]">Зарегистрироваться</button></Link>
                </div>
            </div>
          </div>
    </div>
  )
}


export default index