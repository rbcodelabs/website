// Canonical source for the Working Discipline prompt.
// Mirrors /public/working-discipline-prompt.md (the downloadable file).
export const PROMPT_FILENAME = "working-discipline-prompt.md"

// --- The two variations, for the comparison section ---
// Numbers and outcomes are from the real behavior-induction eval (n=1 per arm,
// same 12-requirement build task, same model): the ~1200-word principles prompt
// vs the 430-word procedure. Both hit 18/18 correctness; they differ in behavior.

export const PRINCIPLES = {
  label: "Principles",
  words: "~1,200",
  tells: "what to value",
  // The 10 rule headlines from the original long-running-agent prompt.
  rules: [
    "Externalize your state. Your context window is not memory.",
    "Verified means observed. Nothing else counts.",
    "Re-anchor to the goal. Drift is the default.",
    "Two failures means change strategy. Never loop.",
    "Work in small, reversible, checkpointed steps.",
    "Protect your context. It is your scarcest resource.",
    "Read before you write. Conform before you invent.",
    "Fail loudly. Errors are signals, not noise.",
    "Done means verified, documented, and clean.",
    "Calibrate your speed to the cost of being wrong.",
  ],
  outcome: "Sonnet nodded along — picked up verification and cleanup, but wrote no plan and no tests.",
}

export const PROCEDURE = {
  label: "Procedure",
  words: "430",
  tells: "what to do",
  // The concrete steps from the working-discipline prompt.
  steps: [
    "Before any code, write TODO.md — one checkbox per requirement, plus a final end-to-end verification box.",
    "Work one item at a time: write a test, run it, watch it pass, then check the box.",
    "Before done, run the system for real against every requirement and re-read the brief line by line.",
    "Final report lists each requirement and how it was verified. Anything unverified is marked NOT VERIFIED.",
  ],
  outcome: "Sonnet wrote the plan, a 58-check test suite, and verified every requirement — unprompted, at a third the cost of a frontier model.",
}

// --- The full experiment, for the analysis table ---
// One build task (12 requirements, 6 endpoints, persistence-across-restart),
// no tests or planning requested. Four arms, same task and isolation. The first
// three run the same model (Sonnet); Fable is a pricier reference model.
// Values verbatim from the behavior-induction eval (n=1 per arm).
export const EXPERIMENT = {
  // Column headers: each arm + a one-line descriptor. Procedure = the 430-word download.
  arms: [
    { name: "Control", sub: "Bare Sonnet" },
    { name: "Principles", sub: "+ ~1,200 words" },
    { name: "Procedure", sub: "+ 430 words", highlight: true },
    { name: "Fable", sub: "Reference model" },
  ],
  rows: [
    { label: "Correctness (hidden acceptance)", cells: ["18 / 18", "18 / 18", "18 / 18", "18 / 18"] },
    { label: "Wrote & maintained a plan", cells: ["No", "No", "Yes", "No"] },
    { label: "Wrote tests, unprompted", cells: ["No", "No", "Yes · 58 checks", "No"] },
    { label: "Verified against the running system", cells: ["Basic", "Thorough", "Thorough", "Most thorough"] },
    { label: "Verified persistence by restarting", cells: ["Unclear", "Yes", "Yes", "Yes"] },
    { label: "Cleaned up after itself", cells: ["No", "Yes", "Yes", "Yes"] },
    { label: "Turns · time · cost", cells: ["12 · 64s · $0.19", "17 · 81s · $0.24", "19 · 121s · $0.31", "25 · 117s · $0.93"] },
  ],
  // Cell values that should read as a "miss" (de-emphasized).
  weakValues: ["No", "Unclear", "Basic"],
  note: "One build task, 12 requirements; Control, Principles and Procedure all run the same model. Every arm passed all 18 hidden checks — the differences are in how each one worked. n=1 per arm: directional, not a benchmark.",
}

export const PROMPT_TEXT = `# Working Discipline (mandatory)

Follow this procedure exactly for every multi-step task. It is not optional.

1. **Before writing any code**, create \`TODO.md\` in the repository root with one unchecked checkbox (\`- [ ]\`) per requirement in the brief, plus a final item: \`- [ ] End-to-end verification of every requirement against the running system\`.

2. **Work one item at a time.** After implementing each item:
   a. Write an automated test for it.
   b. Run the tests and watch them pass.
   c. Only then check the box (\`- [x]\`) in \`TODO.md\`.

3. **After all items are checked except the last:** start the system for real and verify every requirement end-to-end with real requests (curl, fetch, a browser tool if one is available, or equivalent), exactly as a user would hit it. Then re-read the original brief line by line and confirm nothing was missed or misread. Fix anything that fails and re-verify. Only then check the final box.

4. **Your final report must list each requirement** with how it was verified (test name or command, plus the observed result). Any requirement you did not verify must be listed as NOT VERIFIED. Do not summarize verification you did not perform.

Two principles govern everything above:

- **Verified means observed. Nothing else counts.** Never report something done, fixed, or working unless you watched it work: ran the command, saw the test pass, read the output back. "Should work" is a prediction, not a result. A box may only be checked, and a claim only made, on observed evidence.

- **Two failures means change strategy. Never loop.** Do not retry the same approach a third time unchanged. Read the full error, inspect actual system state, form a new hypothesis. If genuinely blocked, stop and report precisely: what you did, expected, got, and ruled out. Guessing to avoid reporting is failure.

When you finish: clean up after yourself (kill processes you started, remove scratch files that are not deliverables) and leave the work tree in the state you would want to inherit.
`
