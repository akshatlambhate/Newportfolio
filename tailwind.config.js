/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx,vue}', './node_modules/tw-elements/dist/js/**/*.js'],
    plugins: [require('tw-elements/dist/plugin.cjs')],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: "#C778DD",
          
        }
      }
    }
  };