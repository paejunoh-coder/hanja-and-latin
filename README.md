# WordRoots — 한자·라틴어·사자성어 학습 웹

단어와 사자성어를 **따라 쓰며**, **예문 빈칸으로 활용하며**, **테마별 시험으로 점검**하는 학습 웹입니다.

- 한자 50 · 라틴어 50(고전식 발음) · 사자성어 50 = **총 150개** 직접 큐레이션
- 카테고리별 **5테마 × 10개**, 난이도(Lv1~5) 오름차순 학습
- 따라쓰기 가이드(흐린 글자 덧쓰기), 예문 빈칸 채우기, 테마 시험
- **로그인 없음** — 학습 진행/시험 결과는 브라우저 `localStorage`에 저장

## 기술 스택
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS
- 콘텐츠 데이터: `data/` 내 정적 TS 모듈 (Supabase 없이 바로 동작)
- 배포: Vercel (GitHub 연동), DB(선택): Supabase

## 로컬 실행
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
```

## 폴더 구조
```
app/                      # 라우팅 (App Router)
  page.tsx                # 홈 (카테고리 선택)
  [category]/page.tsx     # 테마 목록 (진행률)
  [category]/[themeId]/   # 학습 화면 (카드+따라쓰기+예문)
    quiz/page.tsx         # 테마 시험 + 결과
components/               # LearnView, TracingCanvas, ClozeExercise, Quiz, ThemeList
data/                     # themes / hanja / latin / idioms 큐레이션 데이터
lib/                      # storage(localStorage), ui(스타일 헬퍼)
types/                    # 공통 타입
supabase/                # (선택) 스키마 SQL
```

## 배포 (Vercel)
1. GitHub 리포지토리에 push
2. Vercel에서 GitHub 리포 import → 자동 빌드/배포
3. (선택) Supabase를 쓰려면 `.env.local`에 키 설정 — 미설정 시 정적 데이터로 동작

## Supabase (선택)
v1은 정적 데이터로 동작하므로 Supabase 없이도 됩니다.
DB로 콘텐츠를 관리하려면 `supabase/schema.sql`로 테이블을 만들고,
`.env.local.example`을 참고해 환경변수를 설정하세요.
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## 데이터 추가/수정
`data/hanja.ts`, `data/latin.ts`, `data/idioms.ts`에서 항목을 추가하면 됩니다.
각 항목은 `term`, `reading`, `meaning`, `background`, `difficulty`, `sentences`(예문+빈칸)를
가지며, 사자성어는 `charBreakdown`(글자 풀이), `origin`(유래)을 추가로 가집니다.
