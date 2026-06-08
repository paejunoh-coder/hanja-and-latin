import type { Category } from "@/types";

export const categoryStyle: Record<
  Category,
  { text: string; bg: string; border: string; ring: string; soft: string }
> = {
  hanja: {
    text: "text-orange-700",
    bg: "bg-orange-600",
    border: "border-orange-200",
    ring: "focus:ring-orange-400",
    soft: "bg-orange-50",
  },
  latin: {
    text: "text-blue-700",
    bg: "bg-blue-700",
    border: "border-blue-200",
    ring: "focus:ring-blue-400",
    soft: "bg-blue-50",
  },
  idiom: {
    text: "text-green-700",
    bg: "bg-green-700",
    border: "border-green-200",
    ring: "focus:ring-green-400",
    soft: "bg-green-50",
  },
};

export function isValidCategory(value: string): value is Category {
  return value === "hanja" || value === "latin" || value === "idiom";
}
