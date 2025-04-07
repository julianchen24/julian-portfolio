/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4f46e5", // indigo-600
          DEFAULT: "#4338ca", // indigo-700
          dark: "#3730a3", // indigo-800
        },
        nightsky: {
          top: "#C2E0FF",
          bottom: "#8192B1",
          stars: "#FFFFFF",
          mountain: {
            back: "#668DCA",
            mid: "#4D73B8",
            front: "#4165AA",
          },
          water: "#5C84CC",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
