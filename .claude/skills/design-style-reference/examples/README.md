# Example screenshots

These reference screenshots are the **source of truth** for the house design
style. The `design-style-reference` skill instructs Claude to read these images
before generating any UI/design so output matches the desired styling, layout,
and formatting.

## Expected files

Add the reference screenshots here with these exact filenames (the skill links to
them by name):

| Filename | What it shows |
| --- | --- |
| `01-hero-landscape.png` | Full-bleed hero over a painterly sunset landscape — centered tag pill, huge two-line headline, muted subhead, dark "Get started" pill. Minimal top nav with star wordmark + dark "Schedule a demo" pill. |
| `02-stats-and-features.png` | White section — two-line heading ("Designed to convert. / Built to scale."), a row of large stat numbers (10.6x, 37%, 4.8x) with muted labels, then a 3-column feature row (line icon → title → muted copy) split by hairline rules. |
| `03-ai-compliance-clouds.png` | Centered section over a photographic blue-sky/clouds background — green-dot "Artificial Intelligence" tag, white headline, muted-white subhead, white pill CTA with chevron. |
| `04-feature-onboard-flow.png` | Split feature section on white — left intro (tag, two-line heading, subhead), right outline "Explore ›" pill; a soft gray card holding a vertical step-flow diagram (search input → connected step cards with "⚡ Autofilled") beside a vertical feature list with one highlighted item. |

## How to add them

Drag/drop or copy the PNGs into this folder, keeping the filenames above. You can
add more examples over time — if you do, also list them in `../SKILL.md` under
"How to use this skill" so Claude knows to read them.
