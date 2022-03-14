module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require('./lucky-wheel.preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}
