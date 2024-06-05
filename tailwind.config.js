/** @type {import('tailwindcss').Config} */

export default {
  content: ["./public/index.html", "./src/**/*.+(js|ts|jsx|tsx)"], // Adjusted content paths
  theme: {
    extend: {
      inset : {
        '4' : '1rem',
      },

      fontFamily: {
        'rust': ['Rust', 'sans-serif'], // Keep as is, assuming 'Rust' is the correct font family name
        'antonio': ['Antonio', 'serif'], // Keep as is, assuming 'Antonio' is the correct font family name
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
    import('@tailwindcss/aspect-ratio'),
  ],
};
