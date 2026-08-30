import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: If deploying to https://<user>.github.io/<repo>/,
// set base to '/<repo>/'. If deploying to https://<user>.github.io/ (a
// user/org page) or a custom domain, set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/all-in-one-tools/',
})
