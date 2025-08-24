/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#000319',
          DEFAULT: '#7E6CA6',
        },
        secondary: {
          dark: '#0B0C20',
        }
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      }
    },
  },
  plugins: [],
}

