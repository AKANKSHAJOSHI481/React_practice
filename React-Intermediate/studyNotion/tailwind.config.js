/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'richblack-900': '#010914',
        'richblack-800' : '#161d29',
        'richblack-700' : '#262e3b',
      },
    },
  },
  plugins: [],
};
