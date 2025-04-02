import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import breadcrum_arrow from '../assets/breadcrum_arrow.png'
import { useCard } from "../context/CardContext";

const Breadcrum = ({ image, name, old_price, new_price, category, id }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const { addToCart, selectSize } = useCard();

    return (
        <>
            <div className='sm:flex items-center gap-2 my-10 max-w-[1330px] xl:mx-auto mx-5 hidden'>
                <p className='flex items-center gap-1.5'>HOME <img className='w-[10px]' src={breadcrum_arrow} alt="breadcrum_arrow" /></p>
                <p className='flex items-center gap-1.5'>SHOP <img className='w-[10px]' src={breadcrum_arrow} alt="breadcrum_arrow" /></p>
                <p className='flex items-center gap-1.5'>{category} <img className='w-[10px]' src={breadcrum_arrow} alt="breadcrum_arrow" /></p>
                <p className='flex'>{name}</p>

            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 max-w-[1521px] xl:mx-auto mx-5 lg:gap-5 xl:gap-0 gap-5 sm:mt-0 mt-10'>
                <div className='flex gap-5 justify-center items-center'>
                    <div className='lg:flex flex-col gap-5 hidden'>
                        <img src={image} className='xl:w-[100px] w-[80px]' alt="" />
                        <img src={image} className='xl:w-[100px] w-[80px]' alt="" />
                        <img src={image} className='xl:w-[100px] w-[80px]' alt="" />
                        <img src={image} className='xl:w-[100px] w-[80px]' alt="" />
                    </div>
                    <img src={image} className='object-contain xl:w-[450px] lg:w-[370px] w-[100%]' alt="" />
                </div>
                <div className='flex flex-col xl:gap-5 gap-4 justify-center'>
                    <h1 className='xl:text-4xl text-[30px] font-medium'>{name}</h1>
                    <div className='flex gap-1 items-center'>
                        <img src={star_icon} className='w-[18px] h-[18px]' alt="star_icon" />
                        <img src={star_icon} className='w-[18px] h-[18px]' alt="star_icon" />
                        <img src={star_icon} className='w-[18px] h-[18px]' alt="star_icon" />
                        <img src={star_icon} className='w-[18px] h-[18px]' alt="star_icon" />
                        <img src={star_dull_icon} className='w-[18px] h-[18px]' alt="star_dull_icon" />
                        <p>(122)</p>
                    </div>
                    <div className='flex gap-5'>
                        <p className='font-semibold line-through text-[#625d5d]'>${old_price}</p>
                        <p className='font-semibold'>${new_price}</p>
                    </div>
                    <p>A lightweight usually knitted. pullover shirt close-fitting and with a round neckline
                        and Short sleeves, worn as on undershirt or outer garment.</p>
                    <div className='flex flex-col gap-5 '>
                        <p className='font-semibold text-[#605c5c]'>Select Size</p>
                        <div className='flex gap-2'>
                            {['S', 'M', 'L', 'XL', 'XXL'].map(function (size, i) {
                                return <button key={i} className={`px-4 py-2 w-fit text-[15px] ${selectedSize === size ? "bg-black text-white" : "bg-[#e4dbdb] text-black"}`} onClick={function () {
                                    setSelectedSize(size)
                                    setShowMessage(false);
                                }}>{size}</button>
                            })}
                        </div>
                        {showMessage && <p className='font-semibold text-red-600'>Please select a size first!</p>}
                        {selectedSize ? <Link to='/card'>
                            <button className='w-fit py-2.5 px-4 bg-[#fb2c36] text-white text-[15px]' onClick={function () {
                                addToCart(id);
                                selectSize(id, selectedSize);
                            }}>ADD TO CARD
                            </button>
                        </Link> : <button className='w-fit py-2.5 px-4 bg-[#fb2c36] text-white text-[15px]' onClick={function () {
                            setShowMessage(true);
                        }}>ADD TO CARD
                        </button>}

                    </div>
                    <div>
                        <p><span className='font-semibold'>Category:&nbsp;&nbsp;</span> {category}</p>
                        <p><span className='font-semibold'>Tags:&nbsp;&nbsp;</span> Modern, Latest</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrum
