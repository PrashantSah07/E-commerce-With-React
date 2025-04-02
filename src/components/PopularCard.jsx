import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PopularCard = ({ datalist, heading }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(datalist);
    }, [datalist]);

    return (
        <>
            <div className='flex flex-col justify-center items-center md:gap-15 gap-10 max-w-[1250px] mx-auto'>
                <h1 className='font-medium flex flex-col gap-2 items-center xl:text-6xl md:text-[50px] text-[40px] [@media(max-width:500px)]:text-[30px]'>{heading}
                    <p className='border-3 rounded-4xl w-[45%] text-[#000000b7]'></p>
                </h1>
                <div className='grid lg:grid-cols-4 grid-cols-2 mx-5 gap-5 gap-y-8 [@media(max-width:500px)]:grid-cols-1'>
                    {data.map(function (item, key) {
                        return <Link key={key} to={`/product/${item.id}`}>
                            <div key={key} className='flex flex-col transition-transform duration-300 hover:scale-103' onClick={() => window.scrollTo(0, 0)}>
                                <img src={item.image} alt="image" />
                                <div className='pl-2 pt-2 flex flex-col gap-2'>
                                    <p>{item.name}</p>
                                    <div className='flex gap-7'>
                                        <p className='font-semibold'>${item.new_price}</p>
                                        <p className='line-through text-[#5b5454] font-semibold'>${item.old_price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default PopularCard
