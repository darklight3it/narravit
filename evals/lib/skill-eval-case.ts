import { readFile } from "node:fs/promises";

export interface SkillEvalBehavior {
  name: string;
  fixture: string;
  prompt: string;
  expectations: string[];
  must_exist?: string[];
  must_not_exist?: string[];
}

export interface SkillEvalCase {
  skill_name: string;
  trigger: {
    positive: string[];
    negative: string[];
  };
  behavioral: SkillEvalBehavior[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function requireString(value: unknown, path: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`${path} must be a non-empty string`);
  }
  return value;
}

function requireStringArray(value: unknown, path: string): string[] {
  if (!Array.isArray(value)) {
    throw new Error(`${path} must be an array`);
  }
  return value.map((item, index) => requireString(item, `${path}[${index}]`));
}

export function parseSkillEvalCase(value: unknown, source = "eval case"): SkillEvalCase {
  if (!isRecord(value)) {
    throw new Error(`${source} must be an object`);
  }

  const trigger = value.trigger;
  if (!isRecord(trigger)) {
    throw new Error(`${source}.trigger must be an object`);
  }

  const behavioral = value.behavioral;
  if (!Array.isArray(behavioral)) {
    throw new Error(`${source}.behavioral must be an array`);
  }

  return {
    skill_name: requireString(value.skill_name, `${source}.skill_name`),
    trigger: {
      positive: requireStringArray(trigger.positive, `${source}.trigger.positive`),
      negative: requireStringArray(trigger.negative, `${source}.trigger.negative`),
    },
    behavioral: behavioral.map((item, index) => {
      const path = `${source}.behavioral[${index}]`;
      if (!isRecord(item)) {
        throw new Error(`${path} must be an object`);
      }
      return {
        name: requireString(item.name, `${path}.name`),
        fixture: requireString(item.fixture, `${path}.fixture`),
        prompt: requireString(item.prompt, `${path}.prompt`),
        expectations: requireStringArray(item.expectations, `${path}.expectations`),
        must_exist: item.must_exist
          ? requireStringArray(item.must_exist, `${path}.must_exist`)
          : undefined,
        must_not_exist: item.must_not_exist
          ? requireStringArray(item.must_not_exist, `${path}.must_not_exist`)
          : undefined,
      };
    }),
  };
}

export async function readSkillEvalCase(path: string): Promise<SkillEvalCase> {
  const contents = await readFile(path, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(contents) as unknown;
  } catch (error) {
    throw new Error(`Invalid JSON in ${path}`, { cause: error });
  }
  return parseSkillEvalCase(parsed, path);
}
