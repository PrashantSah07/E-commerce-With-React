import React from 'react'
import Navbar from '../components/Navbar'
import Items from '../components/Items'
import all_products from '../assets/all_product'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Category = ({ Category, banner }) => {
    return (
        <>
            <div className='max-w-[1521px] mx-auto'>
                <Navbar />
                <img src={banner} className='max-h-[280px]' alt="banner" />
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 gap-y-8 max-w-[1250px] xl:mx-auto mt-5 [@media(max-width:500px)]:grid-cols-1 mx-5'>
                    {all_products.map(function (item, key) {
                        if (Category === item.category) {
                            return <Link key={key} to={`/product/${item.id}`}><Items key={key} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} /></Link>
                        }
                        else {
                            return null;
                        }
                    })}
                </div>
            </div>
            <div className='mt-30 mb-25'>
                <Footer />
            </div>
        </>
    )
}

export default Category
