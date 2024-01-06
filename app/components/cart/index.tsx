'use client';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import { cookies } from 'next/headers';
import CartContext from '@/context/CartContext';
import { FaAnglesRight } from 'react-icons/fa6';

const Cart = () => {
    const { isVisible, setIsVisible } = useContext(CartContext);

    return (
        <aside
            className={clsx(
                'fixed flex pt-5 items-center z-50 flex-col w-[20%] top-0 bottom-0 bg-white border-left border',
                {
                    'right-full': !isVisible,
                    'right-0': isVisible,
                },
            )}
        >
            <div className="flex w-full px-[5%] items-center gap-3 flex-col">
                <div className="w-full items-center justify-between flex">
                    <span className="font-baloo font-bold text-xl text-highlightC">
                        Minhas capturas
                    </span>

                    <button onClick={() => setIsVisible(false)}>
                        <FaAnglesRight className="text-highlightC" />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Cart;
