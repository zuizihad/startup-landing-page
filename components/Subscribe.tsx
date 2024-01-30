import React from 'react'

const Subscribe = () => {
  return (
    <section className="flex justify-center items-center h-[380px] bg-[url(../assets/subscribe.png)] bg-[#F8F0EA]">
      <div className='w-[1200px] sm:w-full h-[230px] sm:h-[336px] flex justify-between sm:flex-col px-12 items-center rounded-[10px] bg-[#FFF]'>
        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-[#0F2137] font-[B612] text-[34px] not-italic font-bold leading-[55px]'>Like our service? Subscribe us</h1>
          <p className='text-[#343D48] font-["DM_Sans"] text-[16px] not-italic font-normal leading-[30px] w-[421px] sm:w-full h-[53px] flex-shrink-0'>We have more than thousand of creative entrepreneurs and stat joining our business</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-6 sm:py-3'>
          <div className='flex justify-center items-center sm:flex-col gap-6'>
            <input className='pl-6 rounded-[5px] bg-[#EFF3F7] w-[350px] h-[60px] flex-shrink-0' type='email' placeholder='Enter your email' />
            <button className='w-[150px] h-[60px] flex-shrink-0 rounded-[5px] bg-[#DB4A87] text-[#FFF] text-center font-["DM_Sans"] text-[18px] not-italic font-bold leading-[40px]'>Subscribe</button>
          </div>
          <div className='flex justify-center items-center gap-2 sm:hidden'>
            <input className='rounded-[4px] bg-[#EFF3F7] w-[16px] h-[16px] flex-shrink-0' type='checkbox' />
            <p className='text-[#9095AD] font-["DM_Sans"] text-[14px] not-italic font-normal leading-[30px] opacity-90'>Don’t provide any promotional message.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe