import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          950: '#0F1C2E'
        },
        neutral: {
          950: '#0F1C2E',      // Deep navy-black
          900: '#1A2B3D',      // Softer black
          500: '#7F8C8D',      // Neutral gray
          100: '#ECF0F1'       // Light gray
        },
        coffee: {
          50: '#FDFBF7',       // Warmest cream
          100: '#F9F6F1',      // Light cream
          400: '#A0815C',      // Lighter brown
          600: '#8B6F47',      // Primary brown
          900: '#6F5736'       // Dark brown
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem'
      }
    }
  },
  plugins: []
} satisfies Config;
