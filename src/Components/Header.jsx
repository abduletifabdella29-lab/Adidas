import React from 'react'
import v from "../Assests/Icons/v.png"
import adidas from "../Assests/Icons/adidas.png"
import search from "../Assests/Icons/search.png"
import human from "../Assests/Icons/human.png"
import like from "../Assests/Icons/like.svg"
import borsa from "../Assests/Icons/borsa.png"

function Header() {
    return (
        <>
        <div className="text-center bg-[#231F20] text-[#EDE734] text-[16px] py-2">NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE<img src={v} className='inline-block ml-3'/></div>

        <div>
            <ul className='flex justify-center justify-between gap-9 py-4 cursor-pointer'>
                <li><a href="#"><img src={adidas}/></a></li>
                <li className='text-[20px]'><a href="#">WOMAN</a></li>
                <li className='text-[20px]'><a href="#">MEN</a></li>
                <li className='text-[20px]'><a href="#">KIDS</a></li>
                <li className='text-[20px] font-light'><a href="#">NEWS</a></li>
                <li className='text-[20px] font-light'><a href="#">SPORTS</a></li>
                <li className='text-[20px] font-light'><a href="#">ADIDAS WORLD</a></li>
                <form className="relative w-[240px] h-[40px]">
                    <input 
                        type="search" 
                        id="search-input"
                        placeholder="Forum Mid Parley" 
                        className="bg-[#ECEFF1] w-full h-full pl-[12px] pr-[40px] border-none outline-none text-[15px] text-gray-700 placeholder:text-gray-400"
                    />
                    <button 
                        type="submit" 
                        className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center justify-center border-none bg-transparent p-0 cursor-pointer"
                    >
                        <img 
                        src={search} 
                        alt="Search" 
                        className="w-[20px] h-[20px] object-contain" 
                        />
                    </button>
                    </form>

            <li><a href="#"><img src={human}/></a></li>
            <li><a href="#"><img src={like}/></a></li>
            <li><a href="#"><img src={borsa}/></a></li>
            </ul>
        </div>
        </>
    )
}

export default Header