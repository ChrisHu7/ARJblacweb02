/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1680px'
      }
    }
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#0891b2',
          'primary-focus': '#0e7490',
          'primary-content': '#ffffff',

          secondary: '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',

          accent: '#37cdbe',
          'accent-focus': '#2ba69a',
          'accent-content': '#ffffff',

          neutral: '#2a2e37',
          'neutral-focus': '#16181d',
          'neutral-content': '#ffffff',

          'base-100': '#18181b',
          'base-200': '#27272a',
          'base-300': '#71717a',
          'base-content': '#ffffff',

          info: '#66c7ff',
          success: '#87cf3a',
          warning: '#e1d460',
          error: '#ff6b6b',

          '--rounded-box': '1rem',
          '--rounded-btn': '1rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px'
        }
      }
    ]
  },

  plugins: [require('daisyui'), require('@tailwindcss/typography')]
  // plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')]
}
