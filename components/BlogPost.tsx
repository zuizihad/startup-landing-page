import Image from 'next/image'
import React from 'react'
import image1 from '../assets/blogs/image1.png';
import image2 from '../assets/blogs/image2.png';
import image3 from '../assets/blogs/image3.png';
import image4 from '../assets/blogs/image4.png';

const BlogPost = () => {
    return (
        <section className='w-[60vw] m-auto bg-white mt-16'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[#0F2137] text-center font-[B612] text-[34px] not-italic font-bold leading-[50px]'>Popular blog post we update everyday</h1>
                <p className='mt-3 w-[583px] text-[#0F2137] text-center font-["DM_Sans"] text-[16px] not-italic font-normal leading-[35px]'>Focus only on the meaning, we take care of the design. As soon as the
                    meeting end you can export in one click.</p>
            </div>
            <div className='my-8 flex justify-between items-center'>
                <div className='flex justify-start items-center flex-col w-[350px]'>
                    <Image
                        src={image1}
                        alt='imageone'
                        width={0}
                        height={0}
                        className='rounded-[5px]'
                    />
                    <h3 className='mt-3 text-[#0F2137] font-[B612] text-[20px] not-italic font-bold leading-[35px]'>How to work with prototype design with adobe xd featuring tools</h3>
                    <p className='mt-3 text-[#0F2137] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design</p>
                </div>
                <div className='w-[350px]  flex flex-col justify-center items-center'>
                    <h1 className='p-6 mb-2 rounded-[5px] bg-[#FBF5F1] text-[#0F2137] font-[B612] text-[20px] not-italic font-bold leading-[35px]'>Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards</h1>

                    <div className='flex justify-start items-start flex-col w-[375px] p-3'>
                        <Image
                            src={image2}
                            alt='imagetwo'
                            width={380}
                            height={100}
                        />
                        <h3 className='mt-3 text-[#0F2137] font-[B612] text-[20px] not-italic font-bold leading-[35px]'>Multiple arbard prototype with Figma</h3>
                        <p className='mt-3 text-[#0F2137] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px]'>Beyond launched antibias, a Chrome extension that replaces LinkedIn profile photos</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <Image
                        src={image3}
                        alt='imagethree'
                        width={350}
                        height={300}
                        className='rounded-[5px]'
                    />
                    <Image
                        src={image4}
                        alt='imagefour'
                        width={350}
                        height={300}
                        className='rounded-[5px]'
                    />
                </div>
            </div>
        </section>
    )
}

export default BlogPost