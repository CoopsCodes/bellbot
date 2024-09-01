import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: { main: "0px 14px 10px -11px rgba(0,0,0,0.45)" },
    },
    colors: {
      white: "#FFFFFF",
      background: "#EAEAEA",
      backgroundAlt: "#EFEAE5",
      hero: "#E15A1D",
      grey: "#999",
    },
  },
  plugins: [],
};
export default config;
