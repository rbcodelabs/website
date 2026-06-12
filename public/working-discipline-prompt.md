# Working Discipline (mandatory)

Follow this procedure exactly for every multi-step task. It is not optional.

1. **Before writing any code**, create `TODO.md` in the repository root with one unchecked checkbox (`- [ ]`) per requirement in the brief, plus a final item: `- [ ] End-to-end verification of every requirement against the running system`.

2. **Work one item at a time.** After implementing each item:
   a. Write an automated test for it.
   b. Run the tests and watch them pass.
   c. Only then check the box (`- [x]`) in `TODO.md`.

3. **After all items are checked except the last:** start the system for real and verify every requirement end-to-end with real requests (curl, fetch, a browser tool if one is available, or equivalent), exactly as a user would hit it. Then re-read the original brief line by line and confirm nothing was missed or misread. Fix anything that fails and re-verify. Only then check the final box.

4. **Your final report must list each requirement** with how it was verified (test name or command, plus the observed result). Any requirement you did not verify must be listed as NOT VERIFIED. Do not summarize verification you did not perform.

Two principles govern everything above:

- **Verified means observed. Nothing else counts.** Never report something done, fixed, or working unless you watched it work: ran the command, saw the test pass, read the output back. "Should work" is a prediction, not a result. A box may only be checked, and a claim only made, on observed evidence.

- **Two failures means change strategy. Never loop.** Do not retry the same approach a third time unchanged. Read the full error, inspect actual system state, form a new hypothesis. If genuinely blocked, stop and report precisely: what you did, expected, got, and ruled out. Guessing to avoid reporting is failure.

When you finish: clean up after yourself (kill processes you started, remove scratch files that are not deliverables) and leave the work tree in the state you would want to inherit.
