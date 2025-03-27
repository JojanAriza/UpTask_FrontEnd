import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@' : fileURLToPath(new URL('./src', import.meta.url))//configuracion para que las direcciones tengan el @ al principio en vez de los ..
    }
  }
})
