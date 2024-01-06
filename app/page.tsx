'use client';

import { useState } from 'react';
import HeroSection from './components/pages/Home/hero';
import ProductsSection from './components/pages/Home/products';

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center bg-white transition duration-300 ease-in`}
        >
            <HeroSection />
            <div className="bg-hi relative flex w-full items-center justify-center pt-10 before:absolute before:left-0 before:right-0 before:top-[-30px] before:z-30 before:h-[30px] before:w-full before:bg-gradient-to-t before:from-black before:to-transparent">
                <ProductsSection />
            </div>
        </main>
    );
}
