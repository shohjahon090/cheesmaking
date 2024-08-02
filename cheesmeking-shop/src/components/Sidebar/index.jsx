import Sidebar from '../../assets/sidebar.svg'
import Vektor from '../../assets/Vector.svg'

const index = () => {
  return (
    <div>
        <div className="bg-[#FFFBED]  ms-20 flex  flex-col gap-5">
            <div className="w-[250px] bg-white h-88 border-[1px] border-gray-300 rounded-lg">
                 <div className="flex items-center p-3 gap-2 bg-[#FBE8BB]  border-b-2 border-[#F5F5F5]">
                    <img src={Sidebar} alt="" />
                    Ингредиенты
                    <hr className='bg-[#F5F5F5]' />  
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                       Закваски для сыра
                     </div>
                     <div>
                        <img src={Vektor} alt="" />
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Ферменты для сыра
                     </div>
                     <div>
                        <img src={Vektor} alt="" />
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Хлористый кальций
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Плесень для сыра
                     </div>
                     <div>
                        <img src={Vektor} alt="" />
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Кисломолочные закваски
                     </div>
                     <div>
                        <img src={Vektor} alt="" />
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Красители для сыра
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Специи для сыра
                     </div>
                     <div>
                        <img src={Vektor} alt="" />
                     </div>
                 </div>
            </div>
            <div className="w-[250px] bg-white h-88 border-[1px] border-gray-300 rounded-lg">
                 <div className="flex items-center p-3 gap-2 bg-[#FBE8BB]  border-b-2 border-[#F5F5F5]">
                    <img src={Sidebar} alt="" />
                    Оборудование
                    <hr className='bg-[#F5F5F5]' />  
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Формы для сыра
                     </div>
                     <div>
                        <img src={Vektor} alt="" />
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Латексное покрытие
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Воск для сыра
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Термоусадочные пакеты
                     </div>
                     <div>
                        <img src={Vektor} alt="" />
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Дренажные коврики
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Дренажные мешки и салфетки 
                     для прессования
                     </div>
                 </div>
                 <div className="flex justify-between items-center p-3 gap-2 border-b-2 border-[#F5F5F5] hover:bg-[#FBE8BB]">
                     <div>
                     Дренажные контейнеры
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default index