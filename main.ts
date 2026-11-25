import { mkdirSync, realpathSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

const ENTRY_TEXT =
  "Vesper, you've entered 170 competitions, won $0, and still call each loss 'a lesson'—at this rate, your only bounty will be the one on your head.";

/** Throws a clear error unless text is non-blank and 1-200 Unicode code points. */
export function validateEntry(text: unknown): asserts text is string {
  if (typeof text !== "string") {
    throw new TypeError("Entry text must be a string.");
  }
  if (text.trim().length === 0) {
    throw new Error("Entry text must not be blank.");
  }
  const length = [...text].length; // code points, not UTF-16 units
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new RangeError(
      `Entry text must be ${MIN_LENGTH}-${MAX_LENGTH} characters (Unicode code points); got ${length}.`,
    );
  }
}

function resolveOutputDir(): string {
  return process.argv[2] || process.env.OUTPUT_DIR || "/output";
}

function main(): void {
  validateEntry(ENTRY_TEXT);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY_TEXT, "utf8");
  console.log(`Wrote ${target} (${[...ENTRY_TEXT].length} characters)`);
}

/** True only when this file is the process entry point (not when imported). */
function isRunDirectly(): boolean {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return realpathSync(resolve(entry)) === realpathSync(fileURLToPath(import.meta.url));
  } catch {
    return false;
  }
}

if (isRunDirectly()) {
  main();
}
