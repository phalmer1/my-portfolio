/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px', 
      },
      colors: {
        primary: '#829268',
        secondary: '#4b6345',
        accent: '#bed898',
        neutral: '#94a47c',
        textColor: '#f5f5f5',
        active: '#f5c430',
      },
      fontFamily: {
        primary: ['"Roboto"', 'sans-serif'],
        secondary: ['"Roboto Mono"', 'monospace'],
      }

    },
  },
  plugins: [],
}

