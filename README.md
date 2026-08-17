# Norm & Thread — clothing storefront

Static, single-page, mobile-responsive React storefront for a clothing
business. No backend — every product lives in `src/data/products.js`.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Mobile responsiveness

- Header collapses to a hamburger menu below 640px.
- Product grid goes from 3-4 columns → 2 columns (tablet/large phone) → 1
  column (small phones, under 400px).
- Contact section stacks to a single column below 820px.
- Buttons go full-width on mobile for easier tapping.
- Form inputs use 16px+ font to avoid iOS auto-zoom on focus.

Breakpoints live at the bottom of `src/App.css` — adjust the `max-width`
values there if you want different cutoffs.

## Structure

```
src/
  data/
    products.js     ← all product + site copy (edit this to restock the shop)
    whatsapp.js      ← builds the wa.me deep link used everywhere
  components/
    Header.jsx       ← desktop nav + mobile hamburger menu
    Hero.jsx
    CategoryFilter.jsx
    ProductCard.jsx  ← shows color, sizes, and an "Enquire on WhatsApp" button
    ProductGrid.jsx
    About.jsx
    ContactForm.jsx  ← submitting opens WhatsApp with the message pre-filled
    Footer.jsx
  App.jsx
  App.css            ← all styling, design tokens at the top, breakpoints at the bottom
```

## Before you deploy: set your WhatsApp number

Open `src/data/products.js` and change:

```js
whatsappNumber: "10000000000",
```

to your real business number, **digits only, country code first, no `+`, spaces,
or dashes** — e.g. `"14155552671"` for `+1 415 555 2671`. Every WhatsApp button
in the app (the contact form and each product's "Enquire" button) reads from
this one value.

## Editing the catalog

Add, remove, or edit entries in the `PRODUCTS` array in `src/data/products.js`.
Each product needs: `id`, `sku`, `name`, `category` (must match one in
`CATEGORIES`), `price`, `swatch` (a hex color used as the card's image
placeholder), `color`, `material`, `sizes` (array of strings), `description`,
`inStock`.
