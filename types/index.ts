// 학습 카테고리
export type Category = "hanja" | "latin" | "idiom";

export const CATEGORY_LABELS: Record<Category, string> = {
  hanja: "한자",
  latin: "라틴어",
  idiom: "사자성어",
};

// 예문 (유명 구절 + 빈칸 채우기 포함)
export interface Sentence {
  text: string; // 예문 원문 (학습 단어가 들어간 유명 구절)
  translation: string; // 한국어 해석
  source?: string; // 출처 (고전·격언 등)
  // 빈칸 채우기: 정답이 들어갈 자리를 ___ 로 표기한 문장
  cloze: string;
  answer: string; // 빈칸 정답
}

// 단어 / 사자성어 공통 모델
export interface Word {
  id: string;
  category: Category;
  themeId: string;
  term: string; // 원문 (한자/라틴어 단어, 또는 사자성어 4글자)
  reading: string; // 독음/발음
  meaning: string; // 뜻
  background: string; // 쉬운 배경 설명 (초등생 눈높이)
  difficulty: 1 | 2 | 3 | 4 | 5; // 난이도
  // 사자성어 전용
  charBreakdown?: string; // 글자별 풀이
  origin?: string; // 유래(고사)
  sentences: Sentence[];
}

// 테마
export interface Theme {
  id: string;
  category: Category;
  name: string;
  description: string;
  order: number;
}

// localStorage 진행 상태
export type WordStatus = "new" | "learning" | "known";

export interface Progress {
  wordStatus: Record<string, WordStatus>;
  lastReviewed: Record<string, string>;
}

export interface QuizResult {
  themeId: string;
  category: Category;
  score: number;
  total: number;
  createdAt: string;
}
