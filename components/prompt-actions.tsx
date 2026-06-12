"use client"

import { useState } from "react"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { PROMPT_TEXT, PROMPT_FILENAME } from "@/lib/prompt-content"

export function PromptActions() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers without async clipboard support
      const ta = document.createElement("textarea")
      ta.value = PROMPT_TEXT
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={`/${PROMPT_FILENAME}`}
        download={PROMPT_FILENAME}
        className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-all duration-200"
      >
        <ScrambleTextOnHover text="Download the prompt" as="span" duration={0.6} />
        <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
      </a>

      <button
        onClick={handleCopy}
        className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
      >
        {copied ? "Copied ✓" : "Copy to clipboard"}
      </button>
    </div>
  )
}
