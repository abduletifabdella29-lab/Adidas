import React from 'react'
import Historybg from "../Assests/Images/Historybg.png"
import historygrace from "../Assests/Images/historygrace.png"
function HistorySection() {
    return (
        <>
        <div
            className="relative w-full h-150 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
            backgroundImage: `url(${Historybg})`,
            }}>
            <div
            className="absolute top-13 left-20 w-276 h-137.75 bg-cover bg-center bg-no-repeat z-10"
            style={{
                backgroundImage: `url(${historygrace})`,
            }}></div>

            <div className="relative z-20 flex justify-between">
            <div>
                <p className="text-white w-fit pt-41 pl-12 text-[18px] text-left">
                At adidas, we believe that sports have the <br />
                power to transform lives. It's not just about <br />
                keeping your body and mind fit; it's about <br />
                bringing people together and creating a <br />
                community of individuals who share the <br />
                same passion for excellence.
                </p>

                <p className="text-white w-fit pt-14 pl-12 text-[18px] text-left">
                We draw inspiration from the athletes who <br />
                push themselves to their limits every day, <br />
                and from the technology we develop to help <br />
                them achieve their goals.
                </p>
            </div>

            <div className="text-white w-fit pt-130  pr-9 text-[22px] font-semibold text-center">
                <h1>To improve performances. Improve lives <br /> and change the world.</h1>
            </div>

            <div>
                <p className="text-white w-fit ml-auto pt-41 pr-12 text-[18px] text-right">
                Whether you're a runner, a basketball player, <br />
                a soccer player, or someone who loves to <br />
                train, you'll find a home with us. Our <br />
                products are designed to meet your needs, <br />
                no matter what your preferred form of <br />
                exercise may be.
                </p>

                <p className="text-white w-fit ml-auto pt-14 pr-12 text-[18px] text-right">
                We're not just present on the playing field, <br />
                either. You'll find the three stripes at music <br />
                festivals, on stages, and in the city streets.
                </p>
            </div>
            </div>
        </div>
    </>
    )
}

export default HistorySection