/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'all-sides': '0 4px 6px 0 rgba(0, 0, 0, 0.1), 4px 0 6px 0 rgba(0, 0, 0, 0.1), -4px 0 6px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}