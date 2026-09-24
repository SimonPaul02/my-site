# Simon Paul — personal website

A responsive, bilingual personal website built with Next.js, React, TypeScript and i18next. Includes an animated WebGL background, scroll reveals, and optional Cal.com scheduling.

## Local development

Requires Node.js 20.9+ and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

## Optional booking calendar

Set `NEXT_PUBLIC_CAL_LINK` in your untracked `.env.local` file to your Cal.com event path (`username/event`). Without it, the site shows email contact instead of a calendar. The example file deliberately contains no personal event address.

For hosting, configure this variable privately in your hosting provider before building. This keeps it out of GitHub, but it is **not a secret from website visitors**: the browser needs the event path to display the calendar, and Next.js includes public variables in the built site. Rebuild after changing it. Never put passwords, tokens, or API secrets in `NEXT_PUBLIC_*` variables.

## Build

```sh
npm run build
```

The static website is exported to `out/`, ready for a static host. Hosting is not configured by this repository. Do not commit generated output or environment files.

## Edit

- English/German copy and layout: `app/page.tsx`
- Responsive styles and animation: `app/globals.css`
- WebGL background: `components/ui/blue-halftone.tsx`
- Images and organization marks: `public/`

Language follows the browser preference, with manual EN/DE selection. Reduced-motion preferences are respected.

## License and assets

Original website code is licensed under MIT; see `LICENSE`. Personal photographs, third-party logos, and the supplied shader are excluded from that license. See `THIRD_PARTY.md`. Replace Simon’s identity, photos and contact details when reusing the template.
