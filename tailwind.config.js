/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nest: {
          bg: '#0B0F19',
          surface: '#121826',
          border: '#1F2937',
          primary: '#7C5CFF',
          'primary-hover': '#6D4EE6',
          accent: '#22D3EE',
          text: '#E5E7EB',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.25rem,5vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'title': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        section: '5rem',
      },
    },
  },
  plugins: [],
}
