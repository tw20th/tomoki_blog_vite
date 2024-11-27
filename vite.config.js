import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  base: '/tomoki_blog_vite/', // リポジトリ名を指定
  build: {
    outDir: 'docs', // GitHub Pages用の出力フォルダ
  },
})
