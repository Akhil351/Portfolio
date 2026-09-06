# Portfolio version2

The redesign stays in the existing React 18 / TypeScript / Vite project. No deployment or branch changes are part of this work.

## Local development

Use a current supported Node LTS release (Node 24 recommended). The existing ESLint dependency reports an engine warning under the machine's Node 23.7.0, though validation passes.

```bash
npm install
npm run dev -- --host 127.0.0.1
```

Open the local URL printed by Vite (normally http://127.0.0.1:5173/).

```bash
npm run typecheck
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

Type checking covers the application and the Vite configuration.

## Content and adding projects

`src/data/portfolio.ts` contains identity, verified social/contact links, resume path, Formspree ID, employment history, technologies, project entries, credentials, education, and the original profile milestones. Original role contributions and project descriptions are preserved. The additional Frontend group and Hyperledger Fabric entry come from existing project, achievement, and experience descriptions.

Add a `Project` entry to the `projects` array with its real description, technology list, source URL, category, concise summary, and architecture steps. Cards and diagrams render from the data. `demo` is nullable: the original five entries pointed to GitHub for both source and demo, so duplicate demo actions have been removed. Future projects should only be added when their details are available. No fabricated project screenshots are used.

The form retains the existing Formspree endpoint and loads when opened. Required-field and email-format validation were exercised locally; a real message was deliberately not submitted. Remote delivery still depends on the existing Formspree account.

## Visual system and motion

- Space Grotesk headings, Inter body text, IBM Plex Mono metadata; system fallbacks keep the page readable if Google Fonts is unavailable.
- Shared tokens and responsive rules in `src/index.css`; shared reveal, numeric milestone, heading, and technology-list components in `src/components/ui`.
- `CoreScene.tsx` is a procedural scene, with no model or texture downloads. Layered circuit boards, a floating core, service nodes, and instanced data packets communicate connected systems.
- The 3D bundle loads independently from the main UI. DPR is capped at 1.5 on desktop and 1 on small screens, with fewer packets and reduced geometry/antialiasing work on mobile.
- WebGL rendering pauses when the hero is offscreen, the page is hidden, motion is manually paused, or reduced motion is requested. Native page scrolling remains available over the canvas.
- Reduced motion also removes reveal movement, number animation, smooth scrolling, and hover tilt. The core has a static fallback for unavailable/lost WebGL contexts.
- Removed the artificial loader, custom cursor loop, old particle field, fake proficiency percentages, and mock terminal output.

## Validation

- `npm install`, application/configuration type checks, ESLint, and production build.
- Desktop (1440px), tablet (768px), mobile (390px), and narrow mobile (320px) inspected in the local browser; no horizontal page overflow.
- Mobile menu navigation, Escape dismissal and focus restoration, career disclosures, 3D pause/play, contact form controls and invalid email behavior, and local anchor destinations checked.
- Resume remains the original PDF; project URLs are retained from the original source. Some remote repository pages could not be fetched by the research tool, so this is not a guarantee of third-party availability.
- No browser console errors observed during normal local navigation.
- Reduced-motion branches and WebGL fallback were reviewed in code; the available browser tool does not expose media-preference or GPU-failure emulation.
- Existing company, dates, descriptions, technologies, achievements, and contact details audited against the original Git revision.

Metadata uses the supplied `https://www.akhileswar.com/` domain. The old missing `og-image.jpg` references were removed, and social cards use text metadata. The favicon is a local vector monogram. Publishing remains a separate action.
