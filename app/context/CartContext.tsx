'use client';

import { createContext, useState } from 'react';

interface CartContextProps {
    isVisible: boolean;
    setIsVisible: (val: boolean) => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <CartContext.Provider value={{ isVisible, setIsVisible }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
