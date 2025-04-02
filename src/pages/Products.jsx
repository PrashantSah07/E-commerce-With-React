import React from 'react'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import all_products from '../assets/all_product'
import Breadcrum from '../components/Breadcrum';
import new_collections from '../assets/new_collections';
import PopularCard from '../components/PopularCard';

const Products = () => {
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId));

    return (
        <div>
            <Navbar />
            <div>
                {product ? (
                    <Breadcrum
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        new_price={product.new_price}
                        old_price={product.old_price}
                        category={product.category}
                        id={product.id}
                    />
                ) : (
                    <p className='font-semibold text-center text-4xl mt-20'>Product not found</p>
                )}
            </div>
            <div className='max-w-[1330px] xl:mx-auto mt-20 flex flex-col mx-5'>
                <div>
                    <button className='border-1 border-[#0000007c] px-4 py-3 text-[15px]'>Description</button>
                    <button className='border-1 border-[#0000007c] px-4 py-3 text-[15px]'>Reviews (122)</button>
                </div>
                <div className='border-1 border-[#0000007c] sm:p-10 p-5 flex flex-col gap-4 text-[15px]'>
                    <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and
                        individuals con showcase their products. interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense
                        popularity due to their convenience, accessibility, and the global reach they otter.</p>
                    <p> E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g. Sizes, colors). Each product usually has
                        its own dedicated page with relevant information.</p>
                </div>
            </div>
            <div className='mt-15'>
                <PopularCard datalist={new_collections} heading={'RELATED PRODUCTS'} />
            </div>
            <div className='my-20'>
                <Footer />
            </div>
        </div>
    )
}

export default Products
