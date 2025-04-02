import React from 'react'

const NewsLetter = (props) => {
    return (
        <div className='max-w-[1250px] max-h-[450px] flex flex-col items-center justify-center gap-5 xl:mx-auto mx-6 py-20  bg-gradient-to-b from-[#eaa7fb]/30 to-[#ffffff] px-7'>
            <h1 className='font-medium lg:text-5xl text-4xl text-[#474242] text-center [@media(max-width:500px)]:text-[30px]'>{props.heading}</h1>
            <p className='text-[18px] text-center'>{props.para}</p>
            <div className='flex md:w-[65%] sm:w-[80%] w-[90%] relative items-center mt-2'>
                <input className='md:py-4 md:px-7 md:pr-48 py-2.5 px-7 pr-35 border-1 border-[#0000006f] w-full rounded-4xl sm:text-[18px] text-[16px] [@media(max-width:500px)]:px-3 [@media(max-width:500px)]:py-2 [@media(max-width:500px)]:text-[15px] [@media(max-width:500px)]:pr-30 ' type='email' name='email' id='email' placeholder='Your Email id' />
                <button className='rounded-4xl bg-black text-white absolute right-0 top- md:py-4.5 md:px-10 py-3 px-5 [@media(max-width:500px)]:px-3 [@media(max-width:500px)]:py-2 [@media(max-width:500px)]:text-[15px]'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
