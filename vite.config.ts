import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      // 2. "@"를 "src" 폴더 전체로 매핑
      '@': path.resolve(__dirname, './src'),
    },
  },
});
