'use client';

import { useState } from 'react';
import HomeBannerSection from './components/pages/Home/hero';
import ProductsSection from './components/pages/Home/products';
import HomeContext from './context/HomeContext';

export default function Home() {
    const [bgColor, setBgColor] = useState('#000000');

    const contextValue = {
        bgColor,
        setBgColor,
    };

    return (
        <HomeContext.Provider value={contextValue}>
            <main
                style={{ backgroundColor: bgColor }}
                className={`flex min-h-screen flex-col items-center transition ease-in duration-300`}
            >
                <HomeBannerSection />
                <ProductsSection />
            </main>
        </HomeContext.Provider>
    );
}
