import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Deployed at domain root — no subdirectory prefix needed
  base: '/',

  build: {
    outDir: 'dist',
    // Emit source maps only in development; omit from production bundle
    sourcemap: false,
    // Raise chunk warning threshold slightly (large portrait image imports)
    chunkSizeWarningLimit: 800,
  },
});
