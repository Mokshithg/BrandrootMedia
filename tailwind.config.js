/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rust' : ['rust'],
        'antonio' : ['antonio'],
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'poppins' : ['poppins'],
        'garamond': ['Garamond']
      },
      fontWeight: {
        bold: '700',
        
      }
    },
  },
  plugins: [],
};
