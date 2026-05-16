/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#6B8F6B',
          light: '#8FAF8F',
          dark: '#4A6B4A',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EBE0',
        },
        charcoal: '#1A1A1A',
        ocean: {
          DEFAULT: '#4A7FA5',
          light: '#6A9FC5',
        },
        sand: '#D4B896',
        gold: '#C4A35A',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-xl': 'clamp(2.5rem, 5vw, 5rem)',
        'fluid-2xl': 'clamp(3rem, 6vw, 7rem)',
        'fluid-hero': 'clamp(4rem, 8vw, 8rem)',
      },
      boxShadow: {
        float: '0 20px 60px rgba(0,0,0,0.15)',
        'float-lg': '0 30px 80px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
};
