'use client';

import { useState } from 'react';
import HomeBannerSection from './components/pages/Home/hero';
import ProductsSection from './components/pages/Home/products';
import HomeContext from './context/HomeContext';

export default function Home() {
    return (
        <main
            className={`flex bg-white min-h-screen flex-col items-center transition ease-in duration-300`}
        >
            <HomeBannerSection />
            <ProductsSection />
        </main>
    );
}
