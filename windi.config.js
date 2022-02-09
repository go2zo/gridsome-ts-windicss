import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  preflight: false,
  theme: {
    extend: {
      spacing: {
        base: '320px',
        header: 'var(--header-height)',
      },
      height: (theme) => ({
        '(full-18)': `calc(100% - ${theme('spacing.18')})`,
        '(full-header)': `calc(100% - ${theme('spacing.header')})`,
        '(screen-18)': `calc(100vh - ${theme('spacing.18')})`,
        '(screen-header)': `calc(100vh - ${theme('spacing.header')})`,
      }),
      maxHeight: (theme) => ({
        '(screen-18)': `calc(100vh - ${theme('spacing.18')})`,
        '(screen-header)': `calc(100vh - ${theme('spacing.header')})`,
      }),
      minHeight: () => ({
        "fill-available": "-webkit-fill-available"
      }),
      maxWidth: {
        base: '320px',
        '8xl': '90rem',
        half: '50%',
      },
      minWidth: {
        half: '50%',
      },
      inset: {
        18: '4.5rem',
      }
    },
  },
  shortcuts: {
    'd-container': 'max-w-7xl mx-auto',
    'd-blur-header': 'blur-12',
    'd-bg-header': 'bg-white bg-opacity-80 dark:bg-gray-900',
    'd-border-header': 'border-b-1 border-gray-200 dark:border-gray-800',
    'd-header': 'sticky w-full top-0 z-50 d-bg-header d-border-header d-blur-header h-header',
    'd-primary-text-hover': 'text-gray-600 dark:text-gray-400',
  }
})
