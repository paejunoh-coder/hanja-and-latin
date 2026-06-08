"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Category, Theme, Word } from "@/types";
import { CATEGORY_LABELS } from "@/types";
import { addQuizResult } from "@/lib/storage";
import { categoryStyle } from "@/lib/ui";

type Question =
  | { kind: "meaning"; word: Word; prompt: string; answer: string; options: string[] }
  | { kind: "cloze"; word: Word; prompt: string; answer: string; options: string[] };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestions(words: Word[]): Question[] {
  return words.map((word, i) => {
    if (i % 2 === 0) {
      // 뜻 맞히기: 단어를 보고 알맞은 뜻 고르기
      const distractors = shuffle(words.filter((w) => w.id !== word.id))
        .slice(0, 3)
        .map((w) => w.meaning);
      return {
        kind: "meaning",
        word,
        prompt: `"${word.term}" (${word.reading}) 의 뜻은?`,
        answer: word.meaning,
        options: shuffle([word.meaning, ...distractors]),
      };
    }
    // 빈칸 채우기: 예문 빈칸에 알맞은 말 고르기
    const distractors = shuffle(words.filter((w) => w.id !== word.id))
      .slice(0, 3)
      .map((w) => w.term);
    return {
      kind: "cloze",
      word,
      prompt: word.sentences[0].cloze,
      answer: word.sentences[0].answer,
      options: shuffle([word.sentences[0].answer, ...distractors]),
    };
  });
}

export default function Quiz({
  category,
  theme,
  words,
}: {
  category: Category;
  theme: Theme;
  words: Word[];
}) {
  const questions = useMemo(() => buildQuestions(words), [words]);
  const style = categoryStyle[category];

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState<(string | null)[]>(
    () => questions.map(() => null)
  );
  const [done, setDone] = useState(false);
  const [saved, setSaved] = useState(false);

  const q = questions[index];

  function submit() {
    if (selected === null) return;
    setAnswered(true);
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = selected;
      return next;
    });
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      finish();
    }
  }

  function finish() {
    const score = questions.reduce(
      (acc, qq, i) => acc + (answers[i] === qq.answer ? 1 : 0),
      0
    );
    if (!saved) {
      addQuizResult({
        themeId: theme.id,
        category,
        score,
        total: questions.length,
        createdAt: new Date().toISOString(),
      });
      setSaved(true);
    }
    setDone(true);
  }

  if (done) {
    const score = questions.reduce(
      (acc, qq, i) => acc + (answers[i] === qq.answer ? 1 : 0),
      0
    );
    const wrong = questions.filter((qq, i) => answers[i] !== qq.answer);
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="space-y-6">
        <div className={`rounded-2xl border ${style.border} ${style.soft} p-8 text-center`}>
          <p className="text-sm text-stone-500">{theme.name} 시험 결과</p>
          <p className="text-5xl font-bold my-3">
            {score}
            <span className="text-2xl text-stone-400"> / {questions.length}</span>
          </p>
          <p className={`font-medium ${style.text}`}>{pct}점</p>
        </div>

        {wrong.length > 0 ? (
          <div className="space-y-3">
            <h2 className="font-semibold">틀린 문제 복습</h2>
            {wrong.map((qq) => (
              <div
                key={qq.word.id}
                className="rounded-xl border border-stone-200 bg-white p-4"
              >
                <p className="font-cjk text-lg">{qq.word.term} ({qq.word.reading})</p>
                <p className="text-sm text-stone-600 mt-1">
                  뜻: {qq.word.meaning}
                </p>
                <p className="text-sm text-green-600 mt-1">정답: {qq.answer}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-green-600 font-medium">
            모두 맞혔어요! 완벽해요 🎉
          </p>
        )}

        <div className="flex gap-2 justify-center">
          <Link
            href={`/${category}/${theme.id}`}
            className="px-4 py-2 rounded-lg border border-stone-300 text-sm hover:bg-stone-50"
          >
            다시 학습하기
          </Link>
          <Link
            href={`/${category}`}
            className={`px-4 py-2 rounded-lg ${style.bg} text-white text-sm`}
          >
            다른 테마 보기
          </Link>
        </div>
      </div>
    );
  }

  const parts = q.kind === "cloze" ? q.prompt.split("___") : null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-stone-400">
        <Link href={`/${category}`} className="hover:text-stone-600">
          {CATEGORY_LABELS[category]}
        </Link>
        <span>/</span>
        <Link href={`/${category}/${theme.id}`} className="hover:text-stone-600">
          {theme.name}
        </Link>
        <span>/</span>
        <span className="text-stone-600">시험</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{theme.name} 시험</h1>
        <span className="text-sm text-stone-400">
          {index + 1} / {questions.length}
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-stone-100 overflow-hidden">
        <div
          className={`h-full ${style.bg}`}
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <p className="text-xs text-stone-400 mb-2">
          {q.kind === "meaning" ? "뜻 맞히기" : "빈칸 채우기"}
        </p>
        <p className="text-lg font-cjk leading-relaxed">
          {q.kind === "cloze" && parts ? (
            <>
              {parts[0]}
              <span className="inline-block min-w-[3rem] text-center mx-1 border-b-2 border-stone-400">
                {selected ?? " "}
              </span>
              {parts[1]}
            </>
          ) : (
            q.prompt
          )}
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {q.options.map((opt) => {
          const isAnswer = opt === q.answer;
          const isSelected = opt === selected;
          let cls = "border-stone-300 hover:bg-stone-50";
          if (answered) {
            if (isAnswer) cls = "border-green-500 bg-green-50 text-green-700";
            else if (isSelected) cls = "border-red-400 bg-red-50 text-red-600";
            else cls = "border-stone-200 text-stone-400";
          } else if (isSelected) {
            cls = "border-stone-800 bg-stone-800 text-white";
          }
          return (
            <button
              key={opt}
              disabled={answered}
              onClick={() => setSelected(opt)}
              className={`px-4 py-3 rounded-xl border text-left font-cjk transition ${cls}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-stone-100 pt-4">
        {answered && (
          <span
            className={`text-sm font-medium ${
              selected === q.answer ? "text-green-600" : "text-red-500"
            }`}
          >
            {selected === q.answer ? "정답이에요!" : `정답: ${q.answer}`}
          </span>
        )}
        <div className="ml-auto">
          {!answered ? (
            <button
              onClick={submit}
              disabled={selected === null}
              className="px-5 py-2 rounded-lg bg-stone-800 text-white text-sm disabled:opacity-40"
            >
              확인
            </button>
          ) : (
            <button
              onClick={next}
              className={`px-5 py-2 rounded-lg ${style.bg} text-white text-sm`}
            >
              {index === questions.length - 1 ? "결과 보기" : "다음 →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
