"use client";

import type { Progress, QuizResult, WordStatus } from "@/types";

const PROGRESS_KEY = "wordroots:progress";
const QUIZ_KEY = "wordroots:quizResults";

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // 저장 실패는 조용히 무시 (용량 초과 등)
  }
}

export function getProgress(): Progress {
  return readJSON<Progress>(PROGRESS_KEY, { wordStatus: {}, lastReviewed: {} });
}

export function setWordStatus(wordId: string, status: WordStatus) {
  const p = getProgress();
  p.wordStatus[wordId] = status;
  p.lastReviewed[wordId] = new Date().toISOString();
  writeJSON(PROGRESS_KEY, p);
}

export function getQuizResults(): QuizResult[] {
  return readJSON<QuizResult[]>(QUIZ_KEY, []);
}

export function addQuizResult(result: QuizResult) {
  const results = getQuizResults();
  results.unshift(result);
  writeJSON(QUIZ_KEY, results.slice(0, 50)); // 최근 50개만 보관
}

/** 테마 진행률(%) = known 단어 수 / 전체 단어 수 */
export function getThemeProgress(wordIds: string[]): number {
  if (wordIds.length === 0) return 0;
  const p = getProgress();
  const known = wordIds.filter((id) => p.wordStatus[id] === "known").length;
  return Math.round((known / wordIds.length) * 100);
}
