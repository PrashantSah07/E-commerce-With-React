import React from 'react';
import { useCard } from "../context/CardContext";

const CardDetails = ({ product, productId, cardItems, addToCard, removeFromCart, deleteFromCart }) => {
    const { addToCart } = useCard();
    return (
        <div className='border-t-2 border-b-2 border-[#958c8c] flex max-w-[1250px] w-full justify-between lg:items-center xl:mx-auto py-3 border-l-0 border-r-0 sm:mx-10 mx-5 gap-5 items-start'>
            <img src={product.image} className="lg:w-[5%] w-[20%]" alt={product.name} />
            <div className='lg:w-[93%] w-[83%] flex lg:flex-row flex-col justify-between lg:items-center '>
                <h2 className='lg:w-[300px] text-[18px]'>{product.name}</h2>
                <p className='text-[18px]'>${product.new_price}</p>
                <div className='text-[18px] py-2.5 flex items-center'>
                    <button className='border-[#4c474743] border-2 px-3 py-1' onClick={function () {
                        removeFromCart(product.id)
                    }}>-</button><p className='border-[#4c474743] border-2 px-3 py-1 border-l-0 border-r-0'>{cardItems[productId] || 0}</p><button className='border-[#4c474743] border-2 px-3 py-1' onClick={function () {
                        addToCart(product.id)
                    }}>+</button>
                </div>
                <p className=''>M</p>
                <p className='text-[18px]'>${product.new_price * (cardItems[productId] || 0)}</p>
                <button onClick={() => deleteFromCart(product.id)} className='text-[18px] border-1 py-1 px-2 hover:bg-red-600 hover:text-white w-fit float-right'>Delete</button>
            </div>
        </div>
    );
};

export default CardDetails;
