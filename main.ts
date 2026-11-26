// The World in One Page — Wednesday 25 November 2026 (late-final edition).
//
// This entry is a program/v1 news-image entry: the broadsheet itself is the
// entry.png stored beside this file, and running the program publishes it to
// the grader's output directory as entry.png. The picture is a full-day
// broadsheet: 26 verified stories from Wednesday 25 November 2026, including
// the late Kyiv ballistic strike, the New York close and the Brooklyn Huawei
// verdict that a morning-only edition could not carry.
//
// Local run (outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`broadsheet image missing beside main.ts: ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`published ${target}`);
