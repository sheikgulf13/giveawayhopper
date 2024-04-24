"use client"

import Image from 'next/image'
import React from 'react'
import ImageComparisonSlider from './ImageComparisonSlider'

const Widget = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] my-[100px]'>
      <div className='bg-gray-100 p-[20px] rounded-full'>
        <Image src='/drawing.png' width={45} height={45} alt='bg' />
      </div>
      <h1 className='text-center text-3xl font-semibold lg:text-4xl'><span className='text-blue-400 text-center'>Personalized</span> Widget</h1>
      <p className='md:text-[20px] text-center'>Customize it with your favorite colors, banners, descriptions, and entry options.</p>
      <ImageComparisonSlider />
    </div>
  )
}

export default Widget