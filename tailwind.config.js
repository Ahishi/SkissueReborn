/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte, html}"],
  theme: {
    extend: {
      spacing: {
        'quarter': '0.25rem',
        'half': '0.5rem',
        'default': '2rem',
        'double': '4rem',
        'triple': '6rem',
        'quadruple': '8rem',
      },
      colors: {
        background: "#212121",
        container: {
            DEFAULT: "#2A2A2A",
        },
        primary: "#10b981",
        secondary: "#0ea5e9",
        tertiary: "#78716c",
      }
    },
  },
  plugins: [],
}

