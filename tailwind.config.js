/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    screens: {
      lg: { max: '1024px' },
      md: { max: '744px' },
      s: { max: '595px' },
      xs: { max: '495px' },
      xxs: { max: '320px' },
    },
    colors: {
      transparent: 'transparent',
      blue: {
        450: '#DCEDF3',
      },
      gray: {
        450: '#AEC0C7',
        900: '#5A666B',
      },
      black: {
        900: '#000000',
        50: '#00000025',
      },
      white: '#FFFFFF',
    },
    spacing: {
      0.5: '0.25rem',
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '3rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
    fontSize: {
      body3: ['14px', '20px'],
      body2: ['16px', '22px'],
      body1: ['18px', '24px'],
    },
    extend: {
      width: {
        screen: ['100vw', '100dvw'],
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
      boxShadow: {
        border: 'inset 0 0px 0px 1px #AEC0C7',
        thickness: '1px 1px 0px 0px #5A666B90'
      },
    },
  },
  plugins: [],
};
