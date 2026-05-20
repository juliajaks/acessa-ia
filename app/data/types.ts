export type Block =
  | string
  | { q: string }
  | { h: string }
  | { li: string[] }
  | { bh: Array<[string, string]> };

export interface AulaData {
  number: number;
  slug: string;
  title: string;
  intro: Block[];
  body: Block[];
  closing: string;
}

export interface ExerciseData {
  title: string;
  subtitle: string;
  blocks: Block[];
}

export interface ModuleMeta {
  number: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface ModuleData extends ModuleMeta {
  aulas: AulaData[];
  exercise: ExerciseData;
}
