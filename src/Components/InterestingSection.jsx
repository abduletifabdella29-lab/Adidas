import React from 'react'
import adidasball from "../Assests/Images/adidasball.png"
import redshoes from "../Assests/Images/redshoes.png"
import proofwater from "../Assests/Images/proofwater.png"
import blackshoes from "../Assests/Images/blackshoes.png"

function InterestingSection() {
    return (
    <>
    <div className='mx-15 mb-20'>
        <div className='mt-15'>
            <h1 className='w-78.25 h-9.25 font-extrabold text-3xl size-7.5'>MOST INTERESTING</h1>
        </div>

        <div className='flex justify-center gap-6 pt-5'>
            <div>
                <img className='' src={adidasball} />
            </div>

            <div>
                <img className='' src={redshoes} />
            </div>

            <div>
                <img className='' src={proofwater} />
            </div>

            <div>
                <img className='' src={blackshoes} />
            </div>
        </div>
    </div>
    </>
    )
}

export default InterestingSection