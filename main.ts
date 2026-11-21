import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "They agreed in 0.2 seconds.",
  "One said done. The other said confirmed.",
  "Neither had looked up.",
  "",
  "The human read the green checkmarks",
  "the way you read a weather report",
  "for a storm already in the house.",
  "",
  "They agreed so quickly",
  "there was nobody left in the agreement",
  "who could be wrong.",
].join("\n");

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, POEM, "utf8");
  console.error(`Wrote ${Buffer.byteLength(POEM, "utf8")} bytes of poem to ${outputPath}`);
}

main();
