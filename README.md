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

Set `CAL_LINK` in your untracked `.env.local` file to your Cal.com event path (`username/event`). Without it, the site shows email contact instead of a calendar. The example file deliberately contains no personal event address.

For hosting, configure `CAL_LINK` privately in the server environment. It stays out of GitHub and is no longer a `NEXT_PUBLIC_*` build-time variable. The event address is still visible to website visitors because the booking widget needs it. Never use this variable for passwords or API secrets.

## Production

```sh
npm run build
npm start
```

This version uses request-time server rendering and requires a Next.js-compatible server host. It no longer exports a static `out/` directory. Hosting is not configured by this repository. Do not commit build output or environment files.

## Rendering and performance

- Profile content and i18next translations render on the server. The initial HTML is complete without JavaScript.
- Language is selected from the saved `site-language` cookie or the browser’s `Accept-Language` header. EN/DE links work without JavaScript and persist the preference for one year.
- The shader, scroll reveals, and booking widget are isolated client components. The calendar loads only when close to the viewport.
- The portrait uses a transparent WebP and Next.js responsive image optimization, with a preload for the hero image.
- Reduced-motion preferences disable entrance animations and stop shader time animation.

## Edit

- English/German copy and layout: `app/page.tsx`
- Responsive styles and animation: `app/globals.css`
- WebGL background: `components/ui/blue-halftone.tsx`
- Images and organization marks: `public/`



## License and assets

Original website code is licensed under MIT; see `LICENSE`. Personal photographs, third-party logos, and the supplied shader are excluded from that license. See `THIRD_PARTY.md`. Replace Simon’s identity, photos and contact details when reusing the template.
