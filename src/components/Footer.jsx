import React from 'react'
import { Link } from 'react-router-dom'
import logo_big from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <>
            <div className='max-w-[1250px] mx-auto flex flex-col lg:gap-12 gap-8'>
                <div className='flex flex-col items-center justify-center lg:gap-8 gap-5'>
                    <div className='flex items-center lg:gap-5 gap-3'>
                        <img src={logo_big} className='lg:w-[90px] w-[80px]' alt="" />
                        <h1 className='lg:text-[45px] text-[35px] font-medium'>SHOPPER</h1>
                    </div>
                    <div className='flex lg:gap-x-12 gap-x-7 text-[18px] flex-wrap gap-y-2 justify-center mx-5'>
                        <Link>Company</Link>
                        <Link>Products</Link>
                        <Link>Offices</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <div className='border-1 border-[#00000058] p-2'><img src={instagram_icon} alt="" /></div>
                        <div className='border-1 border-[#00000058] p-2'><img src={pintester_icon} alt="" /></div>
                        <div className='border-1 border-[#00000058] p-2'><img src={whatsapp_icon} alt="" /></div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 items-center justify-center '>
                    <p className='border-2 border-[#302d2d74] w-[80%]'></p>
                    <p className='text-[18px] text-center'>Copyright @2023 - All Right Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
