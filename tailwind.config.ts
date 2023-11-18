import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      quicksand: ["var(--font-quicksand)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FFCB05", //Amarelo
        secondary: "#D00000", //Vermelho
      },

      fontFamily: {
        baloo: ["var(--font-baloo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
