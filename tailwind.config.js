/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif', ],
       
      },
      colors: {
        'heroco': '#5956E8',
        'titlecol': 'rgba(25,24,24,0.71)',

      },
      boxShadow: {
        'custom-glow': '0 4px 20px rgba(0, 0, 255, 0.5)', // Custom shadow
      },
      backgroundImage: {
        'img1': "url('/src/assets/cardimg1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}