import type { Category, Theme, Word } from "@/types";
import { themes } from "./themes";
import { hanjaWords } from "./hanja";
import { latinWords } from "./latin";
import { idiomWords } from "./idioms";

export const allWords: Word[] = [...hanjaWords, ...latinWords, ...idiomWords];
export const allThemes: Theme[] = themes;

export function getThemesByCategory(category: Category): Theme[] {
  return allThemes
    .filter((t) => t.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getTheme(themeId: string): Theme | undefined {
  return allThemes.find((t) => t.id === themeId);
}

export function getWordsByTheme(themeId: string): Word[] {
  return allWords
    .filter((w) => w.themeId === themeId)
    .sort((a, b) => a.difficulty - b.difficulty);
}

export function getWordsByCategory(category: Category): Word[] {
  return allWords.filter((w) => w.category === category);
}

export function getWord(wordId: string): Word | undefined {
  return allWords.find((w) => w.id === wordId);
}
