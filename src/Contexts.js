import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    return(
        <CartContext.Provider value = {[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState()

    return(
        <UserContext.Provider value = {[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export const ShippingContext = React.createContext();

export const ShippingProvider = (props) => {
    const [shippingInfo, setShippingInfo] = useState()

    return(
        <ShippingContext.Provider value = {[shippingInfo, setShippingInfo]}>
            {props.children}
        </ShippingContext.Provider>
    )
}