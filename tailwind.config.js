/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondColor: "#f5f5f5",
        dark: "#1b1b1b",
        primary: "#7b0d7b", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      boxShadow: {
        custom: "0 2px 10px 2px rgba(21, 44, 88, 0.2)",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
