# All-in-One Tools — landing site

A colorful, single-page landing site for the **All-in-One Tools** Android app:
built with React, TypeScript, Vite and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL. Edit files in `src/` — the page hot-reloads.

## Before you ship it

1. **Add the real APK.**
   Drop your signed `.apk` into `public/downloads/all-in-one-tools.apk`
   (or change the filename — just update `APK_PATH` in
   `src/components/DownloadSection.tsx` to match). The Download button
   links straight to this file, so no external host is needed.

2. **Add real screenshots (optional).**
   Drop PNGs into `public/screenshots/`, then swap the CSS-mocked phone
   screens in `src/components/Screenshots.tsx` for `<img src="/screenshots/…" />`.

3. **Point the GitHub links at your repo.**
   Search for `https://github.com/` across `src/components/` (Nav, Hero,
   DownloadSection, Footer) and replace with your actual repo URL.

4. **Set the app icon / favicon.**
   Replace `public/favicon.svg` with your real logo.

5. **Update version/size text** in `DownloadSection.tsx`
   (`APK_VERSION`, `APK_SIZE`) to match your actual release.

## Deploying to GitHub Pages

This repo includes a ready-to-go GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds the site and publishes it to
GitHub Pages on every push to `main`.

1. In your GitHub repo, go to **Settings → Pages** and set
   **Source** to **GitHub Actions**.
2. Check `vite.config.ts` — the `base` path must match how the site is served:
   - Project page (`https://<user>.github.io/<repo>/`) → keep
     `base: '/<repo>/'` and set `<repo>` to your actual repository name.
   - User/org page or a custom domain (`https://<user>.github.io/` or
     `https://yourdomain.com`) → change it to `base: '/'`.
3. Push to `main`. The Actions tab will show the deploy running; once green,
   your site is live at the Pages URL shown in Settings → Pages.

### Manual deploy (alternative)

```bash
npm run deploy
```

This uses `gh-pages` to push the built `dist/` folder to a `gh-pages` branch —
useful if you'd rather not use the Actions workflow.

## Project structure

```
src/
  components/
    Nav.tsx            sticky header
    Hero.tsx            headline, CTAs, phone mockup + floating tool chips
    Toolbelt.tsx        scrolling strip of every tool (the "spilled toolbox")
    CategoryGrid.tsx    the 6 tool categories as cards
    WhyOffline.tsx      offline-first / privacy pitch
    Screenshots.tsx     phone-frame previews (placeholder mockups for now)
    DownloadSection.tsx APK download + GitHub link
    Footer.tsx
  data.ts               single source of truth for categories + tool list
```

To add or rename tools, edit `src/data.ts` — the toolbelt strip and category
counts update automatically.

## Design tokens

| Token    | Value              | Used for                       |
|----------|--------------------|---------------------------------|
| paper    | `#FBF8FF`          | page background                 |
| ink      | `#1F1B34`          | text, borders, dark surfaces    |
| night    | `#171331`          | darkest sections (toolbelt/footer) |
| coral    | `#FF5D73`          | Text Tools                      |
| amber    | `#FFB100`          | Calculators                     |
| mint     | `#2FD8A3`          | Image Tools                     |
| violet   | `#8C6BFF`          | Generators, primary CTA         |
| sky      | `#34B3F1`          | Converters                      |
| indigo   | `#5B4FE0`          | Dev Tools                       |

Display type is **Fredoka** (headlines), body is **Inter**, and tool
chips/code use **JetBrains Mono**.
