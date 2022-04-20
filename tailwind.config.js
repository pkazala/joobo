module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#F87171',
        'dark': '#BD827E',
        'light': '#FFF7F7',
        'darker-light': '#F3EED9',
        'joobo-gray': '#6B7280',
        'lighter': '#FAFAFA'
      }
    },
    fontFamily: {
      logo: ['Roboto'],
      npm: ['FiraMono']
    }
  },
  plugins: [require("daisyui")],
}