import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Ensure the path resolution works correctly
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Resolves '@' to the src directory
    },
  },
  server: {
    port: 5173, // You can specify the port if you want
  },
  define: {
    'process.env': {} 
  }
});