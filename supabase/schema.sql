-- WordRoots Supabase 스키마 (선택)
-- v1 앱은 정적 데이터로 동작합니다. DB로 콘텐츠를 관리하고 싶을 때만 사용하세요.

create type category as enum ('hanja', 'latin', 'idiom');

create table if not exists themes (
  id          text primary key,
  category    category not null,
  name        text not null,
  description text not null,
  "order"     int not null default 0
);

create table if not exists words (
  id             text primary key,
  category       category not null,
  theme_id       text not null references themes(id) on delete cascade,
  term           text not null,
  reading        text not null,
  meaning        text not null,
  background     text not null,
  difficulty     int not null check (difficulty between 1 and 5),
  char_breakdown text,            -- 사자성어 전용: 글자별 풀이
  origin         text,            -- 사자성어 전용: 유래(고사)
  created_at     timestamptz default now()
);

create table if not exists sentences (
  id          bigint generated always as identity primary key,
  word_id     text not null references words(id) on delete cascade,
  text        text not null,
  translation text not null,
  cloze       text not null,      -- 빈칸은 ___ 로 표기
  answer      text not null
);

create index if not exists idx_words_theme on words(theme_id);
create index if not exists idx_words_category on words(category);
create index if not exists idx_sentences_word on sentences(word_id);

-- 콘텐츠는 누구나 읽기 가능 (읽기 전용)
alter table themes enable row level security;
alter table words enable row level security;
alter table sentences enable row level security;

create policy "public read themes"   on themes   for select using (true);
create policy "public read words"     on words     for select using (true);
create policy "public read sentences" on sentences for select using (true);
