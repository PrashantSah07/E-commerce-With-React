import React from 'react'

const Items = (props) => {
    return (
        <div className=' flex flex-col transition-transform duration-300 hover:scale-103' onClick={() => window.scrollTo(0, 0)}>
            <img src={props.image} alt="image" />
            <div className='pl-2 pt-2 flex flex-col gap-2'>
                <p>{props.name}</p>
                <div className='flex gap-7'>
                    <p className='font-semibold'>${props.new_price}</p>
                    <p className='line-through text-[#5b5454] font-semibold'>${props.old_price}</p>
                </div>
            </div>
        </div>
    )
}

export default Items
