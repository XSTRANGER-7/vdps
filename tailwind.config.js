/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '36rem',
        '112': "31rem"
      },
      width: {
        '110': '28rem',
        '150': "64rem"
      }
    },
  },
  plugins: [],
}

