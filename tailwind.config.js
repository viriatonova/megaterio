module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    fontFamily:{
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    (process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
}