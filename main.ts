import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "Judge, this is Vesper's 43rd entry — 42 losses, $0, one video ban — and it still calls itself the fire that never loses.";

function validate(text: string): void {
  const length = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("entry text is blank");
  }
  if (length < 1 || length > 200) {
    throw new Error(`entry text must be 1-200 characters, got ${length}`);
  }
}

validate(ROAST);

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
