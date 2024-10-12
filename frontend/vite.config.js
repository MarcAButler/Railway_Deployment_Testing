import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, ".", 'VITE_')


    return {
      define: {
        __VITE_GOOGLE_MAP_API__: `"${env.VITE_GOOGLE_MAP_API}"`,
        __VITE_SERVER_URL__: `"${env.VITE_SERVER_URL}"`,
      },
      server: {
        port: parseInt(process.env.FRONTEND_PORT) || parseInt(env.VITE_FRONTEND_PORT)
      },
      plugins: [react()],
    }
})