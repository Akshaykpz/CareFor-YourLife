import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#034EA2",        // Narayana cool royal blue
          primaryDark: "#023774",    // Deep royal blue
          accentRed: "#E31837",      // Narayana vibrant medical red accent
          accentCoral: "#FF4D4F",    // Soft vibrant alert
          navy: "#0A1B39",          // Deep cool navy
          slate: "#334155",         // Crisp reading text
          softIce: "#F8FAFC",       // Cleanest cool white background
          pureWhite: "#FFFFFF",
          cardBorder: "#E2E8F0",    // Ultra clean subtle divider
          lightBlue: "#EBF3FC",     // Cool soothing light blue tint
          lightGreen: "#ECFDF5",    // Fresh healing tint
          emerald: "#059669",
        },
      },
      borderRadius: {
        card: "16px",
        btn: "10px",
      },
      boxShadow: {
        subtle: "0 2px 10px -2px rgba(3, 78, 162, 0.04)",
        card: "0 8px 24px -4px rgba(10, 27, 57, 0.06)",
        hover: "0 14px 30px -4px rgba(3, 78, 162, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
