import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            quicksand: ['var(--font-quicksand)', 'sans-serif'],
        },
        extend: {
            colors: {
                main: '#FFFFFF', //Branco
                primary: '#BDB2A2', //Cinza escuro
                secondary: '#F4F4F4', //Cinza claro
                highlightA: '#D00000', // Vermelho
                highlightB: '#FFCB05', // Amarelo
                highlightC: '#00274C', // Azul
            },

            fontFamily: {
                baloo: ['var(--font-baloo)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
