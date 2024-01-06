'use client';

import CartContext from '@/context/CartContext';
import Image from 'next/image';
import { useContext } from 'react';

const CartButton = () => {
    const { isVisible, setIsVisible } = useContext(CartContext);

    return (
        <button
            onClick={() => setIsVisible(!isVisible)}
            title="Minhas capturas"
            className="flex items-center justify-center border rounded-full hover:scale-110 transition ease-out duration-300 w-[40px] h-[40px]"
        >
            <Image
                src={'/images/nav-cart.png'}
                alt="Carrinho"
                width={30}
                height={40}
                unoptimized
            />
        </button>
    );
};

export default CartButton;
