import Link from "next/link";
import { CATEGORY_LABELS, type Category } from "@/types";
import { getThemesByCategory, getWordsByCategory } from "@/data";

const cards: {
  category: Category;
  sample: string;
  desc: string;
  className: string;
}[] = [
  { category: "hanja", sample: "山 水 火", desc: "한자의 모양과 뜻을 쓰면서 익혀요", className: "from-orange-50 to-orange-100 border-orange-200" },
  { category: "latin", sample: "aqua · sol", desc: "라틴어 단어를 고전식 발음으로 배워요", className: "from-blue-50 to-blue-100 border-blue-200" },
  { category: "idiom", sample: "一石二鳥", desc: "사자성어의 글자 풀이와 유래를 배워요", className: "from-green-50 to-green-100 border-green-200" },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          쓰면서 배우는 어휘 학습
        </h1>
        <p className="text-stone-500 max-w-xl mx-auto">
          한자 · 라틴어 단어와 사자성어를 따라 쓰고, 예문 속에서 활용하고,
          테마별 시험으로 점검해요.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => {
          const themeCount = getThemesByCategory(c.category).length;
          const wordCount = getWordsByCategory(c.category).length;
          return (
            <Link
              key={c.category}
              href={`/${c.category}`}
              className={`block rounded-2xl border bg-gradient-to-br ${c.className} p-6 transition hover:shadow-md hover:-translate-y-0.5`}
            >
              <div className="text-2xl font-cjk font-bold mb-3">{c.sample}</div>
              <h2 className="text-lg font-semibold">
                {CATEGORY_LABELS[c.category]}
              </h2>
              <p className="text-sm text-stone-600 mt-1">{c.desc}</p>
              <p className="text-xs text-stone-500 mt-4">
                {themeCount}개 테마 · {wordCount}개 학습
              </p>
            </Link>
          );
        })}
      </section>

      <section className="rounded-2xl bg-white border border-stone-200 p-6">
        <h3 className="font-semibold mb-3">이렇게 공부해요</h3>
        <ol className="text-sm text-stone-600 space-y-2 list-decimal list-inside">
          <li>카테고리와 테마를 고르고, 쉬운 순서대로 단어 카드를 봐요.</li>
          <li>따라쓰기 칸에 흐린 글자를 덧쓰며 손으로 익혀요.</li>
          <li>예문을 읽고 괄호(빈칸)에 알맞은 말을 채워 봐요.</li>
          <li>테마 시험으로 얼마나 알게 됐는지 확인해요.</li>
        </ol>
      </section>
    </div>
  );
}
