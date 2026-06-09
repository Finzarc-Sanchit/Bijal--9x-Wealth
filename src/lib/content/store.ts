import { promises as fs } from "fs";
import path from "path";
import { defaultSiteContent } from "./defaults";
import { siteContentSchema, type SiteContent } from "./schema";

const CONTENT_DIR = path.join(process.cwd(), "content");
const CONTENT_FILE = path.join(CONTENT_DIR, "site-content.json");

function deepMerge<T extends Record<string, unknown>>(base: T, override: Partial<T>): T {
  const result = { ...base } as T;
  for (const key of Object.keys(override) as (keyof T)[]) {
    const baseVal = base[key];
    const overrideVal = override[key];
    if (
      overrideVal &&
      typeof overrideVal === "object" &&
      !Array.isArray(overrideVal) &&
      baseVal &&
      typeof baseVal === "object" &&
      !Array.isArray(baseVal)
    ) {
      result[key] = deepMerge(
        baseVal as Record<string, unknown>,
        overrideVal as Record<string, unknown>,
      ) as T[keyof T];
    } else if (overrideVal !== undefined) {
      result[key] = overrideVal as T[keyof T];
    }
  }
  return result;
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(CONTENT_FILE, "utf-8");
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    const merged = deepMerge(defaultSiteContent, parsed);
    return siteContentSchema.parse(merged);
  } catch {
    return siteContentSchema.parse(defaultSiteContent);
  }
}

export async function saveSiteContent(content: unknown): Promise<SiteContent> {
  const merged = deepMerge(
    defaultSiteContent,
    typeof content === "object" && content !== null ? (content as Partial<SiteContent>) : {},
  );
  const validated = siteContentSchema.parse({
    ...merged,
    updatedAt: new Date().toISOString(),
  });

  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.writeFile(CONTENT_FILE, JSON.stringify(validated, null, 2), "utf-8");
  return validated;
}

export function getContentFilePath(): string {
  return CONTENT_FILE;
}
