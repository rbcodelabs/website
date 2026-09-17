"use client"

import { useRef, useEffect, useState } from "react"
import { HighlightText } from "@/components/highlight-text"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { ContactModal } from "@/components/contact-modal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  "Agentic PM Methodology",
  "Opportunity Solution Trees",
  "AI-First Product Development",
  "Continuous Discovery Systems",
  "Full-Stack Engineering",
  "Team Adoption & Coaching",
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return
        gsap.fromTo(
          item,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 md:py-48 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div className="relative z-10 mb-16 md:mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
          About
        </span>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,8rem)] leading-[0.9] text-foreground">
          Who We Are
        </h2>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left - Description */}
        <div className="flex-1 max-w-2xl">
          <p className="text-[clamp(1.25rem,2.5vw,2rem)] leading-relaxed text-foreground/90 font-light">
            RB Code Labs is <HighlightText>Rick Bowman</HighlightText> — builder, PM, and the
            person who started coding at 10, wrote a software development book at 19, and has spent
            30 years being the rare person who can hold both sides.
          </p>

          <p className="mt-6 font-[family-name:var(--font-bebas)] text-[clamp(2rem,4vw,3.5rem)] leading-[1.0] tracking-tight text-foreground/80">
            <HighlightText>The product problem</HighlightText>
            {" "}and the technical solution.
          </p>

          <p className="mt-8 font-mono text-sm text-muted-foreground leading-relaxed max-w-lg">
            Product and tech felt a little settled for a while — the patterns were known, the
            frameworks reliable. Then AI changed everything. Not as a tool to go faster, but as
            a way to automate the process overhead that was never the interesting part anyway.
            Now the interesting part is all that's left.
          </p>

          <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed max-w-lg">
            The Agentic PM Playbook is the operating system for that way of working — published
            openly so any PM or team can adopt it.
          </p>

          <div className="mt-12 flex items-center gap-6 flex-wrap">
            <a
              href="https://playbook.rbcodelabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            >
              <ScrambleTextOnHover text="Read the Playbook" as="span" duration={0.6} />
              <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Bring this to your team →
            </button>
          </div>
        </div>

        {/* Right - Capabilities */}
        <div className="lg:w-80">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-8">
            Capabilities
          </span>
          <div className="flex flex-col">
            {capabilities.map((item, index) => (
              <div
                key={item}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el
                }}
                className="group flex items-center gap-4 py-4 border-b border-border/30 hover:border-accent/30 transition-colors duration-200"
              >
                <span className="font-mono text-[10px] text-muted-foreground/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-sm text-foreground/80 group-hover:text-accent transition-colors duration-200 uppercase tracking-wider">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject="Agentic PM adoption"
      />
    </section>
  )
}
