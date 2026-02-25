

## About Page: Reorder Sections and Merge Bridge Text

### Two changes in `src/pages/About.tsx`

**1. Replace the last paragraph in the "WARUM" section (lines 55-58)**

Replace:
- DE: "Aus dieser Überzeugung ist 2Morrow Lab entstanden."
- EN: "This conviction is what gave birth to 2Morrow Lab."

With the text from the transition bridge:
- DE: "Diese Haltung prägt nicht nur unsere Arbeit. Sie prägt auch uns."
- EN: "This mindset doesn't just shape our work. It shapes us."

**2. Remove the standalone "TRANSITION BRIDGE" section (lines 63-73)**

Delete the entire `section-dark` bridge block since its content now lives in the paragraph above.

**3. Move "UNSERE ERFAHRUNG" above "FOUNDERS"**

Swap the order of the two sections so the page flows:
1. Hero
2. Warum (with merged bridge text)
3. Unsere Erfahrung / Our Experience
4. Founders / Die Menschen hinter 2Morrow Lab
5. Worauf wir aufbauen / What we build on

### What stays unchanged
- All German text (locked, not edited)
- All English text (unchanged)
- Layout, styling, typography, and design
- No other pages affected
