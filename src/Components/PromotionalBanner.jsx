import React from 'react'
import arrows from "../Assests/Icons/arrows.png"
import sneaker from "../Assests/Images/sneaker.png"
import like from "../Assests/Icons/like.svg"
import girlImg from "../Assests/Images/girlImg.png"
import hero from "../Assests/Images/Hero.png"
import leftArrow from "../Assests/Icons/leftArrow.png"
import downArrow from "../Assests/Icons/downArrow.png"

function PromotionalBanner() {
    return (
        <>
        {/* adiweek section */}
        <h2 className='pt-6 pl-14.5 font-semibold text-2xl size-8.5'>adiWeek</h2>
        <img className='flex ml-290' src={arrows} />
        <div className='flex mt-8 px-9 pb-8 justify-between gap-8'>
            <div>
            <div className='relative rounded-xl overflow-hidden bg-[#f5f5f5] shadow-lg'>
                <img src={sneaker} alt="sneaker" className='w-full h-full object-cover'/>

                <img src={like} alt="like" className='absolute top-6 right-6'/>

                <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
            </div>

            <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
            <p className='ml-6'>Sneaker Style</p>
            </div>


            <div>
            <div className='relative rounded-xl bg-[#f5f5f5] overflow-hidden shadow-lg'>
                <img src={sneaker} alt="sneaker" className='w-full h-full object-cover'/>

                <img src={like} alt="like" className='absolute top-6 right-6'/>

                <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
            </div>

            <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
            <p className='ml-6'>Sneaker Style</p>
            </div>


            <div>
            <div className='relative rounded-xl bg-[#f5f5f5] overflow-hidden shadow-lg'>
                <img src={sneaker} alt="sneaker" className='w-full h-full object-cover'/>

                <img src={like} alt="like" className='absolute top-6 right-6'/>

                <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
            </div>

            <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
            <p className='ml-6'>Sneaker Style</p>
            </div>


            <div>
            <div className='relative rounded-xl bg-[#f5f5f5] overflow-hidden shadow-lg'>
                <img src={sneaker} alt="sneaker" className='w-full h-full object-cover'/>
            <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>

                <img src={like} alt="like" className='absolute top-6 right-6'/>

                <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
            </div>

            <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
            <p className='ml-6'>Sneaker Style</p>
            </div>
        </div>
        
        {/* outfit section */}
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

        {/* do you like secction */}
        <h2 className='pt-6 pl-14.5 font-semibold text-2xl whitespace-nowrap size-8.5'>Do you still like these products?</h2>
        <img className='flex ml-290' src={arrows} />
        <div className='flex mt-8 px-9 pb-8 justify-between gap-8'>
            <div>
            <div className='relative rounded-xl overflow-hidden bg-[#f5f5f5] shadow-lg'>
                <img src={sneaker} alt="sneaker" className='w-full h-full object-cover'/>

                <img src={like} alt="like" className='absolute top-6 right-6'/>

                <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
            </div>

            <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
            <p className='ml-6'>Sneaker Style</p>
            </div>

            <div>
            <div className='relative rounded-xl bg-[#f5f5f5] overflow-hidden shadow-lg'>
                <img src={sneaker} alt="sneaker" className='w-full h-full object-cover'/>

                <img src={like} alt="like" className='absolute top-6 right-6'/>

                <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
            </div>

            <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
            <p className='ml-6'>Sneaker Style</p>
            </div>

            <div>
            <div className='relative rounded-xl bg-[#f5f5f5] overflow-hidden shadow-lg'>
                <img src={sneaker} alt="sneaker" className='w-full h-full object-cover'/>

                <img src={like} alt="like" className='absolute top-6 right-6'/>

                <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
            </div>

            <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
            <p className='ml-6'>Sneaker Style</p>
            </div>

            <div>
            <div className='relative rounded-xl bg-[#f5f5f5] overflow-hidden shadow-lg'>
                <img src={sneaker} alt="sneaker" className='w-full h-full object-cover'/>

                <img src={like} alt="like" className='absolute top-6 right-6'/>

                <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
            </div>

            <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
            <p className='ml-6'>Sneaker Style</p>
            </div>
        </div>
        </>
    )
}

export default PromotionalBanner