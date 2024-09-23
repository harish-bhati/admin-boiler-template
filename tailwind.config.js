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
          light: '#1d2630',
          lighter:"#5b6b79",
          dark: '#000',
        },
        grey: {
          light:'#131920',
          dark:'#1d2630',
        },
        blue:{
          verylight:'#edf2ff',
          light: '#3366ff14',
          lighter: '#3366ff',
          dark: '#4680ff',

        },
        green:{
          lighter: '#ccf9b6',
          dark:"#2ca87f",
        },
        orange:{
          light: '#e58a00',
        },
        pink:{
          dark: '#fe3bab',
        },
        green:{
          
        },
        red:{
          medium:"#D62626"
        }
      },
      fontFamily:{
        'bold':['Inter-Bold'],
        'Medium':['Inter-Medium'],
        'Regular':['Inter-Regular'],
        'latoR':['lato-regular'],
        'latoB':['lato-bold'],
      }
    },
  },
  plugins: [],
}

