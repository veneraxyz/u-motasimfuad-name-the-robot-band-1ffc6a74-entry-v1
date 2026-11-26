// Name the Robot Band — make.fun entry.
// Writes the one-line robot band name + hit-song entry to entry.txt
// in MAKEFUN_OUTPUT_DIR (defaults to /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY =
  "The Rusty Bolts — their hit '404 Love Not Found' crashed the charts, then their drummer.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
