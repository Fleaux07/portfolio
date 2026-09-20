/**
 * Prefixes a logical, root-relative path (e.g. "/stages", "/images/foo.jpg")
 * with Astro's configured `base` (e.g. "/portfolio/"), so internal links and
 * assets keep working when the site is served from a sub-path.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
}
