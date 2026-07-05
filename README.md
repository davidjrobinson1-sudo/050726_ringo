# RINGO Website

Static GitHub Pages-ready website for RINGO NFC payment rings.

## Upload to GitHub

1. Upload all files in this folder to a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Set the source to the repository branch that contains `index.html`.
4. Save and wait for GitHub Pages to publish.

## Files

- `index.html` - page content
- `styles.css` - layout and visual design
- `script.js` - mobile menu and Stripe Payment Links checkout routing
- `stripe-payment-links-template.csv` - checklist for the Stripe Payment Links to create
- image and document files - logo, product renders, policies, sizing guide, packaging, and lifestyle image

## Stripe Payment Links

Before launch:

1. In Stripe, create one Payment Link for each finish and ring size.
2. Use clear product names such as `RINGO Obsidian Mirror - Size 9` so the selected size is visible in Stripe orders.
3. Use `stripe-payment-links-template.csv` as your checklist.
4. Replace each `https://buy.stripe.com/REPLACE_...` placeholder in `script.js` with the matching live Stripe Payment Link.
