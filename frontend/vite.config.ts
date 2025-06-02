import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react', 'react-icons'],
          maps: ['@googlemaps/js-api-loader', '@react-google-maps/api'],
          stripe: ['@stripe/react-stripe-js', '@stripe/stripe-js', 'stripe'],
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-icons',
      '@googlemaps/js-api-loader',
      '@react-google-maps/api',
      '@stripe/react-stripe-js',
      '@stripe/stripe-js',
      'stripe'
    ],
  },
  server: {
    port: 3000,
    host: true,
  },
});
