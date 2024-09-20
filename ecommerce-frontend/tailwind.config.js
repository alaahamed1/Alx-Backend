module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#0c66ee',
        textColor: '#123c59',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        // You can also add other fonts here
      },
    },
  },
  plugins: [],
}