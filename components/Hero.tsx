import React from 'react'
import Header from './Header'
import Image from 'next/image'
import hero from '../assets/illustration.png'

const Hero = () => {
    return (
        <div className='h-[90vh] bg-white'>
            <Header />
            <div className="flex justify-center flex-col items-center mt-16">
                <h1 className="w-[817px] text-[#02073E] text-center font-[B612] text-[48px] not-italic font-bold leading-[75px]">
                    Creativity starts with viewing the whole world differently</h1>
                <p className='text-[#02073E] text-center font-["DM_Sans"] text-[18px] not-italic font-normal leading-[42px]'>A service agency with customer satisfaction</p>
                <button className='mt-6 rounded-[5px] bg-[#0A8080] w-[180px] h-[60px] flex-shrink-0 text-[#FFF] text-center font-["DM_Sans"] text-[18px] not-italic font-bold leading-[40px]'>Get Started</button>
                <Image
                    src={hero}
                    alt='hero'
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    )
}

export default Hero