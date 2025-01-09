/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#9333ea',
        
        dark: {
          100: '#1f2937',
          200: '#111827',
        },
        light: {
          100: '#f9fafb',
          200: '#e5e7eb',
        },
      },
    },
  },

}
