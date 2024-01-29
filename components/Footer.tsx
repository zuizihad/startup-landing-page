import Image from 'next/image'
import React from 'react'
import logo from '../assets/S 1.png'
import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";


function Footer() {
    return (
        <section className='h-[30vh]  bg-white'>
            <div className=' w-[1200px] py-12 m-auto flex justify-between items-center'>
                <div>
                    <div className='flex gap-2 w-[154px] h-[24px] justify-start items-center flex-shrink-0'>
                        <Image
                            src={logo}
                            alt='logo'
                            height={30}
                            width={30}
                        />
                        <p className='text-[#02073E] font-["SF_Pro_Display"] text-[20px] not-italic font-bold leading-[24px]'>Handy</p>
                    </div>
                    <p className='text-[#0F2137] mt-8 font-["DM_Sans"] text-[14px] not-italic font-normal leading-[normal]'>
                        Terms of use   |   Privacy
                    </p>
                    <p className='text-[#0F2137] mt-4 font-["DM_Sans"] text-[14px] not-italic font-normal leading-[normal] opacity-60'>Copyright by 2019 Redq, Inc</p>
                </div>
                <div>
                    <p className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px] mb-4'>About Us</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Support Center</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Customer Support</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>About Us</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Copyright</p>
                </div>
                <div>
                    <p className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px] mb-4'>Our Information</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Return Policy </p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Privacy Policy</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Terms & Conditions</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Site Map</p>
                </div>
                <div>
                    <p className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px] mb-6'>My Account</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Press inquiries</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Social media </p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>directories</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%]'>Images & B-roll</p>
                </div>
                <div>
                    <p className='text-[#0F2137] font-["DM_Sans"] text-[18px] not-italic font-bold leading-[30px] mb-6'>Connect</p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%] flex items-center gap-2'>
                        <FaFacebook />
                        <span>Facebook</span>
                    </p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%] flex items-center gap-2'>
                        <FaTwitter />
                        <span>Twitter</span>
                    </p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%] flex items-center gap-2'>
                        <FaGithub />
                        <span>Github</span>
                    </p>
                    <p className='text-[#02073E] font-["DM_Sans"] text-[15px] not-italic font-normal leading-[250%] flex items-center gap-2'>
                        <FaDribbble />
                        <span>Dribbble</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer