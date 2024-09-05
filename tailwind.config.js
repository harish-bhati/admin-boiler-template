/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{tsx,js,ts,jsx}'],
  theme: {
    extend: {
      screens: {
        md: "768px",                                                
        xmd: "992px",
        lg: "1025px",
        xl: "1281px",
        xxl: "1441px",
      },
      colors: {
        white: {
          light: '#fff',
          medium: '#D3E2F7',
          dark: '#F5F5F5',
        },
        black: {
          light: '#5b6b79',
          dark: '#000',
        },
        grey: {
          dark:'#1d2630',
        },
        blue:{
          light: '#3366ff14',
          lighter: '#3366ff',
        },
        green:{
          lighter: '#ccf9b6',
          light: '#cbfffb',
          dark: '#25d366',
        },
        orange:{
          light: '#DB970E',
        },
        pink:{
          dark: '#fe3bab',
        },
        green:{
          dark:"#137c0d"
        }
      },
      fontFamily:{
        'bold':['Inter-Bold'],
        'Medium':['Inter-Medium'],
        'Regular':['Inter-Regular'],
      }
    },
  },
  plugins: [],
}

