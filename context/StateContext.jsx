import React, {createContext, useContext, useState, useEffect} from 'react'
import { toast } from 'react-hot-toast'

const StateContext = createContext();

function StateContextProvider({ children }) {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantities, settTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        settTotalQuantities((prevTotalQuatities) => prevTotalQuatities * quantity)
        if(checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id == product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            
            setCartItems([...cartItems, {...product}]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`)
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
           if (prevQty - 1 < 1) return 1

           return prevQty - 1;
        });
    }

    return (
        <StateContext.Provider
            value={{
                showCart,
                setShowCart,
                totalPrice,
                cartItems,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
            }}
        > 
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider;

export const useStateContext = () => useContext(StateContext);