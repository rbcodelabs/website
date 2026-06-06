'use strict'

/**
 * generate-github-avatar.js
 *
 * Renders the rbcodelabs GitHub avatar (460x460 PNG) from an inline SVG.
 * Writes two files:
 *   public/github-avatar.svg  — source SVG (edit the design tokens here)
 *   public/github-avatar.png  — upload this to the org settings page
 *
 * Usage:
 *   pnpm generate:avatar
 *
 * Upload destination:
 *   https://github.com/organizations/rbcodelabs/settings/profile
 *
 * Requires: @resvg/resvg-js (devDependency, pure WASM — no system libs needed)
 */

const { Resvg } = require('@resvg/resvg-js')
const { writeFileSync } = require('fs')
const { join } = require('path')

// --- Design tokens (mirror brand values from app/globals.css) ---
const BG     = '#0d0d0d' // --background: oklch(0.08 0 0)
const FG     = '#F5F5F5' // --foreground: oklch(0.95 0 0)
const ACCENT = '#F07320' // --accent:     oklch(0.7 0.2 45)  (warm orange)

// GitHub org avatars are displayed as circles; 460px is the recommended upload size.
const SIZE = 460

// --- SVG ---
// Paths come from public/icon.svg (180x180 viewBox, the "rb" logomark).
// No border-radius on the background rect: GitHub handles the circular crop.
// No @media color-scheme queries: this is always rendered on a dark background.
// SVG transform="translate(4.5,4.5) scale(0.95)" is the SVG-attribute equivalent
// of CSS "transform: scale(95%); transform-origin: center" at center (90, 90).
const svgSource = `\
<svg
  width="${SIZE}"
  height="${SIZE}"
  viewBox="0 0 180 180"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- rbcodelabs GitHub avatar -->
  <!-- To update: edit the tokens at the top of scripts/generate-github-avatar.js -->
  <!-- then run: pnpm generate:avatar -->

  <!-- Solid near-black background; no corner radius (GitHub clips to a circle) -->
  <rect width="180" height="180" fill="${BG}" />

  <!-- "rb" logomark scaled 95% from center (90, 90) -->
  <g transform="translate(4.5,4.5) scale(0.95)">

    <!-- Left letterform — near-white -->
    <path
      fill="${FG}"
      d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47
         C80.1365 126.278 70.4953 129.958 65.2926 124.136Z"
    />

    <!-- Right letterform — orange accent -->
    <path
      fill="${ACCENT}"
      d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904
         H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251
         L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904
         H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5
         V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422
         L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434
         H101.141V53Z"
    />
  </g>
</svg>`

const root = join(__dirname, '..')

// Save the SVG so it can be inspected or tweaked in a browser / Figma
const svgPath = join(root, 'public', 'github-avatar.svg')
writeFileSync(svgPath, svgSource, 'utf8')
console.log(`  SVG source  ->  public/github-avatar.svg`)

// Render to PNG via resvg (pure WASM, no native system library required)
const resvg = new Resvg(svgSource, {
  fitTo: { mode: 'width', value: SIZE },
})
const rendered = resvg.render()
const png = rendered.asPng()

const pngPath = join(root, 'public', 'github-avatar.png')
writeFileSync(pngPath, png)
console.log(`  PNG ${SIZE}x${SIZE}  ->  public/github-avatar.png`)
console.log()
console.log('Upload the PNG at:')
console.log('  https://github.com/organizations/rbcodelabs/settings/profile')
