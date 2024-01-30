import React from 'react'
import art from '../assets/icons/art.png';
import suport from '../assets/icons/support.png';
import development from '../assets/icons/development.png';
import digital from '../assets/icons/digital.png';
import enterprise from '../assets/icons/enterprise.png';
import marketing from '../assets/icons/marketing.png';
import arrow from '../assets/icons/arrow.png';
import Image from 'next/image';

const OtherService = () => {
    return (
        <section className=' bg-[#F9FAFC] pt-16'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-[#0F2137] text-center font-[B612] text-[34px] not-italic font-bold leading-[50px] sm:leading-10'>Other sevices you must appreciate</h1>
                <p className='mt-4 w-[583px] sm:w-full sm:px-3 text-[#0F2137] text-center font-["DM_Sans"] text-[16px] not-italic font-normal leading-[35px] sm:leading-6'>Focus only on the meaning, we take care of the design. As soon as the
                    meeting end you can export in one click into your preferred.</p>
            </div>
            <div className='flex flex-wrap items-center justify-evenly w-[70%] sm:w-full m-auto mt-16'>
                <div className='flex justify-center items-start sm:flex-col gap-8 mb-16'>
                    <div>
                        <Image
                            src={art}
                            alt='art'
                            width={88}
                            height={88}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px]'>3D modeling & art</h4>
                        <p className='w-[265px] text-[#343D48] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                        <p className='text-[#3183FF] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[42px] flex items-center gap-2 cursor-pointer'>
                            Learn more
                            <i>
                                <Image src={arrow} alt='arrow' height={5} width={5} />
                            </i>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-start sm:flex-col  gap-8 mb-16'>
                    <div>
                        <Image
                            src={digital}
                            alt='art'
                            width={88}
                            height={88}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px]'>Digital promotion</h4>
                        <p className='w-[265px] text-[#343D48] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                        <p className='text-[#3183FF] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[42px] flex items-center gap-2 cursor-pointer'>
                            Learn more
                            <i>
                                <Image src={arrow} alt='arrow' height={5} width={5} />
                            </i>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-start sm:flex-col  gap-8 mb-16'>
                    <div>
                        <Image
                            src={enterprise}
                            alt='art'
                            width={88}
                            height={88}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px]'>Business Enterprise</h4>
                        <p className='w-[265px] text-[#343D48] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                        <p className='text-[#3183FF] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[42px] flex items-center gap-2 cursor-pointer'>
                            Learn more
                            <i>
                                <Image src={arrow} alt='arrow' height={5} width={5} />
                            </i>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-start sm:flex-col  gap-8 mb-16'>
                    <div>
                        <Image
                            src={marketing}
                            alt='art'
                            width={88}
                            height={88}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px]'>Marketing & advertising</h4>
                        <p className='w-[265px] text-[#343D48] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                        <p className='text-[#3183FF] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[42px] flex items-center gap-2 cursor-pointer'>
                            Learn more
                            <i>
                                <Image src={arrow} alt='arrow' height={5} width={5} />
                            </i>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-start sm:flex-col  gap-8 mb-16'>
                    <div>
                        <Image
                            src={development}
                            alt='art'
                            width={88}
                            height={88}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px]'>Ultimate development</h4>
                        <p className='w-[265px] text-[#343D48] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                        <p className='text-[#3183FF] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[42px] flex items-center gap-2 cursor-pointer'>
                            Learn more
                            <i>
                                <Image src={arrow} alt='arrow' height={5} width={5} />
                            </i>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-start sm:flex-col  gap-8 mb-16'>
                    <div>
                        <Image
                            src={suport}
                            alt='art'
                            width={88}
                            height={88}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px]'>Online support</h4>
                        <p className='w-[265px] text-[#343D48] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>Get your info tests delivered athome collect a sample from theyour pogress tests.</p>
                        <p className='text-[#3183FF] font-["DM_Sans"] text-[16px] not-italic font-medium leading-[42px] flex items-center gap-2 cursor-pointer'>
                            Learn more
                            <i>
                                <Image src={arrow} alt='arrow' height={5} width={5} />
                            </i>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OtherService