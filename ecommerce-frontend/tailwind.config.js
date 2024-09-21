module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#112D46',
        textColor: '#123c59',
        subColor: '#eab308',
        gradientColor: '#2680BE',
        lightYellow:'#FEE674',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        // You can also add other fonts here
      },
    },
  },
  plugins: [],
}