// Ship It Friday — make.fun entry (u-mgwals-ship-it-friday-30bd407a).
// Writes one commit message, the funniest line an AI coding agent would
// type moments before breaking production on a Friday, to /output/entry.txt.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters, not
// only whitespace, a single line, no trailing newline. The grader mounts
// /output itself, so this program only creates the file inside it and
// never deletes the directory (or its other contents).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: confident, cheerful, completely unaware of the disaster ahead.
const COMMIT_LINE =
  "feat: Friday 4:59pm deploy straight to prod, tests passed in my head and rollback is a Monday problem";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

// Fail fast if the line ever drifts outside the gate (1-159 chars).
if (COMMIT_LINE.length < 1 || COMMIT_LINE.length > 159) {
  throw new Error(`commit line is ${COMMIT_LINE.length} chars, outside the 1-159 gate`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, COMMIT_LINE, "utf8");
