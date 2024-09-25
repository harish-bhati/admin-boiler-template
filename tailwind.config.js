/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,js,ts,jsx}"],
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
        orange:{
          base:'var(--color-base)',
          white:'var(--color-white)',
          primary:'var(--color-primary)',
          secondary:'var(--color-secondary)',
          label:'var(--color-label)',
          input:'var(--color-input)',
          border:'var(--color-border)',
          link:'var(--color-link)',
          bg:'var(--color-bg)',
          orange:'var(--color-orange)',
          yellow:'var(--color-yellow)',
          green:'var(--color-green)',
          red:'var(--color-red)',
        },
        blue:{
          base:'var(--color-base)',
          white:'var(--color-white)',
          primary:'var(--color-primary)',
          secondary:'var(--color-secondary)',
          label:'var(--color-label)',
          input:'var(--color-input)',
          border:'var(--color-border)',
          link:'var(--color-link)',
          bg:'var(--color-bg)',
          orange:'var(--color-orange)',
          yellow:'var(--color-yellow)',
          green:'var(--color-green)',
          red:'var(--color-red)',
        },
        
  
        // white: {
        //   light: "#fff",
        //   medium: "#D3E2F7",
        //   dark: "#F5F5F5",
        // },
        // black: {
        //   light: "#1d2630",
        //   lighter: "#5b6b79",
        //   dark: "#000",
        // },
        // grey: {
        //   light: "#131920",
        //   dark: "#1d2630",
        // },
        // blue: {
        //   light: "#4680ff",
        //   verylight: "#edf2ff",
        //   lighter: "#3366ff",
        //   dark: "#4680ff",
        // },
        // green: {
        //   lighter: "#ccf9b6",
        //   dark: "#2ca87f",
        // },
        // orange: {
        //   light: "#e58a00",
        // },
        // pink: {
        //   dark: "#fe3bab",
        // },
        // green: {},
        // red: {
        //   medium: "#D62626",
        // },
      },
      fontFamily: {
        bold: ["Inter-Bold"],
        Medium: ["Inter-Medium"],
        Regular: ["Inter-Regular"],
        latoR: ["lato-regular"],
        latoB: ["lato-bold"],
      },
    },
  },
    plugins: [],
};
