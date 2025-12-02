import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) {
            setCart(JSON.parse(saved));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    function addProduct(product) {
        let arr = cart;
        const itemIndex = cart.findIndex((item) => item.id === product.id);

        if (itemIndex === -1) {
            arr.push({ ...product, quantity: 1 });
        } else {
            arr[itemIndex].quantity++;
        }

        setCart([...arr]);
    }

    function removeQuantity(id) {
        let arr = cart;        
        const itemIndex = cart.findIndex((item) => item.id === id.id);        
        arr[itemIndex].quantity--;
        setCart([...arr]);
    }

    function removeProduct(id) {
        let arr = cart;
        const itemIndex = cart.findIndex((item) => item.id === id);
        arr.splice(itemIndex, 1);
        setCart([...arr]);
    }

    function checkProduct(id) {
        let arr = cart;
        const itemIndex = cart.findIndex((item) => item.id === id);

        if (itemIndex === -1) {
            return null;
        } else {
            return arr[itemIndex];
        }
    }
    function clearCart() {
        setCart([]);
    }
    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, checkProduct, removeQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider