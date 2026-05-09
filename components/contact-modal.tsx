"use client"

import { useEffect, useRef, useState, useActionState } from "react"
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact"
import { cn } from "@/lib/utils"
import { AnimatedNoise } from "@/components/animated-noise"

const initialState: ContactFormState = { status: "idle" }

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  subject?: string
}

export function ContactModal({ isOpen, onClose, subject = "Agentic PM adoption" }: ContactModalProps) {
  const [state, action, isPending] = useActionState(sendContactEmail, initialState)
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKey)
      document.body.style.overflow = "hidden"
      setTimeout(() => firstInputRef.current?.focus(), 100)
    }
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
        className="relative z-10 w-full max-w-lg border border-border/60 bg-card overflow-hidden"
      >
        <AnimatedNoise opacity={0.02} />

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between p-8 border-b border-border/30">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-2">
              Get in touch
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-tight">
              Bring this to your team
            </h2>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 mt-1"
          >
            [esc]
          </button>
        </div>

        {/* Form */}
        <div className="relative z-10 p-8">
          {state.status === "success" ? (
            <div className="py-8 text-center">
              <p className="font-[family-name:var(--font-bebas)] text-3xl text-accent mb-3">Message sent.</p>
              <p className="font-mono text-sm text-muted-foreground">
                I'll get back to you at the email you provided.
              </p>
              <button
                onClick={onClose}
                className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Close →
              </button>
            </div>
          ) : (
            <form action={action} className="space-y-5">
              <input type="hidden" name="subject" value={subject} />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
                    Name
                  </label>
                  <input
                    ref={firstInputRef}
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-background border border-border/50 focus:border-accent px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/30 outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-background border border-border/50 focus:border-accent px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/30 outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your team and what you're trying to accomplish..."
                  className="w-full bg-background border border-border/50 focus:border-accent px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/30 outline-none transition-colors duration-200 resize-none"
                />
              </div>

              {state.status === "error" && (
                <p className="font-mono text-xs text-red-400">{state.message}</p>
              )}

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest">
                  → rick@rbcodelabs.com
                </span>
                <button
                  type="submit"
                  disabled={isPending}
                  className={cn(
                    "group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3",
                    "font-mono text-xs uppercase tracking-widest text-foreground",
                    "hover:border-accent hover:text-accent transition-all duration-200",
                    isPending && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {isPending ? "Sending..." : "Send message →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
