import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: '/tomoki_blog_vite/', // GitHub Pages用のベースURL（リポジトリ名）
  build: {
    outDir: 'docs', // 出力フォルダを 'docs' に変更（GitHub Pages用）
  },
})
