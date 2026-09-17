"use client"

import { useState } from "react"
import { ScrambleText } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { ContactModal } from "@/components/contact-modal"

const links = [
  { label: "Agentic PM Playbook", href: "https://playbook.rbcodelabs.com/" },
  { label: "HipTrip", href: "https://yourhiptrip.com" },
  { label: "Golden Wealth", href: "https://live-golden.com" },
  { label: "GitHub", href: "https://github.com/richardbowman" },
]

export function FooterSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <footer
      id="contact"
      className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-16">
        {/* Left - branding */}
        <div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,4rem)] leading-[0.9] text-foreground mb-4">
            <ScrambleText text="RB Code Labs" delayMs={200} duration={0.8} />
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Agents handle the process. Humans focus on what matters.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-4 inline-block font-mono text-xs text-accent hover:text-foreground transition-colors duration-200 uppercase tracking-widest"
          >
            rick@rbcodelabs.com →
          </button>
        </div>

        {/* Right - links */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Links
          </span>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-mono text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
            >
              <BitmapChevron className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45 text-muted-foreground group-hover:text-accent" />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
          {"\u00A9"} {new Date().getFullYear()} RB Code Labs. All rights reserved.
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
          Sawyer, MI
        </span>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject="Agentic PM adoption"
      />
    </footer>
  )
}
