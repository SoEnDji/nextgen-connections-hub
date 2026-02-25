

## Add Founders Section to the About Page

### What changes
A new **Founders section** will be inserted into `src/pages/About.tsx` between the "Warum" section (line 59) and the "Unsere Erfahrung" section (line 61). The two uploaded photos will be copied into the project as assets.

### Assets
- Copy `user-uploads://Foto_von_vera.jpg` to `src/assets/founder-sohrab.jpg`
- Copy `user-uploads://IMG_20250627_143339.jpg` to `src/assets/founder-vera.jpg`

### New sections (inserted after the "WARUM" section)

**1. Transition bridge** -- a short centered text block with the transition line:
- DE: "Diese Haltung pragt nicht nur unsere Arbeit. Sie pragt auch uns."
- EN: "This mindset doesn't just shape our work. It shapes us."

**2. Founders section** with:
- Section headline: "Die Menschen hinter 2Morrow Lab" / "The People Behind 2Morrow Lab"
- Two-column grid on desktop (`lg:grid-cols-2`), stacked on mobile
- Each founder card: portrait image (rounded, aspect-square, object-cover), name as `h3`, then biography paragraphs
- Left column: Dr. Sohrab Noorsalehi-Garakani with his photo
- Right column: Vera Plumer with her photo
- Uses the existing `fadeUp` animation variant
- Alternating background (`section-alt`) to fit the visual rhythm
- German text used exactly as provided; English text as provided

### Technical details
- Import the two new founder images at the top of the file
- Both sections use `motion.div` with the existing `fadeUp` animation
- No changes to any other page, component, or navigation
- Layout matches the existing design system (font-heading, text-muted-foreground, spacing, etc.)

