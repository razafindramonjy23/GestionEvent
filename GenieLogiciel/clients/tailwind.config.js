/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E0DDCA',
        'secondary ' : '#F4A8CF'
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },


      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
        "slide-in": "slideIn 1s ease-in-out",
        "bounce": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}