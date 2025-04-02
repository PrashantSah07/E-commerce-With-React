import { createContext, useContext, useState, useEffect } from "react";
import all_products from "../assets/all_product";

const CardContext = createContext();

const getDefaultCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || {};
};

export const CardContextProvider = ({ children }) => {
    const [cardItems, setCardItems] = useState(getDefaultCart);
    const [count, setCount] = useState(Object.values(cardItems).reduce((acc, curr) => acc + curr, 0));

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cardItems));
    }, [cardItems]);

    const addToCart = (productId) => {
        setCardItems((prevItems) => {
            const updatedItems = {
                ...prevItems,
                [productId]: (prevItems[productId] || 0) + 1,
            };
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            return updatedItems;
        });
        setCount(count + 1);
    };

    const removeFromCart = (productId) => {
        setCardItems((prevItems) => {
            if (!prevItems[productId]) return prevItems;
            const updatedItems = { ...prevItems };
            if (updatedItems[productId] > 1) {
                updatedItems[productId] -= 1;
            } else {
                delete updatedItems[productId];
            }
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            return updatedItems;
        });
        setCount(count - 1);
    };

    const deleteFromCart = (productId) => {
        setCardItems((prevItems) => {
            const updatedItems = { ...prevItems };
            delete updatedItems[productId];
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            setTimeout(() => window.location.reload(), 1);
            return updatedItems;
        });
    };


    const contextValue = { all_products, cardItems, addToCart, removeFromCart, deleteFromCart, count };

    return <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>;
};

export const useCard = () => useContext(CardContext);
