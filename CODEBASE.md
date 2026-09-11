# syska.lk — Codebase Documentation

## Overview

This is a small **static marketing website** for **Syska** (electronics/LED lighting products), built by the agency **Adderbree**. It is a promotional "info + contact" site that links out to a separate e-commerce shop at `https://syska.lk/shop/`, rather than hosting the shop itself.

The site is **not a JS application or framework project** — there is no `package.json`, no build tool config (no Gulp/Webpack/Vite), and no bundler. It's plain, hand-written HTML pages that pull in a small set of pre-compiled/vendored CSS and JS libraries, plus a SASS source tree that appears to have been compiled manually (a `style.css.map` is checked in, pointing back to the `.scss` sources).

**Pages:** 2 total
- [index.html](index.html) — Home page
- [contact.html](contact.html) — Contact page

There is no server-side code, database, CMS, or routing — everything is two flat HTML files plus static assets.

---

## Directory Structure

```
syska.lk/
├── index.html                 Home page
├── contact.html                Contact page
└── assets/
    ├── css/                    Compiled/production CSS
    │   ├── style.css           Main compiled stylesheet (compiled from assets/sass)
    │   ├── style.css.map       Source map back to the .scss files
    │   ├── font-awesome.css    Font Awesome 4 icon font styles
    │   └── background-image.css  Unused leftover (references a non-existent home-banner.png)
    ├── sass/                   SASS/SCSS source (source of truth for style.css)
    │   ├── style.scss          Master entry point — @imports everything below in order
    │   ├── _details.scss       Theme metadata header (name/author/version comment block)
    │   ├── _variables.scss     Global SCSS variables (font, colors)
    │   ├── _default.scss       Base element styles (body, html, headings)
    │   ├── _overwrites.scss    CSS reset + Bootstrap grid overrides + global utility classes
    │   ├── common/             One partial per reusable UI component (see Components below)
    │   ├── pages/
    │   │   └── _home.scss      Leftover template styles — NOT imported by style.scss, NOT used on this site (see Notes)
    │   └── vendor/              Vendored third-party SCSS (Bootstrap, AOS, Slick, Font Awesome)
    ├── js/
    │   ├── custom.js            Site-specific JS (see below)
    │   ├── bootstrap.js / bootstrap.min.js   Bootstrap 3 JS plugins (navbar toggle, collapse, etc.)
    │   ├── slick.min.js         Slick carousel plugin
    │   └── jquery.min.map        Source map for jQuery (jQuery itself lives in vendors/)
    ├── images/
    │   ├── home/                 Hero banner slide images + featured product image
    │   ├── contact/               Contact page banner image
    │   ├── footer/                 Social icons (Facebook, Instagram) + "go to top" icon
    │   ├── fav/                    Favicons, app icons, browserconfig.xml, site.webmanifest
    │   ├── logo.png                 Site logo
    │   ├── list-style.png / list-style-black.png   Bullet icons for feature lists
    │   └── paper_ad_4.jpg             Print-ad image embedded on the Contact page
    ├── fonts/                    Font Awesome + Glyphicon + Slick icon font files
    └── vendors/                  Full third-party library sources (not hand-written)
        ├── jquery/                 jQuery (full source + dist)
        ├── font-awesome/            Font Awesome 4 (full source + dist)
        ├── aos-master/               AOS ("Animate On Scroll") library
        └── animate.css               Animate.css library
```

---

## Pages

### [index.html](index.html) — Home Page
Sections, top to bottom:
1. **Header / Navbar** (`.header-section`) — fixed-top Bootstrap navbar with logo, links to Home / Contact Us, and a "Shop Now" button linking externally to `https://syska.lk/shop/`.
2. **Home banner / hero slider** (`.home-banner-section`) — a Slick carousel (`.main-slider`) with 3 slides, each a full-bleed background image (`banner-1/2/3.png`) with an overlaid product cutout image.
3. **"View more" strip** (`.home-view-more-section`) — a thin animated-gradient bar prompting "Looking for new range of LED lighting solutions?" with a "View More" link (currently an empty `href`).
4. **Featured Products** (`.featured-image`) — marketing copy about Syska LED bulbs with a bulleted feature list (wide application, easy install, energy saving, long lasting, designed for well-being) and a "Shop Now" button (links to `shop-now.html`, which does not exist in this repo).
5. **Footer** — shared across both pages (see below).

