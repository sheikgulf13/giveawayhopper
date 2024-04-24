"use client"

import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

  return (
    <div className='flex flex-col mt-[250px] max-w-[100vw] w-full'>
        <div className='flex flex-col px-[20px] md:px-[150px] lg:px-[150px] pb-[20px] md:pb-[50px] lg:pb-[50px] pt-[20px] md:pt-[70px] lg:pt-[70px] gap-[20px] bg-[#FAFAFA] rounded-t-lg'>
            <div className='block md:hidden lg:hidden pb-[20px]'>
                <Image src='/logo.png' width={199.45} height={59.31} className='pt-[30px]' alt='icon' />
            </div>
            <div className='grid grid-cols-2 gap-[50px] md:flex lg:flex justify-between mb-[30px] md:mb-0 lg:mb-0'>
                <div className='hidden md:flex lg:flex flex-col gap-[9px]'>
                    <h4 className='flex text-[#212427] text-[18px] font-semibold'>Stay Informed</h4>
                    <p className='flex text-[#525557] text-[14px]'>Get updates on fun stuff you probably want to know <br /> about in your inbox</p>
                    <div className='flex items-center gap-[10px] '>
                        <input type="email" className='px-[20px] py-[15px] text-[14px] rounded-md border border-[#E0EFDC] input-shadow' placeholder='Email address' />
                        <button className='px-[19px] py-[16px] text-[14px] rounded-md bg-green bg-gradient-to-b from-green-400 to-green-600 font-bold text-white shadow-md duration-300 hover:bg-gradient-to-b hover:from-green-600 hover:to-green-400'>Subscribe</button>
                    </div>
                    <Image src='/logo.png' width={239.45} height={79.31} className='pt-[30px]' alt='icon' />
                    <p className='flex items-center text-[14px] gap-[5px] pt-[15px]'>By <Image alt='icon' src='/sirmo_logo.png' width={16} height={13} className='h-[16px] w-[17px]' /> Sirmo</p>
                </div>

                <div className='flex flex-col gap-[9px]'>
                    <h4 className='text-[#212427] text-[18px] font-semibold'>Product</h4>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Pricing</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>FAQ</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Examples</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Blog</Link>
                </div>

                <div className='flex flex-col gap-[9px]'>
                    <h4 className='text-[#212427] text-[18px] font-semibold'>Company</h4>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>About Us</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Jobs</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Support</Link>
                </div>

                <div className='flex flex-col gap-[9px]'>
                    <h4 className='text-[#212427] text-[18px] font-semibold'>Industries</h4>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>E-Commerce</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Marketing</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>HospitaLinkty</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Retail</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Content Creation</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>All industries</Link>
                </div>

                <div className='flex flex-col gap-[9px]'>
                    <h4 className='text-[#212427] text-[18px] font-semibold'>Legal</h4>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Terms of Service</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Privacy poLinkcy</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Disclaimer</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[14px]'>Cookies</Link>
                </div>
                
                <div className='flex flex-col gap-[9px]'>
                    <h4 className='text-[#212427] text-[18px] font-semibold'>Social</h4>
                    <Link href='/' className='flex items-center gap-[10px] text-[14px] text-[#525557] hover:opacity-70'>
                        <FaXTwitter className='bg-[#b9b9b9] text-white p-[5px] rounded-sm text-[20px] font-bold' />
                        X
                    </Link>
                    <Link href='/' className='flex items-center gap-[10px] text-[14px] text-[#525557] hover:opacity-70'>
                        <RiFacebookFill className='bg-[#b9b9b9] text-white p-[5px] rounded-sm text-[20px] font-bold' />
                        Facebook
                    </Link>
                    <Link href='/' className='flex items-center gap-[10px] text-[14px] text-[#525557] hover:opacity-70'>
                        <FaLinkedinIn className='bg-[#b9b9b9] text-white p-[5px] rounded-sm text-[20px] font-bold' />
                        LinknkedIn
                    </Link>
                    <Link href='/' className='flex items-center gap-[10px] text-[14px] text-[#525557] hover:opacity-70'>
                        <FaInstagram className='bg-[#b9b9b9] text-white p-[5px] rounded-sm text-[20px] font-bold'/>
                        Instagram
                    </Link>
                </div>
            </div>

            <div>
                <p className='hidden md:flex lg:flex items-center justify-end pr-[20px] text-[14px] text-[#525557] gap-[5px]'>
                    &copy; 2017-2024 Giveawayhopper. All rights reserved &bull; 
                    <Image alt='icon' src='/leaf-footer.png' width={18.86} height={17.26} className='h-[15px] w-[17px]' />
                    CO2 Neutral since launch &bull;
                    Made with <Image alt='icon' src='/heart-footer.png' width={18} height={5} className='h-[15px] w-[17px]' />
                    in The Netherlands 
                </p>
                <div className='absolute md:hidden lg:hidden border left-0 w-full' />
                <p className='flex flex-col items-center justify-center pt-[30px] md:hidden lg:hidden'>
                    <span className='flex items-center gap-[5px]'>
                        <Image alt='icon' src='/leaf-footer.png' width={18.86} height={17.26} className='h-[15px] w-[17px]' />
                        CO2 Neutral since launch
                    </span>
                    <span>
                        &copy; 2017-2024 Giveawayhopper
                    </span>
                </p>
            </div>
        </div>

        <div className='flex items-center justify-between px-[20px] md:px-[150px] lg:px-[150px] py-[15px] bg-[#F3F3F3]'>
            <div>
                <Image alt='icon' src='/gdpr.png' width={109} height={53} className='w-[50px] md:w-[110px] lg:w-[110px]' />
            </div>

            <div>
                <Image alt='icon' src='/payment-icons.png' width={446.36} height={53} className='w-[230px] md:w-[430px] lg:w-[430px]' />
            </div>
        </div>
    </div>
  )
}

export default Footer