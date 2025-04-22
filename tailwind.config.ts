import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '500px',
        sm: '640px',
        md: '768px',
        lg: '860px',
        xl: '1024px',
        '2xl': '1260px',
        '3xl': '1300px',
        '4xl': '1500px'
      }
    }
  },
  plugins: []
}

export default config
