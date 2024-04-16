"use client"

import Image from 'next/image'
import React from 'react'
import ImageComparisonSlider from './ImageComparisonSlider'

const Widget = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] my-[100px]'>
        <Image src='/gdpr.png' width={32} height={32} alt='bg' />
        <h4 className='text-[40px] font-semibold'><span className='text-blue-400'>Personalized</span> Widget</h4>
        <p className='text-[20px]'>Customize it with your favorite colors, banners, descriptions, and entry options.</p>

        <ImageComparisonSlider />
    </div>
  )
}

export default Widget