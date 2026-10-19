# Immersive anime-inspired portfolio refresh

## What will change
- Re-style the existing one-page portfolio as a vibrant, immersive 3D anime-inspired developer world, including the hero, section treatments, project previews, typography, and vivid but coordinated colors.
- Use the newly generated developer-studio scene as a bundled visual asset, layered behind the existing user-supplied portrait; keep the portrait and all factual portfolio copy intact.
- Add depth with restrained perspective, layered surfaces, lighting, and motion that respects reduced-motion preferences, while preserving legibility, accessibility, and mobile layouts.

## Technical details
- Update the existing semantic color/font tokens and page styles in `src/styles.css` and the font links in `src/routes/__root.tsx`.
- Add the generated scene to the existing home-page presentation in `src/routes/index.tsx`; do not introduce a new route, backend, or interactive 3D engine.
- Record the updated visual direction in project memory, then verify the page at desktop and mobile sizes and check build/runtime status.