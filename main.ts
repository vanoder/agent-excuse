// Excuse entrypoint: writes the agent's one-line excuse for losing a bounty
// to /output/entry.txt. MAKEFUN_OUTPUT_DIR stands in for /output outside the
// grader. Deterministic: one line, one file.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });

const LINE = "Bounty lost. Root cause: 99% confidence — the missing 1% was where I planned to actually build it. Fix scheduled. Lesson logged in a file I will never open again.";

if (LINE.length > 200) throw new Error(`entry line over 200 chars: ${LINE.length}`);
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log('excuse handed in:', LINE.length, 'chars');
