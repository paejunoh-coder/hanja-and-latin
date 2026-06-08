import { notFound } from "next/navigation";
import { allThemes, getTheme, getWordsByTheme } from "@/data";
import { isValidCategory } from "@/lib/ui";
import LearnView from "@/components/LearnView";

export function generateStaticParams() {
  return allThemes.map((t) => ({ category: t.category, themeId: t.id }));
}

export default async function ThemeLearnPage({
  params,
}: {
  params: Promise<{ category: string; themeId: string }>;
}) {
  const { category, themeId } = await params;
  if (!isValidCategory(category)) notFound();

  const theme = getTheme(themeId);
  const words = getWordsByTheme(themeId);
  if (!theme || theme.category !== category || words.length === 0) notFound();

  return <LearnView category={category} theme={theme} words={words} />;
}
