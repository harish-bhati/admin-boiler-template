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
      },
      fontFamily: {
        bold: ["Inter-Bold"],
        Medium: ["Inter-Medium"],
        Regular: ["Inter-Regular"],
        latoR: ["lato-regular"],
        latoB: ["lato-bold"],
      },
      backgroundImage: {
        'Login': "url('../assets/images/LoginBg.jpg')",
      }
    },
  },
    plugins: [],
};
