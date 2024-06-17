// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
  plugins: [uni()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    target: 'esnext', // 允许使用现代 JavaScript 特性
  },
});