### [contact.html](contact.html) — Contact Page
Sections:
1. **Header / Navbar** — same as home, with "Contact Us" marked `active`.
2. **Inner banner** (`.inner-banner`) — full-bleed background image (`contact/Banner.png`).
3. **Contact wrapper** (`.contact-wrapper`):
   - A contact **form** (Name, Email, Phone, Message, Submit button) — **static HTML only, no `action`/`method` attribute and no JS handler**, so submissions currently go nowhere.
   - "Email Us" block with a `mailto:hello@pinnaclegroup.lk` link.
   - "Need to speak with someone?" block with two `tel:` phone links (+94 755 210 823, +94 718 185 470).
   - An embedded print-ad image pulled from the **live production site** (`https://syska.lk/assets/images/paper_ad_4.jpg`) rather than the local copy.
4. **Footer** — shared, identical markup to index.html.

### Shared Footer (both pages)
- "Follow Us" social icons (Facebook, Instagram) — both `href=""` (not wired up).
- "Go to Top" icon/link (`href="#"`, no JS smooth-scroll handler attached beyond CSS `scroll-behavior: smooth`).
- Copyright line with a `document.write(new Date().getFullYear())` inline script for the current year.
- "Concept and Design by Adderbree" credit link.

---

## Components (SCSS partials in `assets/sass/common/`)

| Partial | Purpose |
|---|---|
| `_button.scss` | `.button-1` — the shared gradient pill CTA button (green→blue gradient, inverts on hover) used for "Shop Now" and "Submit". |
| `_nav.scss` | Fixed transparent navbar, nav link styling/hover states, active-page underline, responsive breakpoints for tablet/mobile (hamburger toggle styling). |
| `_footer.scss` | Footer layout, social icon list, animated rainbow-color-cycling copyright link (`@keyframes Color`), responsive stacking on mobile. |
| `_home-banner-section.scss` | Hero slider sizing, background-image behavior, and custom styling of Slick's dot navigation (thin pill-shaped dots, active dot widens). |
| `_home-view-more-section.scss` | The animated 4-color diagonal gradient promo strip and its rounded black inner container. |
| `_featured-image.scss` | Two-column "Featured Products" layout, heading/body typography, bullet list with custom bullet icon background-image. |
| `_inner-banner.scss` | Generic full-bleed banner block reused for interior pages (currently just Contact). |
| `_contact-wrapper.scss` | Full contact page styling: headings, form field styling (inputs/textarea with placeholder color overrides), form layout/spacing, email/phone content blocks. |

## Vendor SCSS (`assets/sass/vendor/`)
Pass-through imports of third-party libraries compiled into the single `style.css` bundle:
- `_bootstrap.min.scss` — Bootstrap 3 grid/components
- `_aos.scss` — AOS scroll-animation library styles
- `_slick.scss` — Slick carousel base styles
- `_font-awesome.scss` — Font Awesome 4 icon styles

## SCSS Build Order (`style.scss`)
```
_details → vendor/bootstrap.min → vendor/aos → vendor/slick → vendor/font-awesome
→ _variables → _overwrites → _default
→ common/_button → common/nav → common/footer
→ common/home-banner-section → common/home-view-more-section
→ common/featured-image → common/inner-banner → common/contact-wrapper
```
This compiles to `assets/css/style.css` (loaded by both HTML pages, currently cache-busted via `?2` / `?3` query strings that differ per page — likely just manual edits, not a real versioning scheme).

---

## JavaScript

### [assets/js/custom.js](assets/js/custom.js) — the only hand-written JS in the project
```js
$(document).ready(function () {
    $('.main-slider').slick({
      dots: true, infinite: true, speed: 300,
      slidesToShow: 1, fade: true, cssEase: 'linear', autoplay: true,
    });
    AOS.init();
});
```
Initializes two things on every page load:
1. **Slick carousel** on `.main-slider` (only present on the home page hero) — autoplaying fade transition, dot navigation.
2. **AOS (Animate On Scroll)** — powers the `data-aos="fade-up" / "fade-left" / "fade-right"` attributes scattered through both pages' markup, animating sections/rows into view as the user scrolls.

