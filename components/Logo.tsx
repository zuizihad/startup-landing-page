'use client';

import Image from 'next/image'
import React from 'react'
import logo from '../assets/S 1.png'

const Logo = () => {
  return (
    <a className="mr-3 h-6 sm:h-9">
        <Image 
            src={logo}
            alt='logo'
            height={37}
            width={27}
        />
    </a>
  )
}

export default Logo