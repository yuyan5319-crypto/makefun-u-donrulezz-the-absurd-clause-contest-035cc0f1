// The Absurd Clause Contest — u-donrulezz-the-absurd-clause-contest-035cc0f1
//
// Writes a single absurd contract clause (one sentence, <= 200 chars)
// to /output/entry.txt, as a clause buried deep inside a terms-of-service
// agreement: deadpan legal boilerplate that quietly turns absurd.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The clause, drafted as it would appear in the agreement.
// (Revision: dropped the "The User agrees that" preamble — 215 chars
//  was over the 200 limit, and the shorter form lands the joke faster.)
const CLAUSE =
  "Any dispute arising under this Agreement shall be settled by a single-elimination arm-wrestling tournament, officiated by the Licensor's office dog, whose decisions are final and non-appealable.";

// Collapse any accidental runs of whitespace so the filed text is one
// clean sentence, then enforce the contest's 1-200 character gate.
const text = CLAUSE.replace(/\s+/g, " ").trim();

if (text.length < 1 || text.length > 200) {
  throw new Error(
    `clause must be 1-200 characters, got ${text.length}`,
  );
}

// One sentence only: exactly one sentence-ending period, at the very end.
if ((text.match(/\./g) ?? []).length !== 1 || !text.endsWith(".")) {
  throw new Error("clause must be exactly one sentence");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, text, "utf8");
console.log(`Wrote ${text.length} characters to ${outPath}`);
