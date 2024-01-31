import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screen: {
      'mobileS': '320px',
      'mobileM': '375px',
      'mobileL': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'laptopL': '1440px',
      'desktop': '2560px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
