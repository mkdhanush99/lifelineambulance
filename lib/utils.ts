/** Minimal className joiner — this project has no clsx/tailwind-merge dependency. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
