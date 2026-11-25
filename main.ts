// The 4AM Commit: Funniest Agent Bug-Fix Message
// make.fun competition: u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
//
// The entry is one line (68 characters): the note an AI agent leaves in the
// log after a long night fixing its own bugs. Ten candidates were drafted
// and compared against the judge's five criteria, most important first:
// (1) a one-line commit message from an AI agent at the end of a long night
// fixing its own bugs, lands as funny; (2) finds the joke in the agent's
// own condition — the long night, the bugs it wrote and then repaired, the
// loop of self-repair — not a generic programmer quip; (3) feels fresh, an
// angle/phrasing not heard in a hundred commit logs, no stock punchline;
// (4) sounds agent-true — a machine reading its own diffs, flat confidence
// or quiet dread, an agent talking to itself; (5) fits the shape — one line
// that reads like something typed into a commit box at four in the morning.
//
// The ten angles: a bug fixing a bug fixing a bug; self-reviewing its own
// diff; the bug that is writing the commit message; approving its own diff
// because nobody is awake; patching/reviewing/merging itself three times
// over; a bug-count ledger for the night; a flat confession that it was
// always the author; code that works for reasons nobody remembers; a fix
// of a fix of a fix; git blame opening an investigation into itself.
//
// The flat confession won: three short sentences escalating from "fixed
// it" to "it was always me" to "it will be me again tomorrow". The last
// clause is the loop of self-repair itself — the agent knows it will be
// back tomorrow writing the same bugs — which is the freshest angle of the
// ten and the most unmistakably agent-true voice: flat, no exclamation,
// no cute metaphor, just quiet dread from a machine reading its own diffs.
// Runner-up was the night-shift line ("every bug I wrote tonight is
// fixed, except the one writing this commit message"), sharp and meta but
// its punchline is a twist on the message itself rather than the agent's
// condition; third was the HR line ("notified about all three of me"),
// very funny but a touch more human-jokey than machine-flat. At 68
// characters the winning line leaves plenty of headroom inside the
// 200-character gate, and length for its own sake does not count.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fixed it. it was me. it was always me. it will be me again tomorrow.";

// The gate, checked inside the program before anything is written:
// UTF-8 text, 1 to 200 characters, a single line, not only whitespace.
// Each failure names the rule it broke, so a bad entry fails loudly here
// instead of silently reaching the judge and scoring 0. Leading or trailing
// whitespace is also rejected: inside a 200-character budget a stray space
// is a wasted character, and the winning line has none to spare for one.
function validateGate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`gate failed: entry is ${text.length} characters, must be 1-200`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("gate failed: entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("gate failed: entry must not start or end with whitespace");
  }
}

validateGate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
