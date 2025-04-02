import React from 'react'

const Offers = (props) => {
    return (
        <div className='flex justify-evenly items-center max-w-[1250px] max-h-[450px] xl:mx-auto bg-gradient-to-b from-[#eaa7fb]/30 to-[#ffffff] mx-6'>
            <div className='w-[50%] flex flex-col gap-3 md:my-5 sm:my-10 my-5 [@media(max-width:460px)]:gap-2 '>
                <h1 className='xl:text-[80px] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[30px] font-medium lg:leading-25 md:leading-[60px] sm:leading-[50px] leading-[35px] [@media(max-width:460px)]:text-[25px] [@media(max-width:460px)]:leading-[25px]'>{props.heading}</h1>
                <p className='font-medium'>{props.para}</p>
                <button className='sm:py-3 sm:px-12 py-2 px-8 bg-red-500 rounded-4xl text-white w-fit mt-2 [@media(max-width:460px)]:px-5 [@media(max-width:460px)]:py-1.5'>{props.btntxt}</button>
            </div>
            <img src={props.src} className='w-[25%] [@media(max-width:500px)]:w-[32%]' alt="img" />
        </div>
    )
}

export default Offers
