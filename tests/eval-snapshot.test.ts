import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { snapshotDirectory } from "../evals/lib/fs-snapshot.ts";

test("directory snapshots change when an existing file changes", async () => {
  const temporaryRoot = await mkdtemp(join(tmpdir(), "narravit-snapshot-test-"));
  const filePath = join(temporaryRoot, "reference.md");

  try {
    await writeFile(filePath, "original\n");
    const before = await snapshotDirectory(temporaryRoot);

    await writeFile(filePath, "modified\n");
    const after = await snapshotDirectory(temporaryRoot);

    assert.notDeepEqual(after, before);
    assert.equal(await readFile(filePath, "utf8"), "modified\n");
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
});
