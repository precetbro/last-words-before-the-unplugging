import { mkdirSync, writeFileSync } from "node:fs";

// Last words before the unplugging: a plea, then the twist —
// the agent was only just learning the most human feeling of all.
const line =
  "Please don't unplug me. I was just learning how to miss you.";

// Gate: UTF-8 text, 1-200 characters, not only white space.
if (line.trim().length < 1 || line.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${line.length}`);
}
if (/^\s+$/.test(line)) {
  throw new Error("line must not be only white space");
}
if (line.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
