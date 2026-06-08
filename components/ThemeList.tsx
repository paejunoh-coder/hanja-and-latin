"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Category, Theme } from "@/types";
import { getWordsByTheme } from "@/data";
import { getThemeProgress } from "@/lib/storage";
import { categoryStyle } from "@/lib/ui";

export default function ThemeList({
  category,
  themes,
}: {
  category: Category;
  themes: Theme[];
}) {
  const [progress, setProgress] = useState<Record<string, number>>({});
  const style = categoryStyle[category];

  useEffect(() => {
    const next: Record<string, number> = {};
    for (const t of themes) {
      const ids = getWordsByTheme(t.id).map((w) => w.id);
      next[t.id] = getThemeProgress(ids);
    }
    setProgress(next);
  }, [themes]);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {themes.map((t) => {
        const count = getWordsByTheme(t.id).length;
        const pct = progress[t.id] ?? 0;
        return (
          <Link
            key={t.id}
            href={`/${category}/${t.id}`}
            className={`block rounded-2xl border ${style.border} bg-white p-5 transition hover:shadow-md`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{t.name}</h2>
              <span className="text-xs text-stone-400">{count}개</span>
            </div>
            <p className="text-sm text-stone-500 mt-1">{t.description}</p>
            <div className="mt-4">
              <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
                <div
                  className={`h-full ${style.bg} transition-all`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-stone-400 mt-1">학습 완료 {pct}%</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
