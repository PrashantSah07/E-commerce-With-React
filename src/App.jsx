import React from 'react'
import Navbar from './components/Navbar'
import hero_image from './assets/hero_image.png'
import { FaArrowRightLong } from "react-icons/fa6";
import hand_icon from './assets/hand_icon.png'
import PopularCard from './components/PopularCard';
import datalist from './assets/data';
import Offers from './components/Offers';
import exclusive_image from './assets/exclusive_image.png';
import new_collections from './assets/new_collections'
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <div className='flex md:flex-row flex-col-reverse justify-between items-center bg-gradient-to-b from-[#eaa7fb]/30 to-[#ffffff] xl:px-30 py-5 sm:px-15 px-8 gap-10 md:gap-0 max-w-[1521px] mx-auto'>
                <div className='flex flex-col w-[100%]' >
                    <p className='font-medium md:text-[22px] text-2xl mb-2'>NEW ARRIVALLS ONLY</p>
                    <h1 className='xl:text-[86px] lg:text-[75px] md:text-[65px] sm:text-[75px] text-[50px]  font-medium lg:leading-22  sm:leading-18 leading-none flex items-center gap-5'>new <img src={hand_icon} className='xl:w-[100px] lg:w-[70px] sm:w-[75px] w-[50px]' alt="hand_icon" /></h1>
                    <h1 className='xl:text-[86px] lg:text-[75px] md:text-[65px] sm:text-[75px] text-[50px] font-medium lg:leading-22 sm:leading-18 leading-none'>collections</h1>
                    <h1 className='xl:text-[86px] lg:text-[75px] md:text-[65px] sm:text-[75px] text-[50px] font-medium lg:leading-22 sm:leading-18 leading-none'>for everyone</h1>
                    <button className='group  border-2 flex items-center w-fit px-8 py-4 rounded-4xl bg-red-500 text-white gap-3 text-[18px] mt-8'>Latest Collection <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" /></button>
                </div>
                <img className='xl:w-[440px] lg:w-[400px] md:w-[350px] w-[100%]' src={hero_image} alt="" />
            </div>
            <div className='mt-12'>
                <PopularCard datalist={datalist} heading={'POPULAR IN WOMEN'} />
            </div>
            <div className='mt-30 [@media(max-width:500px)]:mt-16'>
                <Offers src={exclusive_image} heading='Exclusive Offers For You' para='ONLY ON BEST SELLERS PRODUCT' btntxt='Check Now' />
            </div>
            <div className='mt-25'>
                <PopularCard datalist={new_collections} heading={'NEW COLLECTIONS'} />
            </div>
            <div className='mt-25'>
                <NewsLetter heading='Get Exclusive Offers On Your Email' para='Subscribe to our newsletter and stay updated' />
            </div>
            <div className='my-25'>
                <Footer />
            </div>
        </div>
    )
}

export default App
