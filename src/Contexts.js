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

export const ResponseContext = React.createContext();

export const ResponseProvider = (props) => {
    const [response, setResponse] = useState()

    return(
        <ResponseContext.Provider value = {[response, setResponse]}>
            {props.children}
        </ResponseContext.Provider>
    )
}