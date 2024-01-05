'use client';

import { useState } from 'react';
import HomeBannerSection from './components/pages/Home/hero';
import ProductsSection from './components/pages/Home/products';

export default function Home() {
    return (
        <main
            className={`flex gap-40 bg-white min-h-screen flex-col items-center transition ease-in duration-300`}
        >
            <HomeBannerSection />
            <ProductsSection />
        </main>
    );
}