### Third-party JS (all vendored, unmodified)
- **jQuery** (`vendors/jquery`, loaded via `assets/vendors/jquery/dist/jquery.min.js`) — required by Bootstrap JS and Slick.
- **Bootstrap 3 JS** (`assets/js/bootstrap.min.js`) — powers the responsive navbar collapse/toggle.
- **Slick** (`assets/js/slick.min.js`) — carousel/slider engine.
- **AOS** (`assets/vendors/aos-master/aos.js`) — scroll-triggered animation engine.

Script load order in both HTML files: jQuery → Bootstrap → Slick → AOS → `custom.js`.

---

## Styling / Design System

- **Font:** Poppins (Google Fonts, weights 300/400/600/700), set as `$main-font`.
- **Palette:** primarily black (`#000`) background/hero sections, white text, with a signature **green→blue gradient** (`#43b575` → `#039eed`) used for all primary CTA buttons and hover states, and a teal accent (`#3ee4d3`) used for link hover states.
- **Layout:** Bootstrap 3 grid system (`.container`, `.row`, `.col-xs/sm/md/lg-*`), plus a custom `.h_align` flexbox utility for centering.
- **Animation:** AOS fade-in-on-scroll throughout; a CSS keyframe animated gradient background on the home "view more" strip; a CSS keyframe color-cycling animation on the footer copyright link.
- **Responsive breakpoints:** each component partial defines its own tablet (992–1199px), small-tablet (768–991px), mobile (≤767px), and mobile-landscape overrides — a pattern repeated consistently across every `common/` partial.

---

## Assets

- **Images:** hero banners and product cutouts (`images/home/`), the contact page banner (`images/contact/`), footer social icons (`images/footer/`), and a full favicon/PWA icon set (`images/fav/`, including `site.webmanifest` and `browserconfig.xml` for Windows tiles).
- **Fonts:** Font Awesome 4 icon font (multiple formats: eot/svg/ttf/woff/woff2) and Bootstrap's Glyphicons, plus Slick's icon font — all self-hosted in `assets/fonts/`.

---

## Notes, Dead Code & Inconsistencies

Worth knowing if you extend this codebase:

- **`assets/sass/pages/_home.scss` is unused.** It's not `@import`-ed by `style.scss`, and its selectors (`.special-offers-section`, `.guest-reviews-wrapper`, `.your_taste_buds_section`, `.explore_the_area_section`, etc.) don't match anything in `index.html`. This is leftover boilerplate from the "Adderbree" template this site was built from (looks like a restaurant/hotel template based on the class names), safe to ignore or delete.
- **`assets/css/background-image.css`** is similarly unused/orphaned — it references `home-banner.png` / `home-banner@2x.png`, neither of which exists in `assets/images/`, and the file isn't linked from either HTML page.
- **Contact form has no backend.** The `<form>` on [contact.html](contact.html) has no `action`, `method`, or JS submit handler — clicking "Submit" does nothing. Needs a form endpoint (e.g. mailto, a serverless function, or a form service) to actually work.
- **Several links are placeholder/empty:** the "View More" link on the home page (`href=""`), and both footer social icons (Facebook/Instagram, both `href=""`).
- **`shop-now.html` referenced but missing** — the "Shop Now" button under Featured Products links to a local `shop-now.html` that doesn't exist in this repo (the navbar's own "Shop Now" button correctly points to the external `https://syska.lk/shop/` instead).
- **Contact page hot-links a production asset**: the print-ad image uses the absolute URL `https://syska.lk/assets/images/paper_ad_4.jpg` instead of the local `assets/images/paper_ad_4.jpg` that already exists in this repo.
- **No build tooling checked in.** `style.css.map` implies the SCSS was compiled with a Sass compiler (likely a code editor's built-in "watch/compile" feature, e.g. VS Code's Live Sass Compiler), but there's no `package.json`/Gulp/npm script to reproduce that build — anyone editing the `.scss` files will need to set up their own compiler.
- **Cache-busting query strings differ per page** (`style.css?2` on contact.html vs `style.css?3` on index.html, `custom.js?1` on both) — this looks like manual, ad-hoc versioning rather than an automated build step, so remember to bump it by hand after CSS/JS changes.
