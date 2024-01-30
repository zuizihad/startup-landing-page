import React from 'react'
import Image from 'next/image';

import marketing from '../assets/icons/marketing.png';
import business from '../assets/icons/business.png';
import development from '../assets/icons/development.png';
import google from '../assets/logos/google.png';
import dribble from '../assets/logos/dribble.png';
import microsoft from '../assets/logos/microsoft.png';
import paypal from '../assets/logos/paypal.png';
import uber from '../assets/logos/uber.png';

const Service = () => {
    return (
        <section className=' bg-[#FFF5ED] flex flex-col items-center'>
            <div className=' mt-48 sm:mt-12'>
                <h1 className='text-[#0F2137] text-center font-[B612] text-[34px] not-italic font-bold leading-[50px] sm:leading-9'>Grow your startup with our Service</h1>
                <p className='mt-4 text-[#0F2137] text-center font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
            </div>
            <div className='flex flex-row flex-wrap items-center mt-12 w-[70%] sm:w-full sm:p-3 sm:gap-3'>
                <div className='flex flex-row items-center gap-8'>
                    <Image
                        src={marketing}
                        alt='marketing'
                        width={100}
                        height={100}
                    />
                    <div className='flex flex-col w-[265px]'>
                        <h3>Marketing & advertising</h3>
                        <p>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-8'>
                    <Image
                        src={development}
                        alt='marketing'
                        width={100}
                        height={100}
                    />
                    <div className='flex flex-col w-[265px]'>
                        <h3>Ultimate development</h3>
                        <p>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-8'>
                    <Image
                        src={business}
                        alt='marketing'
                        width={100}
                        height={100}
                    />
                    <div className='flex flex-col w-[265px]'>
                        <h3>Business Enterprise</h3>
                        <p>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                    </div>
                </div>
            </div>
            <div className='mt-16 '>
                <h1 className='w-[846px] sm:w-full sm:p-3 text-[#0F2137] font-[B612] text-[24px] not-italic font-normal leading-[50px]'>“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”</h1>
                <p className='text-[#7E8896] font-["DM_Sans"] sm:p-3 text-[16px] not-italic font-medium leading-[40px]'>By Denny Albuz, Adviser of Paypal</p>
            </div>
            <div className='border-t-[1px] py-12 mt-4 flex flex-row flex-wrap justify-between sm:justify-evenly items-center gap-16'>
                <Image
                    src={uber}
                    alt='uber'
                    width={100}
                    height={100}
                />
                <Image
                    src={google}
                    alt='google'
                    width={100}
                    height={100}
                />
                <Image
                    src={paypal}
                    alt='paypal'
                    width={100}
                    height={100}
                />
                <Image
                    src={microsoft}
                    alt='microsoft'
                    width={100}
                    height={100}
                />
                <Image
                    src={dribble}
                    alt='dribble'
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}

export default Service