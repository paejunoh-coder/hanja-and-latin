import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORY_LABELS } from "@/types";
import { getThemesByCategory } from "@/data";
import { isValidCategory } from "@/lib/ui";
import ThemeList from "@/components/ThemeList";

export function generateStaticParams() {
  return [{ category: "hanja" }, { category: "latin" }, { category: "idiom" }];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isValidCategory(category)) notFound();

  const themes = getThemesByCategory(category);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-stone-400">
        <Link href="/" className="hover:text-stone-600">홈</Link>
        <span>/</span>
        <span className="text-stone-600">{CATEGORY_LABELS[category]}</span>
      </div>
      <h1 className="text-2xl font-bold">{CATEGORY_LABELS[category]} 테마</h1>
      <ThemeList category={category} themes={themes} />
    </div>
  );
}
