---
name: design-style-reference
description: Visual style guide for generating UI, web pages, components, mockups, and any visual design in this repo. Use BEFORE writing or editing any HTML/CSS/JSX/Tailwind/design — read the example screenshots in examples/ and follow the design language below so output matches the desired styling, formatting, and layout. Triggers on any request to build, design, mock up, restyle, or lay out a page, section, hero, card, button, or component.
---

# Design Style Reference

A reusable house style for any design generated in this repo. The goal: every
page, section, or component you produce should look like it belongs to the same
family as the reference screenshots in `examples/`.

## How to use this skill

**Always do this before producing any design output (HTML/CSS/JSX/Tailwind/etc.):**

1. **Read the example screenshots** in `examples/` using the Read tool. They are
   the source of truth — match what you see there over any assumption.
   - `examples/01-hero-landscape.png` — full-bleed hero over painterly imagery
   - `examples/02-stats-and-features.png` — stats band + 3-column feature row on white
   - `examples/03-ai-compliance-clouds.png` — centered section over a photographic background
   - `examples/04-feature-onboard-flow.png` — split feature: diagram card + feature list
2. **Internalize the design language below**, which describes the same examples in
   words and tokens so you can reproduce it even before opening the images.
3. **Produce the design**, then sanity-check it against the principles in the
   "Self-check" section at the end.

If `examples/` is empty, tell the user to add the reference screenshots there, then
fall back to the written tokens below.

---

## Design language

### Overall feel
Calm, premium, editorial, and spacious. A fintech/B2B SaaS aesthetic that feels
human and warm rather than corporate. Big confident typography, lots of
whitespace, restrained color, and the occasional full-bleed painterly or
photographic background used as an emotional "breath" between clean white
content sections.

### Color
- **Ink / primary text:** near-black, `#1A1A1A` (not pure `#000`).
- **Muted / secondary text:** warm gray, `#6B6B6B` to `#8A8A86`.
- **Page background:** white to warm off-white, `#FFFFFF` / `#FAFAF8`.
- **Surface / card fill:** soft warm gray, `#F2F1EE` / `#F4F3F0`.
- **Borders / rules:** very light, `#E7E6E2` (hairline, ~1px).
- **Accent:** a single lime/green used sparingly — dots in tags, "Autofilled"
  status, active states. Roughly `#84CC16` / `#7CB342`.
- **Imagery backgrounds:** warm painterly sunsets (peach, coral, sage, lavender)
  and photographic skies (blue + white clouds). Used full-bleed for hero and
  divider sections only — never behind dense text blocks.
- Keep palettes near-monochrome + one accent. Avoid multi-color UI.

### Typography
- **Display / headings:** large, tight, near-black. Slightly geometric humanist
  sans (Inter / Space Grotesk style; the references read like a soft grotesk).
  Weight ~500–600, **tight leading (~1.05–1.1)**, minimal or negative letter
  spacing. Headings are often **two short lines** ("Designed to convert. / Built
  to scale.", "Drive revenues with / Duna Onboard").
- **Stat numbers:** very large and bold (e.g. `10.6x`, `37%`, `4.8x`) with a
  small muted label underneath.
- **Body / subhead:** ~16–18px, warm gray, relaxed leading (~1.5), kept to 1–2
  short lines under a heading.
- **Eyebrow / tag:** small pill label, ~13px, sometimes ALL the leading word
  capitalized normally (e.g. "Lifecycle", "Onboard", "Artificial Intelligence").
- **Logo/wordmark:** uppercase, letter-spaced, with a small star/asterisk glyph.

### Buttons & pills (signature element)
- Everything rounded is **fully rounded (pill, `border-radius: 9999px`)**.
- **Primary:** solid near-black background, white text, generous horizontal
  padding (`~14px 28px`). Examples: "Get started", "Schedule a demo".
- **Secondary / on-image:** solid white pill, dark text, often with a trailing
  chevron `›`. Example: "Discover Duna AI ›".
- **Tertiary / outline:** transparent with hairline border + dark text + chevron.
  Example: "Explore ›".
- **Tag/badge pills:** small, low-contrast fill (`#F2F1EE` or translucent dark on
  imagery), sometimes a leading colored dot or icon.

### Layout & spacing
- **Generous whitespace** is the dominant feature. Sections breathe; never crowd.
- **Centered hero compositions** (tag → big headline → subhead → CTA, stacked and
  centered) over full-bleed imagery.
- **Content sections on white** use a **split / two-column** layout: a left intro
  block (eyebrow tag, two-line heading, muted subhead) paired with a right-side
  action (outline pill) or a feature list.
- **Cards:** soft warm-gray fill, large radius (`~20–24px`), no harsh shadows;
  used to hold diagrams or grouped steps.
- **Diagrams inside cards:** vertical flow of small white sub-cards (icon + label)
  connected by thin curved/elbow arrows; small green status labels like
  "⚡ Autofilled".
- **Stat & feature rows:** evenly spaced columns separated by **hairline rules**
  (thin light vertical/horizontal dividers), each column = icon → title → muted
  description.
- **Icons:** thin line icons (~1.5px stroke), monochrome ink, simple and
  consistent. Never filled/colored except the accent dot.
- Use a max content width (~1100–1200px) centered with comfortable side gutters.

### Motion (when applicable)
- Subtle and slow. Soft fades / small upward reveals on scroll. Nothing bouncy or
  flashy. Hover states are gentle (slight opacity or background shift).

---

## Reusable tokens (drop-in starting point)

```css
:root {
  --ink:        #1A1A1A;
  --muted:      #6B6B6B;
  --bg:         #FFFFFF;
  --bg-warm:    #FAFAF8;
  --surface:    #F2F1EE;
  --border:     #E7E6E2;
  --accent:     #84CC16;
  --radius-pill: 9999px;
  --radius-card: 22px;
  --maxw:       1160px;
}

.btn-primary { background: var(--ink); color: #fff; border-radius: var(--radius-pill); padding: 14px 28px; font-weight: 500; border: 0; }
.btn-white   { background: #fff; color: var(--ink); border-radius: var(--radius-pill); padding: 12px 24px; font-weight: 500; }
.btn-outline { background: transparent; color: var(--ink); border: 1px solid var(--border); border-radius: var(--radius-pill); padding: 12px 24px; }
.tag         { display: inline-flex; align-items: center; gap: 8px; background: var(--surface); border-radius: var(--radius-pill); padding: 6px 14px; font-size: 13px; }
.card        { background: var(--surface); border-radius: var(--radius-card); padding: 28px; }
h1, h2       { color: var(--ink); line-height: 1.08; letter-spacing: -0.02em; font-weight: 600; }
.subhead     { color: var(--muted); font-size: 18px; line-height: 1.5; }
```

---

## Self-check before delivering a design
- [ ] Did I actually open the screenshots in `examples/` this turn?
- [ ] Headings: large, near-black, tight leading, short (often two lines)?
- [ ] Plenty of whitespace — does it breathe, not crowd?
- [ ] Buttons are fully-rounded pills (dark primary / white / outline)?
- [ ] Near-monochrome palette with at most one accent (lime/green)?
- [ ] Muted warm-gray for secondary text, hairline borders for dividers?
- [ ] Thin line icons, soft warm-gray cards with large radius?
- [ ] Full-bleed imagery used only for hero/divider sections, not behind dense text?
- [ ] Layout uses centered hero or clean two-column split, max ~1160px wide?
