import React from 'react'
import arrows from "../Assests/Icons/arrows.png"
import product from "../Assests/Images/product.png"
import girlImg from "../Assests/Images/girlImg.png"
import hero from "../Assests/Images/Hero.png"
import leftArrow from "../Assests/Icons/leftArrow.png"
import downArrow from "../Assests/Icons/downArrow.png"

function PromotionalBanner() {
    return (
        <>
        <div>
            <h2 className='pt-6 pl-14.5 font-semibold text-2xl size-8.5'>adiWeek</h2>

            <img className='flex ml-290' src={arrows} />

            <div className="flex gap-2 mx-11 my-6">
                <img src={product} className="w-1/4 object-cover" />
                <img src={product} className="w-1/4 object-cover" />
                <img src={product} className="w-1/4 object-cover" />
                <img src={product} className="w-1/4 object-cover" />
            </div>
        </div>

        <div className="w-[1200px] h-[550px] mx-auto flex overflow-hidden rounded-[60px]">
            <div
                className="relative w-[400px] h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${girlImg})` }}>

                    <h2 className="text-white text-[56px] mt-20 ml-34 font-bold leading-none uppercase"> OUTFITS <br />
                        <span className="text-[#EDE734] ml-3">BENEFIT</span>
                    </h2>
            </div>

            <div
                className="relative w-[910px] h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${hero})` }}>

                <h2 className="text-white text-[56px] mt-20 ml-3 font-bold leading-none uppercase">FOR</h2>
                <h2 className="text-[#EDE734] text-[56px] font-bold leading-none uppercase">S</h2>

                <h5 className='text-[#EDE734] text-[24px] mt-14 ml-15 font-bold leading-none'>60% OFF + free shipping: <span className='text-white'>only for adiClub members.</span></h5>

                <h5 className='text-white text-[24px] mt-8 ml-15 font-bold leading-none'>Check your account and start buying for benefits on <span className='text-[#EDE734]'>adiWeek.</span></h5>
                    
                <div className='flex'>    
                <img className='w-[44px] h-[28px]  mt-20 ml-19 ' src={leftArrow} />  <a href='#' className="text-white text-[24px] mt-20 ml-5 font-bold leading-none uppercase">BUY NOW</a>
                <img className='w-[38px] h-[33px]  mt-20 ml-38 ' src={downArrow} /> <a href='#' className="text-white text-[24px] mt-20 ml-5 font-bold leading-none uppercase">WHAT IS ADIDAS?</a>
                </div>    
            </div>
        </div>
        
        <div>
            <h2 className='pt-6 pl-14.5 font-semibold text-2xl size-8.5 whitespace-nowrap'>Do you still like these products?</h2>

            <img className='flex ml-290' src={arrows} />

            <div className="flex gap-2 mx-11 my-6">
                <img src={product} className="w-1/4 object-cover" />
                <img src={product} className="w-1/4 object-cover" />
                <img src={product} className="w-1/4 object-cover" />
                <img src={product} className="w-1/4 object-cover" />
            </div>
        </div>
        </>
    )
}

export default PromotionalBanner