import React from 'react'
import adidas2 from "../Assests/Icons/adidas2.png"
import amex from "../Assests/Icons/amex.png"
import mastercard from "../Assests/Icons/mastercard.png"
import visa from "../Assests/Icons/visa.png"
import facebook from "../Assests/Icons/facebook.png"
import instagram from "../Assests/Icons/instagram.png"
import youtube from "../Assests/Icons/youtube.png"
import twitter from "../Assests/Icons/twitter.png"

function Footer() {
    return (
    <>
    <div className=' flex bg-cover bg-center bg-no-repeat w-full h-88' style={{backgroundColor: '#231F20'}}>
        
        <div className='text-white text-center pt-23 pl-16'>
            <h1 className='text-3xl font-extrabold'>INFO</h1>
            <div className='font-light'>
            <a href='#'>Terms and Condition</a> <br />
            <a href='#'>Cookies</a> <br />
            <a href='#'>Privacy Politics</a>
            </div>
        </div>

        <div className='text-white text-center pt-23 pl-21'>
            <h1 className='text-3xl font-extrabold'>COLLECTIONS</h1>
            <div className='font-light'>
            <a href='#'>Ultraboost</a> <br />
            <a href='#'>Confirmed</a> <br />
            <a href='#'>NMD</a> <br />
            <a href='#'>Originals</a>
            </div>
        </div>

        <div className='text-white text-center pl-20'>
            <div className='pl-10 pt-8'>
            <img src={adidas2} alt="addidas" />
            </div>

            <h1 className='text-3xl font-extrabold pt-4'>SPORTS</h1>
            <div className='font-light'>
            <a href='#'>Football</a> <br />
            <a href='#'>Baskerball</a> <br />
            <a href='#'>Running</a> <br />
            <a href='#'>Training</a>
            </div>
            <div className='flex gap-5 pt-18'>
                <div><a href="#"><img src={amex} /></a></div>
                <div className='pt-1'><a href="#"><img src={mastercard} /></a></div>
                <div className='pt-2'><a href="#"><img src={visa} /></a></div>
            </div>
        </div>

        <div className='text-white text-center pt-23 pl-21'>
            <h1 className='text-3xl font-extrabold'>SUPPORT</h1>
            <div className='font-light'>
            <a href='#'>Customer</a> <br />
            <a href='#'>F.A.Q.</a> <br />
            <a href='#'>Shipping</a> <br />
            <a href='#'>adiClub</a>
            </div>
        </div>

        <div className='text-white text-center pt-23 pl-21'>
            <h1 className='text-3xl font-extrabold'>FOLLOWS US</h1>
            <div className='flex gap-5 pt-5'>
                <div className=' pl-11 gap-7 flex'>
                    <div><a href="#"><img src={facebook} /></a></div>
                    <div className='pt-1'><a href="#"><img src={youtube} /></a></div>
                </div>
            </div>

            <div className=' pl-11 pt-5 gap-7 flex'>
                <div className=''><a href="#"><img src={instagram} /></a></div>
                <div className='pt-1'><a href="#"><img src={twitter} /></a></div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Footer