/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['*.html'],
  corePlugins: {
    preflight: false,
  },
  prefix:'tw-',
  theme: {
    extend: {},
  },
  plugins: [],
}

