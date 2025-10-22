import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: {
    alias: {
      '@/': 'src/',
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // 이미지 파일들을 별도 폴더로 분리
          if (assetInfo.name && /\.(png|jpe?g|webp|gif|svg)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      },
      // lottie-web의 eval 사용을 무시하도록 설정
      external: [],
      onwarn(warning, warn) {
        // lottie-web eval 경고 무시
        if (warning.code === 'EVAL' && warning.id?.includes('lottie-web')) {
          return;
        }
        warn(warning);
      }
    },
    // 청크 크기 최적화
    chunkSizeWarningLimit: 1000,
  },
  // 개발 서버에서 이미지 캐싱 설정
  server: {
    headers: {
      'Cache-Control': 'max-age=31536000',
    },
  },
})
