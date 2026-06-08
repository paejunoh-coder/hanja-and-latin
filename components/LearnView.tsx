"use client";

import { useState } from "react";
import Link from "next/link";
import type { Category, Theme, Word } from "@/types";
import { CATEGORY_LABELS } from "@/types";
import { setWordStatus } from "@/lib/storage";
import { categoryStyle } from "@/lib/ui";

export default function LearnView({
  category,
  theme,
  words,
}: {
  category: Category;
  theme: Theme;
  words: Word[];
}) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const style = categoryStyle[category];
  const word = words[index];
  const isIdiom = category === "idiom";

  function go(delta: number) {
    setFlipped(false);
    setIndex((i) => Math.min(Math.max(i + delta, 0), words.length - 1));
  }

  function mark(status: "known" | "learning") {
    setWordStatus(word.id, status);
    if (index < words.length - 1) go(1);
  }

  return (
    <div className="space-y-6">
      {/* 헤더 / 브레드크럼 */}
      <div className="flex items-center gap-2 text-sm text-stone-400">
        <Link href="/" className="hover:text-stone-600">홈</Link>
        <span>/</span>
        <Link href={`/${category}`} className="hover:text-stone-600">
          {CATEGORY_LABELS[category]}
        </Link>
        <span>/</span>
        <span className="text-stone-600">{theme.name}</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{theme.name}</h1>
        <span className="text-sm text-stone-400">
          {index + 1} / {words.length}
        </span>
      </div>

      {/* 진행 바 */}
      <div className="h-1.5 rounded-full bg-stone-100 overflow-hidden">
        <div
          className={`h-full ${style.bg}`}
          style={{ width: `${((index + 1) / words.length) * 100}%` }}
        />
      </div>

      {/* 단어 카드 */}
      <div
        onClick={() => setFlipped((f) => !f)}
        className={`rounded-2xl border ${style.border} ${style.soft} p-8 text-center cursor-pointer select-none min-h-[220px] flex flex-col items-center justify-center gap-3`}
      >
        <span className={`text-xs font-medium ${style.text}`}>
          난이도 Lv{word.difficulty} · 카드를 누르면 뜻이 보여요
        </span>
        <div className="font-cjk text-6xl font-bold tracking-wide">
          {word.term}
        </div>
        <div className="text-stone-500">{word.reading}</div>
        {flipped && (
          <div className="mt-2 text-lg font-medium text-stone-800">
            {word.meaning}
          </div>
        )}
      </div>

      {/* 사자성어 글자 풀이 */}
      {isIdiom && word.charBreakdown && (
        <div className={`rounded-xl border ${style.border} bg-white p-4`}>
          <h3 className="text-sm font-semibold mb-1">글자 풀이</h3>
          <p className="text-stone-700 font-cjk">{word.charBreakdown}</p>
        </div>
      )}

      {/* 배경 설명 */}
      <div className="rounded-xl border border-stone-200 bg-white p-4">
        <h3 className="text-sm font-semibold mb-1">쉽게 알아보기</h3>
        <p className="text-stone-700 leading-relaxed">{word.background}</p>
      </div>

      {/* 사자성어 유래 */}
      {isIdiom && word.origin && (
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <h3 className="text-sm font-semibold mb-1">유래 이야기</h3>
          <p className="text-stone-700 leading-relaxed">{word.origin}</p>
        </div>
      )}

      {/* 예문으로 익히기 */}
      <div>
        <h3 className="text-sm font-semibold mb-2">예문으로 익히기</h3>
        <p className="text-xs text-stone-400 mb-2">이렇게 쓸 수 있어요.</p>
        <div className="space-y-3">
          {word.sentences.map((s, i) => (
            <div
              key={i}
              className={`rounded-xl border ${style.border} bg-white p-4`}
            >
              <p className="font-cjk text-lg leading-relaxed text-stone-800">
                {s.text}
              </p>
              <p className="mt-2 text-sm text-stone-600">{s.translation}</p>
              {s.source && (
                <p className="mt-1 text-xs text-stone-400">— {s.source}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 학습 체크 */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => mark("learning")}
          className="px-4 py-2 rounded-lg border border-stone-300 text-sm hover:bg-stone-50"
        >
          아직 모르겠어요
        </button>
        <button
          onClick={() => mark("known")}
          className={`px-4 py-2 rounded-lg ${style.bg} text-white text-sm`}
        >
          알아요 (완료)
        </button>
      </div>

      {/* 이동 */}
      <div className="flex items-center justify-between border-t border-stone-100 pt-4">
        <button
          onClick={() => go(-1)}
          disabled={index === 0}
          className="px-4 py-2 rounded-lg border border-stone-300 text-sm disabled:opacity-40"
        >
          ← 이전
        </button>
        {index === words.length - 1 ? (
          <Link
            href={`/${category}/${theme.id}/quiz`}
            className="px-4 py-2 rounded-lg bg-stone-800 text-white text-sm"
          >
            테마 시험 보기 →
          </Link>
        ) : (
          <button
            onClick={() => go(1)}
            className="px-4 py-2 rounded-lg border border-stone-300 text-sm"
          >
            다음 →
          </button>
        )}
      </div>
    </div>
  );
}
