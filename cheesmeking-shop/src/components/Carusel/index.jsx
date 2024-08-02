
import { useRef } from 'react';


const MyCarousel = () => {
  const cardMap = [
    {
        "title": "Мезофильная закваска Danisco CHOOZIT MM...",
        "price": "1300",
        "oldPrice": "1800",
        "image": "https://raw.githubusercontent.com/DevResHub/CARD-PRODUCT-API/main/Rectangle%2065.png"
      },
      {
        "title": "Душистый перец горошком (100г)",
        "price": "200",
        "oldPrice": "320",
        "image": "https://raw.githubusercontent.com/DevResHub/CARD-PRODUCT-API/main/Rectangle%2065%20(3).png"
      },
      {
        "title": "Красный перец молотый (100г)",
        "price": "380",
        "oldPrice": "400",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(2).png?raw=true"
      },
      {
        "title": "Мускатный орех молотый (100г)",
        "price": "420",
        "oldPrice": "560",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(1).png?raw=true"
      },
      {
        "title": "Форма для твердого сыра 1 кг",
        "price": "1330",
        "oldPrice": "1800",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(4).png?raw=true"
      },
      {
        "title": "Форма для твердого сыра 1 кг",
        "price": "200",
        "oldPrice": "320",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(5).png?raw=true"
      },
      {
        "title": "Красный перец молотый (100г)",
        "price": "380",
        "oldPrice": "400",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(6).png?raw=true"
      },
      {
        "title": "Мускатный орех молотый (100г)",
        "price": "420",
        "oldPrice": "560",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(7).png?raw=true"
      }
     ];
  const prosmotrCardesRef = useRef(null);
  const scrollLeft = () => {
      if (prosmotrCardesRef.current) {
          prosmotrCardesRef.current.scrollLeft -= 200;
      }
  };
  const scrollRight = () => {
      if (prosmotrCardesRef.current) {
          prosmotrCardesRef.current.scrollLeft += 200;
      }
  };
  return (
    <>
      <div className='flex flex-wrap justify-between items-center py-8'>
        <p className='text-[24px] font-semibold text-[#4E2D2D]'>Просмотренные товары</p>
        <div className='flex gap-8'>
            <p onClick={scrollLeft}>
               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g >
                <path d="M18.75 7.5L11.25 15L18.75 22.5" stroke="#292929" />
                </g>
                <defs>
                <clipPath id="clip0_6485_15750">
                <rect width="30" height="30" fill="white" transform="matrix(-1 0 0 -1 30 30)"/>
                </clipPath>
                </defs>
                </svg>
            </p>
            <p onClick={scrollRight}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g >
                    <path d="M11.25 22.5L18.75 15L11.25 7.5" stroke="#292929"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_6485_15747">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
            </p> 
        </div>
      </div>
      <div className='flex gap-5 overflow-hidden' id="prosmotr_cardes" ref={prosmotrCardesRef} >
        {cardMap.map((item, index) => (
          <div key={index} >
            <div className="w-[220px] bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img className="px-8 pt-5 rounded-t-lg" src={item.image} alt="item image" />
                <img className='mx-auto' src={item.img} alt="" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-[16px] font-semibold tracking-tight pt-5">{item.title}</h5>
                </a>
                <hr className='my-4'/>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[16px] font-bold block">{item.price}₽</span>
                    <span className="text-[16px] text-[#f65b5b] line-through">{item.oldPrice}₽</span>
                  </div>
                  <button className='bg-[#FD9339] text-white rounded-lg px-3 py-2'>Добавить</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyCarousel