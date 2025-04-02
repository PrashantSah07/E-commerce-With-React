import { useCard } from "../context/CardContext";
import CardDetails from "../components/CardDetails";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from "react";

const CartPage = () => {
    const { cardItems, all_products, removeFromCart, addToCart, deleteFromCart } = useCard();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(Object.values(cardItems).some(quantity => quantity > 0));
    }, [cardItems]);

    return (
        <>
            <Navbar />
            {show &&
                <div className="lg:flex justify-between max-w-[1250px] items-center xl:mx-auto font-semibold p-3 mt-10 sm:mx-10 mx-5 hidden ">
                    <h1>Products</h1>
                    <h1>Title</h1>
                    <h1>Price</h1>
                    <h1>Quantity</h1>
                    <h1>Size</h1>
                    <h1>Total</h1>
                    <h1>Remove</h1>
                </div>}
            <div className=" max-w-[1250px] mx-auto flex flex-col mt-10 lg:mt-0">
                {Object.keys(cardItems).map((productId) => {
                    if (cardItems[productId] > 0) {
                        const product = all_products.find((p) => p.id === Number(productId));
                        return (
                            <div key={product.id} className="flex">
                                <CardDetails product={product} productId={productId} cardItems={cardItems} removeFromCart={removeFromCart} addToCart={addToCart} deleteFromCart={deleteFromCart} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <div className="flex lg:flex-row flex-col gap-10 justify-between max-w-[1250px] xl:mx-auto my-[50px] sm:mx-10 mx-5">
                <div className="flex flex-col lg:w-[50%] w-[100%] gap-8 p-3">
                    <h1 className="text-3xl font-medium">Cart Totals</h1>
                    <div className="flex flex-col">
                        <p className="flex justify-between items-center py-3 border-b-2 border-[#908c8c]">
                            Subtotal <span>${Object.keys(cardItems).reduce((acc, productId) => {
                                const product = all_products.find(p => p.id === Number(productId));
                                return product ? acc + product.new_price * cardItems[productId] : acc;
                            }, 0).toFixed(2)}</span>
                        </p>
                        <p className="flex justify-between items-center py-3 border-b-2 border-[#908c8c]">Shipping Fee<span className="text-green-600">Free</span></p>
                        <p className="flex justify-between items-center font-semibold py-4">Total  <span>${Object.keys(cardItems).reduce((acc, productId) => {
                            const product = all_products.find(p => p.id === Number(productId));
                            return product ? acc + product.new_price * cardItems[productId] : acc;
                        }, 0).toFixed(2)}</span></p>
                    </div>
                    <button className="w-fit border-2 py-2 px-4 bg-[#fb2c36] border-none text-white text-[14px]">PROCEED TO CHECKOUT</button>
                </div>
                <div className="lg:w-[50%] w-[100%] flex flex-col gap-5 p-3 lg:items-center ">
                    <p>if you have a promo code, Enter it here</p>
                    <div className="relative sm:w-[70%] w-[90%] flex items-center">
                        <input className="border-1 border-[#0000005c] w-[100%] py-2 px-3 pr-26" type="text" placeholder="promo code" />
                        <button className="absolute w-fit border-2 right-0 py-2.5 px-4 bg-[#000000] text-white border-none text-[14px]">Submit</button>
                    </div>
                </div>
            </div>

            <div className="my-25">
                <Footer />
            </div>
        </>
    );
};

export default CartPage;
