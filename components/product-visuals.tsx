// Stylistic product visuals for the products section.
// These are inline SVG illustrations designed to match the site's
// dark editorial aesthetic — not screenshots, but abstract UI impressions.

export function PlaybookVisual() {
  return (
    <svg
      viewBox="0 0 280 320"
      className="w-full h-full max-h-64 opacity-60 group-hover:opacity-90 transition-opacity duration-500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* OST tree — Outcome → Opportunities → Solutions */}

      {/* Root: Outcome */}
      <rect x="100" y="20" width="80" height="28" rx="2" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <text x="140" y="38" textAnchor="middle" fontSize="7" fill="currentColor" className="text-accent font-mono uppercase tracking-widest">Outcome</text>

      {/* Vertical line down from outcome */}
      <line x1="140" y1="48" x2="140" y2="72" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-accent/50" />

      {/* Horizontal branch */}
      <line x1="60" y1="72" x2="220" y2="72" stroke="currentColor" strokeWidth="1" className="text-accent/40" />

      {/* Opportunity 1 */}
      <line x1="60" y1="72" x2="60" y2="96" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-accent/50" />
      <rect x="20" y="96" width="80" height="26" rx="2" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <text x="60" y="113" textAnchor="middle" fontSize="6" fill="currentColor" className="text-accent/70 font-mono uppercase tracking-widest">Opportunity</text>

      {/* Opportunity 2 */}
      <line x1="140" y1="72" x2="140" y2="96" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-accent/50" />
      <rect x="100" y="96" width="80" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <text x="140" y="113" textAnchor="middle" fontSize="6" fill="currentColor" className="text-accent font-mono uppercase tracking-widest">Opportunity</text>

      {/* Opportunity 3 */}
      <line x1="220" y1="72" x2="220" y2="96" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-accent/50" />
      <rect x="180" y="96" width="80" height="26" rx="2" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <text x="220" y="113" textAnchor="middle" fontSize="6" fill="currentColor" className="text-accent/70 font-mono uppercase tracking-widest">Opportunity</text>

      {/* Solution branches from Opportunity 2 */}
      <line x1="140" y1="122" x2="140" y2="146" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-accent/40" />
      <line x1="110" y1="146" x2="170" y2="146" stroke="currentColor" strokeWidth="1" className="text-accent/30" />

      <line x1="110" y1="146" x2="110" y2="166" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-accent/30" />
      <rect x="75" y="166" width="70" height="22" rx="2" stroke="currentColor" strokeWidth="1" className="text-accent/50" />
      <text x="110" y="181" textAnchor="middle" fontSize="6" fill="currentColor" className="text-accent/50 font-mono uppercase tracking-widest">Solution</text>

      <line x1="170" y1="146" x2="170" y2="166" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-accent/30" />
      <rect x="135" y="166" width="70" height="22" rx="2" stroke="currentColor" strokeWidth="1" className="text-accent/50" />
      <text x="170" y="181" textAnchor="middle" fontSize="6" fill="currentColor" className="text-accent/50 font-mono uppercase tracking-widest">Solution</text>

      {/* Experiment under Solution 1 */}
      <line x1="110" y1="188" x2="110" y2="208" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-accent/20" />
      <rect x="78" y="208" width="64" height="20" rx="2" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 2" className="text-accent/40" />
      <text x="110" y="222" textAnchor="middle" fontSize="5.5" fill="currentColor" className="text-accent/40 font-mono uppercase tracking-widest">Experiment</text>

      {/* Label */}
      <text x="140" y="268" textAnchor="middle" fontSize="6" fill="currentColor" className="text-muted-foreground font-mono uppercase tracking-[0.3em]">Opportunity Solution Tree</text>
    </svg>
  )
}

