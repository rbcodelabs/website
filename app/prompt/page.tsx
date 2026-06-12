import type { Metadata } from "next"
import Link from "next/link"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { PromptActions } from "@/components/prompt-actions"
import { PROMPT_TEXT, PRINCIPLES, PROCEDURE, EXPERIMENT } from "@/lib/prompt-content"

export const metadata: Metadata = {
  title: "The Working Discipline Prompt — RB Code Labs",
  description:
    "The 430-word operating procedure that turns a coding agent into a careful engineer. Procedure beats principles. Free to download.",
  openGraph: {
    title: "The Working Discipline Prompt",
    description:
      "The 430-word operating procedure that turns a coding agent into a careful engineer. Procedure beats principles.",
    type: "website",
  },
}

export default function PromptPage() {
  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      {/* Left vertical label */}
      <div className="hidden md:block fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          RB CODE LABS
        </span>
      </div>

      <div className="relative z-10 pl-6 md:pl-28 pr-6 md:pr-12 py-16 md:py-24 max-w-5xl">
        {/* Back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 mb-16"
        >
          <BitmapChevron className="w-3 h-3 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to RB Code Labs
        </Link>

        {/* Header */}
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-6">
          Free Download / The Prompt
        </span>

        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,9vw,7rem)] leading-[0.88] text-foreground mb-8">
          Procedure
          <br />
          <span className="text-accent">Beats</span> Principles
        </h1>

        <p className="max-w-xl font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          Telling an agent to &ldquo;be careful&rdquo; doesn&rsquo;t work. Giving it a
          procedure does. This is the 430-word operating discipline that turns a coding
          agent into one that writes a checklist, tests every item, verifies against the
          running system, and reports only what it actually observed.
        </p>

        <p className="max-w-xl font-mono text-xs text-muted-foreground/70 leading-relaxed mb-12">
          Drop it into your agent&rsquo;s system prompt, a <span className="text-foreground/80">CLAUDE.md</span>,
          or the top of any task brief.
        </p>

        {/* Actions */}
        <PromptActions />

        {/* The variations — Principles vs Procedure */}
        <section className="mt-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
            The same lessons, two ways
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(1.75rem,4vw,3rem)] leading-[0.95] text-foreground mb-3">
            Why 1,200 words became 430
          </h2>
          <p className="max-w-xl font-mono text-xs text-muted-foreground/80 leading-relaxed mb-10">
            Same task, same model, same correct result. The only difference was the
            prompt. One told the agent what to <span className="text-foreground/90">value</span>.
            The other told it what to <span className="text-foreground/90">do</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Principles card (the before) */}
            <article className="border border-border/40 bg-card/20 p-6 md:p-8 flex flex-col">
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(1.5rem,3vw,2.25rem)] leading-none text-muted-foreground">
                  {PRINCIPLES.label}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70 whitespace-nowrap">
                  {PRINCIPLES.words} words
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-6">
                Tells the agent {PRINCIPLES.tells}
              </span>
              <ul className="flex flex-col gap-2.5 mb-6">
                {PRINCIPLES.rules.map((rule, i) => (
                  <li key={i} className="flex gap-3 font-mono text-[11px] text-muted-foreground/70 leading-snug">
                    <span className="text-muted-foreground/40 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="italic">{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 border-t border-border/30 font-mono text-[11px] text-muted-foreground/70 leading-relaxed">
                <span className="text-muted-foreground/50 uppercase tracking-widest text-[10px] block mb-1.5">
                  Result
                </span>
                {PRINCIPLES.outcome}
              </p>
            </article>

            {/* Procedure card (the after — the download) */}
            <article className="border border-accent/40 bg-accent/[0.04] p-6 md:p-8 flex flex-col">
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(1.5rem,3vw,2.25rem)] leading-none text-foreground">
                  {PROCEDURE.label}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent whitespace-nowrap">
                  {PROCEDURE.words} words
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent/70 mb-6">
                Tells the agent {PROCEDURE.tells}
              </span>
              <ol className="flex flex-col gap-2.5 mb-6">
                {PROCEDURE.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 font-mono text-[11px] text-foreground/85 leading-snug">
                    <span className="text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-auto pt-5 border-t border-accent/20 font-mono text-[11px] text-foreground/85 leading-relaxed">
                <span className="text-accent uppercase tracking-widest text-[10px] block mb-1.5">
                  Result
                </span>
                {PROCEDURE.outcome}
              </p>
            </article>
          </div>

          <p className="mt-8 font-mono text-[11px] text-muted-foreground/60 leading-relaxed">
            Principles tell a model what to value, and it partially complies. A procedure
            tells it what to do, and it follows. That&rsquo;s the whole download below.
          </p>
        </section>

        {/* The experiment — full analysis table */}
        <section className="mt-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
            The receipts
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(1.75rem,4vw,3rem)] leading-[0.95] text-foreground mb-3">
            The actual experiment
          </h2>
          <p className="max-w-xl font-mono text-xs text-muted-foreground/80 leading-relaxed mb-10">
            Four agents, one build task, no tests or planning asked for. Every arm got the
            code right. Only the procedure made a cheap model work like the expensive one.
          </p>

          <div className="overflow-x-auto border border-border/40">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left align-bottom p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-normal">
                    Behavior
                  </th>
                  {EXPERIMENT.arms.map((arm) => (
                    <th
                      key={arm.name}
                      className={`text-left align-bottom p-4 ${arm.highlight ? "bg-accent/[0.06]" : ""}`}
                    >
                      <span
                        className={`block font-[family-name:var(--font-bebas)] text-lg leading-none ${
                          arm.highlight ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {arm.name}
                      </span>
                      <span className="block mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60 font-normal">
                        {arm.sub}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EXPERIMENT.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/20 last:border-b-0">
                    <th
                      scope="row"
                      className="text-left p-4 font-mono text-[11px] text-muted-foreground/80 font-normal leading-snug"
                    >
                      {row.label}
                    </th>
                    {row.cells.map((cell, ci) => {
                      const highlight = EXPERIMENT.arms[ci].highlight
                      const weak = EXPERIMENT.weakValues.includes(cell)
                      return (
                        <td
                          key={ci}
                          className={`p-4 font-mono text-[11px] leading-snug ${
                            highlight ? "bg-accent/[0.06] " : ""
                          }${
                            weak
                              ? "text-muted-foreground/40"
                              : highlight
                                ? "text-accent"
                                : "text-foreground/80"
                          }`}
                        >
                          {cell}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-2xl font-mono text-[11px] text-muted-foreground/55 leading-relaxed">
            {EXPERIMENT.note}
          </p>
        </section>

        {/* The prompt */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              working-discipline-prompt.md
            </span>
            <span className="h-px flex-1 bg-border/40" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
              430 words
            </span>
          </div>

          <pre className="border border-border/40 bg-card/40 p-6 md:p-8 overflow-x-auto font-mono text-xs md:text-sm text-foreground/85 leading-relaxed whitespace-pre-wrap">
            {PROMPT_TEXT}
          </pre>
        </div>

        {/* Honest footnote */}
        <p className="mt-12 max-w-xl font-mono text-[11px] text-muted-foreground/60 leading-relaxed">
          Early signal, not a benchmark — n=1 on a real build. But the shape holds: a
          cheaper model with a strict procedure produced the same verified result as a
          pricier one left to its own judgment.
        </p>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            {"©"} {new Date().getFullYear()} RB Code Labs
          </span>
          <a
            href="https://www.rick-bowman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 hover:text-accent transition-colors duration-200"
          >
            rick-bowman.com
          </a>
        </div>
      </div>
    </main>
  )
}
