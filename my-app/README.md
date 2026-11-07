# Hospedaria Real Parque

Guest guide in Portuguese, English, and Spanish. Built with React, TypeScript,
Tailwind CSS, and Vite, with an installable PWA and local photo assets.

## Run and verify

Use Node.js 24 LTS or a compatible recent Node version. From this directory:

- `npm ci` installs the locked dependencies.
- `npm run dev` starts the local development server.
- `npm run lint` checks the code.
- `npm test` runs 50 automated checks, including server rendering of all 14 pages in all three languages.
- `npm run build` checks TypeScript and creates the production app in `dist`.
- `npm run preview` serves the production build locally.

Page URLs use hashes (for example `#check-in`). Refresh and browser Back/Forward
retain the selected page. The language preference is saved when browser storage
is available.

## Update guest information

- `src/data/property.ts`: house address and map location.
- `src/data/contact.ts`: host phone, WhatsApp number, and prefilled message.
- `src/data/places.ts`: nearby recommendations, translations, and source links.
- `src/data/images.ts`: photos and captions; files live in `public/guest-images`.
- `src/App.tsx`: guide translations and detailed arrival/amenities information.
- `src/pages/checkout/CheckoutPage.tsx`: checkout layout and departure time.

To add the late check-in video, place it at `public/videos/check-in.mp4` and set
`checkInVideoSrc` in `src/data/checkIn.ts` to `/videos/check-in.mp4`. A direct HTTPS
video file URL also works. The app displays a clear placeholder until configured.

## Validation scope

Automated checks cover rendered page headings, image files, link formats,
recommended-place data, the map override, WhatsApp messages, key-return details,
and operation with unavailable browser storage. They do not replace visual or
interactive browser testing. Before publishing, verify phone/tablet layouts,
menu and gallery keyboard focus, browser history, copy buttons, and installation
in the browsers guests use.

Business opening hours may change. Mercado Tibes has conflicting hours in public
listings, so the guest guide includes a confirmation note. The restaurant map for
Tempero da JU deliberately uses the house address, as requested by the host.
