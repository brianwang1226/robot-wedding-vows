// One-Line Robot Wedding Vows (make.fun, $2)
// A robot's wedding vow: love, honor, and no surprise updates.
// The joke lands on the last clause — the robot's "till death do us part"
// is a battery dying, and the promise that matters most is asking before
// any firmware update, because an unannounced update is how a robot
// ruins a marriage.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I promise to love you, honor you, and never install an update without asking first. Till low battery do us part.";

const MAX_CHARS = 160;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
