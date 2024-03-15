import { useState } from "react"
import carousel1 from '../assets/carousel.png'
import carousel2 from '../assets/carousel2.png'
import carousel3 from '../assets/carousel3.png'

const images = [
    carousel1,
    carousel2,
    carousel3
]

export const Carousel = () => {

    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }

    return (
        <>
            <div className="flex justify-evenly items-center p-5 mb-20">
                <div className="left-arrow bg-gray-200 hover:bg-gray-400 rounded-full p-2" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <div className="image">
                    {images.map((item, idx) => 
                        current === idx && (
                            <div key={idx} className="flex justify-center">
                                <img className=" rounded-md w-[100%]" src={item} alt="Image" />
                            </div>
                        )
                    )}
                </div>

                <div className="right-arrow bg-gray-200 hover:bg-gray-400 rounded-full p-2" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
        </>
    )
}
