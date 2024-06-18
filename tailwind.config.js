/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Roboto", "Arial", 'Inter', 'sans-serif'],
        "serif": ["Merriweather", "serif", "Times New Roman"],
      },
      colors: {
        'bg': '#FFFFFF',
        "bg-secondary": "#313f3f",
        "accent": "#bf985f",
        'fg-heading': "#243b4a",
        "fg-heading-light": "#ffffff",
        "fg": "#515151"
      },
    },
  },
  plugins: [],
}

