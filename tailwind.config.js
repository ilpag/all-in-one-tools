/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBF8FF',
        ink: '#1F1B34',
        night: '#171331',
        coral: '#FF5D73',
        amber: '#FFB100',
        mint: '#2FD8A3',
        violet: '#8C6BFF',
        sky: '#34B3F1',
        indigo: '#5B4FE0',
      },
      fontFamily: {
        display: ['"Fredoka"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        chip: '0 6px 0 0 rgba(31,27,52,0.9)',
        chipHover: '0 3px 0 0 rgba(31,27,52,0.9)',
        card: '0 10px 30px -10px rgba(31,27,52,0.25)',
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(31,27,52,0.06) 1px, transparent 0)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--tilt, 0deg))' },
          '50%': { transform: 'translateY(-8px) rotate(var(--tilt, 0deg))' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(var(--tilt, 0deg))' },
          '50%': { transform: 'rotate(calc(var(--tilt, 0deg) * -1))' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        wiggle: 'wiggle 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
