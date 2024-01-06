import './globals.css';

import type { Metadata } from 'next';
import { Quicksand, Baloo_2 } from 'next/font/google';
import Navbar from './components/navbar';
import Cart from './components/cart';
import { CartContextProvider } from './context/CartContext';

const quicksand = Quicksand({
    variable: '--font-quicksand',
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});
const baloo = Baloo_2({
    variable: '--font-baloo',
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
    title: 'PokéMart',
    description: 'A maior de loja de itens pokémon!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body
                className={`${quicksand.variable} ${baloo.variable} font-quicksand`}
            >
                <CartContextProvider>
                    <Navbar />
                    <Cart />
                    {children}
                </CartContextProvider>
            </body>
        </html>
    );
}
