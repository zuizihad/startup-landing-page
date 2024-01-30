import Image from 'next/image'
import React from 'react'
import image from '../assets/illustration2.png'
import ok from '../assets/icons/ok.png';
import arrow from '../assets/icons/arrow.png';

const Business = () => {
    return (
        <section className=' bg-white mt-16'>
            <div className='flex items-center justify-center sm:flex-col w-[60%] sm:w-full m-auto border-b'>
                <span className='text-[#0F2137] text-right font-["DM_Sans"] text-[20px] not-italic font-bold leading-[30px] p-8 border-b-[3px] border-[#A17857]'>Why you choose our service?</span>
                <span className='text-[#0F2137] text-center font-["DM_Sans"] text-[20px] not-italic font-bold leading-[30px]  p-8 '>What’s our business promise?</span>
                <span className='text-[#0F2137] font-["DM_Sans"] text-[20px] not-italic font-bold leading-[30px]  p-8 '>What’s our role model plan?</span>
            </div>
            <div className='flex justify-center items-center sm:flex-col mt-16'>
                <div>
                    <h1 className='w-[478px] sm:w-full sm:px-3 text-[#0F2137] font-[B612] text-[40px] sm:text-[32px] not-italic font-bold leading-[60px] sm:leading-10'>We will turn your idea in the successful business model framework</h1>
                    <p className='w-[450px] sm:w-full sm:p-3 text-[#02073E] font-["DM_Sans"] text-[17px] not-italic font-normal leading-[42px] sm:leading-8'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                    <div className='flex flex-wrap items-center sm:flex-col sm:items-start gap-6 w-[400px] sm:w-full sm:px-3'>
                        <p className=' flex items-center justify-start gap-2 w-[180px] text-[#02073E] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[45px] sm:leading-3'>
                            <Image
                                src={ok}
                                alt='ok'
                                width={20}
                                height={10}
                            />
                            <span>Medical and vision</span>
                        </p>
                        <p className='flex items-center justify-start gap-2 w-[180px] text-[#02073E] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[45px] sm:leading-3'>
                            <Image
                                src={ok}
                                alt='ok'
                                width={20}
                                height={10}
                            />
                            <span>HSAs and FSAs</span>
                        </p>
                        <p className='flex items-center justify-start gap-2 w-[180px] text-[#02073E] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[45px] sm:leading-3'>
                            <Image
                                src={ok}
                                alt='ok'
                                width={20}
                                height={10}
                            />
                            <span>Life insurance</span>
                        </p>
                        <p className=' flex items-center justify-start gap-2 w-[180px] text-[#02073E] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[45px] sm:leading-3'>
                            <Image
                                src={ok}
                                alt='ok'
                                width={20}
                                height={10}
                            />
                            <span>Commuter benefits</span>
                        </p>
                        <p className='text-[#3183FF] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[42px] flex items-center gap-2 cursor-pointer'>
                            Explore more
                            <i>
                                <Image src={arrow} alt='arrow' height={5} width={5} />
                            </i>
                        </p>
                    </div>
                </div>
                <div className='sm:px-3 sm:mt-8'>
                    <Image
                        src={image}
                        alt='image'
                        height={500}
                        width={600}
                    />
                </div>
            </div>
        </section>
    )
}

export default Business