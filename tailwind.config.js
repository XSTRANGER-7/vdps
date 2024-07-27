/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'ripple': 'ripple 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      height: {
        '128': '36rem',
        '112': '31rem',
      },
      width: {
        '110': '28rem',
        '150': '64rem',
      },
    },
  },
  plugins: [],
}
