import React from 'react'
import one from '../assets/teams/one.png';
import two from '../assets/teams/two.png';
import three from '../assets/teams/three.png';
import four from '../assets/teams/four.png';
import social from '../assets/teams/social.png';
import Image from 'next/image';

const Team = () => {
    return (
        <section className='flex justify- items-center flex-col bg-white my-20'>
            <h1 className='text-[#0F2137] text-center font-[B612] text-[34px] not-italic font-bold leading-[50px]'>Meet our superheros</h1>
            <p className='w-[527px] sm:w-full sm:px-3 text-[#0F2137] text-center font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px] mt-8'>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
            <div className=' w-[70%] flex flex-row flex-wrap items-center justify-evenly gap-3 sm:gap-8 mt-20'>
                <div className='flex flex-col items-start '>
                    <div className='relative rounded-[5px] bg-[#FFFAF6] mix-blend-darken flex-shrink-0 h-[300px] w-[300px]'>
                        <Image
                            src={four}
                            alt='team one'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <h4 className='text-[#0F2137] font-["DM_Sans"] text-[20px] not-italic font-medium leading-[50px]'>Emmalee Mclain</h4>
                    <p className='text-[#7589A1] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[50px]'>Product Designer</p>
                    <Image
                        src={social}
                        alt='social'
                        height={100}
                        width={100}
                    />
                </div>
                <div className='flex flex-col items-start '>
                    <div className='relative rounded-[5px] bg-[#FFFAF6] mix-blend-darken flex-shrink-0 h-[300px] w-[300px]'>
                        <Image
                            src={three}
                            alt='team one'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <h4 className='text-[#0F2137] font-["DM_Sans"] text-[20px] not-italic font-medium leading-[50px]'>Emmalee Mclain</h4>
                    <p className='text-[#7589A1] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[50px]'>Product Designer</p>
                    <Image
                        src={social}
                        alt='social'
                        height={100}
                        width={100}
                    />
                </div>
                <div className='flex flex-col items-start '>
                    <div className='relative rounded-[5px] bg-[#FFFAF6] mix-blend-darken flex-shrink-0 h-[300px] w-[300px]'>
                        <Image
                            src={two}
                            alt='team one'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <h4 className='text-[#0F2137] font-["DM_Sans"] text-[20px] not-italic font-medium leading-[50px]'>Emmalee Mclain</h4>
                    <p className='text-[#7589A1] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[50px]'>Product Designer</p>
                    <Image
                        src={social}
                        alt='social'
                        height={100}
                        width={100}
                    />
                </div>
                <div className='flex flex-col items-start '>
                    <div className='relative rounded-[5px] bg-[#FFFAF6] mix-blend-darken flex-shrink-0 h-[300px] w-[300px]'>
                        <Image
                            src={one}
                            alt='team one'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <h4 className='text-[#0F2137] font-["DM_Sans"] text-[20px] not-italic font-medium leading-[50px]'>Emmalee Mclain</h4>
                    <p className='text-[#7589A1] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[50px]'>Product Designer</p>
                    <Image
                        src={social}
                        alt='social'
                        height={100}
                        width={100}
                    />
                </div>
            </div>
        </section>
    )
}

export default Team