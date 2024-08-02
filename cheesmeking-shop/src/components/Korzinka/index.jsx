

  const index = ({cart}) => {
    
    return (
      <div>
        {cart.map((item, index) => (
                    <div key={index}>
                    <div className="w-[222px] h-[330px] bg-white border-[1px] border-[#E7E7E7] rounded-md">
                      <img className="p-5" src={item.image} alt={item.title} />
                      <div className="px-3">
                        <p>{item.title}</p>
                        <hr className="mt-2" />
                        <div className="flex justify-between items-center mt-2">
                          <div>
                            <p className="text-[12px]"><span className="text-[16px]">{item.price}₽</span>/ 1 шт.</p>
                              <del className="text-[#FF4F4F] text-[14px]">{item.oldPrice}₽</del>
                          </div>
                          <div>
                            <button  className="text-white w-20 h-10 bg-[#FF4F4F] rounded-lg text-[14px]">Добавить</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
        ))}
      </div>
    )
  }

  export default index