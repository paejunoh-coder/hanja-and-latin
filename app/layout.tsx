import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "WordRoots — 한자·라틴어·사자성어 학습",
  description:
    "한자·라틴어 단어와 사자성어를 쓰면서, 예문으로 활용하며, 테마별 시험으로 점검하는 학습 웹.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;700&display=swap"
        />
      </head>
      <body className="min-h-screen">
        <header className="border-b border-stone-200 bg-white/80 backdrop-blur sticky top-0 z-10">
          <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight">
              WordRoots
            </Link>
            <nav className="text-sm text-stone-500">단어를 쓰며 배우는 어휘 학습</nav>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-4xl px-4 py-8 text-center text-xs text-stone-400">
          WordRoots · 한자 · 라틴어 · 사자성어
        </footer>
      </body>
    </html>
  );
}
