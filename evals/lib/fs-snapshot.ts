import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

export async function snapshotDirectory(directory: string): Promise<string[]> {
  return (await collect(directory)).sort();
}

async function collect(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const result: string[] = [];

  for (const entry of entries) {
    const relativePath = join(directory, entry.name);
    const displayPath = relativePath.slice(directory.length + 1);

    if (entry.isDirectory()) {
      result.push(`${displayPath}/`);
      result.push(...(await collect(relativePath)).map((item) => join(entry.name, item)));
      continue;
    }

    if (entry.isFile()) {
      const contents = await readFile(relativePath);
      const digest = createHash("sha256").update(contents).digest("hex");
      result.push(`${displayPath}\0${digest}`);
      continue;
    }

    result.push(`${displayPath}\0${entry.isSymbolicLink() ? "symlink" : "special"}`);
  }

  return result;
}
