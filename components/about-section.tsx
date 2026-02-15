"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  "Web Applications",
  "Mobile Experiences",
  "Design Systems",
  "API Architecture",
  "Product Strategy",
  "Cloud Infrastructure",
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

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
            RB Code Labs is a <HighlightText>software studio</HighlightText> focused on
            building thoughtful digital products. Founded by{" "}
            <HighlightText>Rick Bowman</HighlightText>, we combine clean engineering with
            sharp design to ship things that matter.
          </p>

          <p className="mt-8 font-mono text-sm text-muted-foreground leading-relaxed max-w-lg">
            From concept to deployment, we handle the full stack. Every line of code is
            written with intention, every interface designed with purpose.
          </p>

          <div className="mt-12">
            <a
              href="https://www.rick-bowman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            >
              <ScrambleTextOnHover text="Rick's Portfolio" as="span" duration={0.6} />
              <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
            </a>
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
    </section>
  )
}
