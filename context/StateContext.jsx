import React, {createContext, useContext, useState, useEffect} from 'react'
import { toast } from 'react-hot-toast'

const StateContext = createContext();

function StateContextProvider({ children }) {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantities, settTotalQuantities] = useState()
    const [qty, setQty] = useState(1)

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
           if (prevQty < 1) return 1

           return prevQty - 1;
        });
    }

    return (
        <StateContext.Provider
            value={{
                showCart,
                totalPrice,
                cartItems,
                totalQuantities,
                qty,
                incQty,
                decQty,
            }}
        > 
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider;