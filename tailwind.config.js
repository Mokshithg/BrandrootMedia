/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rust': ['Rust', 'sans-serif'], // Assuming Rust is a font family name, adjust as necessary
        'antonio': ['Antonio', 'serif'], // Assuming Antonio is a font family name, adjust as necessary
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'garamond': ['Garamond', 'serif']
      },
      fontWeight: {
        bold: '700',
      }
    },
  },
  plugins: [
    import('@tailwindcss/aspect-ratio'), // Updated to use ES Module syntax
  ],
};
