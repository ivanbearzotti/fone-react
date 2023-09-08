import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const [subtotal, setSubtotal] = useState(parseFloat(0));

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
            setSubtotal(subtotal => subtotal + item.price*quantity)
        } else {
            console.log("el producto ya fue agregado")
        }
    }

    const removeItem = (item, quantity) => {
        const cartUpdated = cart.filter(prod => prod.id !== item.id)
        setCart(cartUpdated)
        setSubtotal(subtotal => subtotal - item.price*quantity)
    }

    const clearCart = () => {
        setCart([])
        setSubtotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, subtotal }}>
            {children}
        </CartContext.Provider>
    )
}