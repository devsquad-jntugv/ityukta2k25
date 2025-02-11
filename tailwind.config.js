/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [ "Pacifico", 'serif'],
        varun:["Exo 2",'serif'], 
        kittu:["Josefin Sans", 'serif'],
        cult:["Permanent Marker", 'serif']// Adds Roboto font
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        fadeInSlideUp: 'fadeInSlideUp 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, and Opera
          },
        },
      });
    }
  ],
}
}
