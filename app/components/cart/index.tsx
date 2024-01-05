'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { cookies } from 'next/headers';

const Cart = () => {
    const [isVisible, setIsVisible] = useState(true);

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
            <div className="flex w-full items-center gap-3 flex-col">
                <span className="relative w-full text-center font-baloo font-bold text-xl text-primary">
                    Minhas capturas
                </span>
                <div className="w-[80%] h-[2px] rounded-xl bg-light" />
            </div>
        </aside>
    );
};

export default Cart;
