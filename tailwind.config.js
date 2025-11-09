/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 pulled directly from theme.js
        primary: {
          DEFAULT: '#4d6ad2',
          dark: '#4a5cd3',
          light: '#3d4ba1ff',
        },
        secondary: {
          DEFAULT: '#f7d305',
          dark: '#fcf3ee',
          light: '#e6d98eff',
        },
        background: {
          primary: '#020617',
          secondary: '#0f172a',
          tertiary: '#1e293b',
        },
        text: {
          primary: '#ffffff',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