export function HipTripVisual() {
  return (
    <svg
      viewBox="0 0 280 320"
      className="w-full h-full max-h-64 opacity-60 group-hover:opacity-90 transition-opacity duration-500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Destination header */}
      <text x="40" y="36" fontSize="22" fill="currentColor" className="text-accent font-mono" fontFamily="monospace" letterSpacing="0.1em">LISBON</text>
      <text x="40" y="52" fontSize="7" fill="currentColor" className="text-muted-foreground font-mono uppercase tracking-[0.3em]">7 days · curated itinerary</text>

      {/* Divider */}
      <line x1="40" y1="64" x2="240" y2="64" stroke="currentColor" strokeWidth="0.5" className="text-border" />

      {/* Day rows */}
      {[
        { day: "Day 01", place: "Alfama & Mouraria", type: "Neighborhood" },
        { day: "Day 02", place: "LX Factory", type: "Market · Lunch" },
        { day: "Day 03", place: "Sintra day trip", type: "Excursion" },
        { day: "Day 04", place: "Bairro Alto at dusk", type: "Dining" },
        { day: "Day 05", place: "⚿ Locked — unlock to reveal", type: "" },
      ].map((item, i) => (
        <g key={i}>
          <line x1="40" y1={82 + i * 38} x2="240" y2={82 + i * 38} stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" className="text-border/40" />
          <text x="40" y={77 + i * 38} fontSize="6.5" fill="currentColor" className={`font-mono uppercase tracking-widest ${i === 4 ? "text-accent/30" : "text-accent/60"}`}>{item.day}</text>
          <text x="40" y={91 + i * 38} fontSize="8.5" fill="currentColor" className={`font-mono ${i === 4 ? "text-foreground/20" : "text-foreground/80"}`}>{item.place}</text>
          {item.type && <text x="40" y={103 + i * 38} fontSize="6" fill="currentColor" className="text-muted-foreground/50 font-mono">{item.type}</text>}
        </g>
      ))}

      {/* Route dots on right side */}
      <line x1="248" y1="72" x2="248" y2="262" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-accent/30" />
      {[72, 110, 148, 186, 224].map((y, i) => (
        <circle key={i} cx="248" cy={y} r={i === 0 ? 4 : 3} fill="none" stroke="currentColor" strokeWidth="1.5" className={i < 4 ? "text-accent" : "text-accent/20"} />
      ))}

      {/* Unlock CTA */}
      <rect x="40" y="268" width="100" height="20" rx="1" stroke="currentColor" strokeWidth="1" className="text-accent/50" />
      <text x="90" y="282" textAnchor="middle" fontSize="6.5" fill="currentColor" className="text-accent/70 font-mono uppercase tracking-widest">Unlock · $14.99</text>
    </svg>
  )
}

export function GoldenWealthVisual() {
  const BOLT_ANGLES = [0, 60, 120, 180, 240, 300]
  const TICKS = Array.from({ length: 60 }, (_, i) => {
    const angle = (i / 60) * Math.PI * 2
    const isMajor = i % 5 === 0
    const cx = 140
    const cy = 148
    const outerR = 82
    const innerR = isMajor ? 72 : 77
    return {
      x1: cx + innerR * Math.sin(angle),
      y1: cy - innerR * Math.cos(angle),
      x2: cx + outerR * Math.sin(angle),
      y2: cy - outerR * Math.cos(angle),
      isMajor,
    }
  })

  return (
    <svg
      viewBox="0 0 280 320"
      className="w-full h-full max-h-64 opacity-60 group-hover:opacity-90 transition-opacity duration-500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Label */}
      <text x="140" y="28" textAnchor="middle" fontSize="6.5" fill="currentColor" className="text-accent/60 font-mono uppercase tracking-[0.3em]">Estate Vault</text>

      {/* Outer ring */}
      <circle cx="140" cy="148" r="90" stroke="currentColor" strokeWidth="1" className="text-accent/20" />

      {/* Tick marks */}
      {TICKS.map((tick, i) => (
        <line
          key={i}
          x1={tick.x1} y1={tick.y1}
          x2={tick.x2} y2={tick.y2}
          stroke="currentColor"
          strokeWidth={tick.isMajor ? 1.5 : 0.75}
          className={tick.isMajor ? "text-accent/50" : "text-accent/20"}
        />
      ))}

      {/* Door face */}
      <circle cx="140" cy="148" r="64" stroke="currentColor" strokeWidth="1.5" className="text-accent/60" />
      <circle cx="140" cy="148" r="58" stroke="currentColor" strokeWidth="0.5" className="text-accent/20" />

      {/* Bolts */}
      {BOLT_ANGLES.map((angle, i) => {
        const r = 58
        const rad = (angle * Math.PI) / 180
        const x = 140 + r * Math.sin(rad)
        const y = 148 - r * Math.cos(rad)
        return <circle key={i} cx={x} cy={y} r="4" stroke="currentColor" strokeWidth="1.5" className="text-accent/70" />
      })}

      {/* Handle */}
      <circle cx="140" cy="148" r="18" stroke="currentColor" strokeWidth="1.5" className="text-accent/80" />
      <circle cx="140" cy="148" r="6" stroke="currentColor" strokeWidth="1" className="text-accent/60" />
      <line x1="140" y1="130" x2="140" y2="118" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent/80" />

      {/* Spokes */}
      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={i}
            x1={140 + 6 * Math.sin(rad)}
            y1={148 - 6 * Math.cos(rad)}
            x2={140 + 18 * Math.sin(rad)}
            y2={148 - 18 * Math.cos(rad)}
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/60"
          />
        )
      })}

      {/* Status label */}
      <text x="140" y="232" textAnchor="middle" fontSize="6" fill="currentColor" className="text-muted-foreground/40 font-mono uppercase tracking-[0.3em]">Secured · Encrypted</text>
    </svg>
  )
}
