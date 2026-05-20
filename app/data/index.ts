import m01 from "./m01";
import m02 from "./m02";
import m03 from "./m03";
import m04 from "./m04";
import m05 from "./m05";
import type { ModuleData } from "./types";

export const modules: ModuleData[] = [m01, m02, m03, m04, m05];

export function getModule(slug: string): ModuleData | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getAula(moduleSlug: string, aulaSlug: string) {
  const mod = getModule(moduleSlug);
  if (!mod) return undefined;
  const aula = mod.aulas.find((a) => a.slug === aulaSlug);
  if (!aula) return undefined;
  return { mod, aula };
}
