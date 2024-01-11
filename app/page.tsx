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
            <div className="relative flex w-full items-center justify-center pt-10">
                <ProductsSection />
            </div>
            <div className="relative flex w-full items-center justify-center pt-10">
                <ProductsSection />
            </div>
        </main>
    );
}
