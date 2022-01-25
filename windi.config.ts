import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  preflight: false,
  shortcuts: {
    'd-max-w-container': 'max-w-7xl',
    'd-container': 'd-max-w-container mx-auto',
  }
})
