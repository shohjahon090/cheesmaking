
const index = () => {
  return (
    <div className="flex justify-center flex-col gap-1 ">
        <div className="px-20 py-5 bg-[#FFFBED] flex items-center">
            <div className="bg-slider-first w-1/2 h-72 bg-cover bg-center gap-2  p-10 text-white">
              <h1 className="text-[26px]">Наборы для сыроделия</h1>
              <p>Все что вам нужно для приготовления сыра <br />
              в домашних условиях</p>
              <button className="bg-[#FD9339] text-[14px] mt-24 px-5 py-2 rounded-[10px]">Смотреть наборы</button>
            </div>
            <div className="w-1/4 h-72 bg-cover bg-slider-2 px-5 py-2">
                <div className="mt-52 text-[25px] text-white">
                Сыры с плесенью  
                </div> 
            </div>
            <div className="w-1/4 h-72 bg-cover bg-slider-3 px-5 py-2">
                 <div className="mt-52 text-[25px] text-white">
                 закваски для сыра  
                </div>
            </div>
        </div>
    </div>
  )
}

export default index