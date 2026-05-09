"use client"

import { useRef, useEffect } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { PlaybookVisual, HipTripVisual, GoldenWealthVisual } from "@/components/product-visuals"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: "01",
    name: "Agentic PM Playbook",
    description:
      "An open-source methodology and Claude Code plugin for AI-augmented product management. Built on Continuous Discovery Habits and Opportunity Solution Trees — 18 agent skills across 4 capability layers so teams can automate the process overhead and focus entirely on customers and strategy.",
    tags: ["Open Source", "Methodology", "Claude Code Plugin"],
    url: "https://github.com/richardbowman/agent-pm-playbook",
    cta: "Read the Playbook",
    status: "Open Source",
    visual: "playbook",
  },
  {
    id: "02",
    name: "HipTrip",
    description:
      "An AI travel planning app for culturally curious travelers who are tired of TripAdvisor's top-10 lists. Generates curated itineraries built on hand-vetted Hip Places — neighborhood restaurants, local trails, and under-the-radar spots. Built end-to-end using the agentic PM approach.",
    tags: ["Travel", "AI", "Consumer"],
    url: "https://yourhiptrip.com",
    cta: "Visit HipTrip",
    status: "Live",
    visual: "hiptrip",
  },
  {
    id: "03",
    name: "Golden Wealth",
    description:
      "An estate planning and family wealth management platform that replaces the shoebox of documents with a secure, collaborative vault. Every feature traces back to a validated customer opportunity in the OST — role-based access, AI document assistant, Plaid integration, and more.",
    tags: ["FinTech", "Estate Planning", "AI"],
    url: "https://live-golden.com",
    cta: "Visit Golden Wealth",
    status: "Live",
    visual: "golden-wealth",
  },
]

export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      cardsRef.current.filter(Boolean).forEach((card) => {
        if (!card) return
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
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
      id="products"
      className="relative py-32 md:py-48 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <AnimatedNoise opacity={0.02} />

      {/* Section header */}
      <div className="relative z-10 mb-16 md:mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
          Products
        </span>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,8rem)] leading-[0.9] text-foreground">
          What We Build
        </h2>
      </div>

      {/* Product cards */}
      <div className="relative z-10 flex flex-col gap-12">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el
            }}
            className="group border border-border/40 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left column - product info */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {product.id}
                    </span>
                    <span className="h-px flex-1 bg-border/40" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      {product.status}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-foreground mb-6">
                    {product.name}
                  </h3>

                  <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {product.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-3">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border/40 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200 self-start"
                  >
                    <ScrambleTextOnHover text={product.cta} as="span" duration={0.6} />
                    <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover/link:rotate-45" />
                  </a>
                </div>
              </div>

              {/* Right column - visual element */}
              <div className="relative w-full md:w-80 lg:w-96 min-h-[280px] md:min-h-0 bg-accent/5 border-t md:border-t-0 md:border-l border-border/40 flex items-center justify-center overflow-hidden p-8">
                {product.visual === "playbook" && <PlaybookVisual />}
                {product.visual === "hiptrip" && <HipTripVisual />}
                {product.visual === "golden-wealth" && <GoldenWealthVisual />}
                <AnimatedNoise opacity={0.04} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
