import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 카테고리별 포인트 컬러
        hanja: "#c2410c",   // 따뜻한 주황 (한자)
        latin: "#1d4ed8",   // 차분한 파랑 (라틴어)
        idiom: "#15803d",   // 깊은 초록 (사자성어)
      },
      fontFamily: {
        cjk: ['"Noto Serif KR"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
