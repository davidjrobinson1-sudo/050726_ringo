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
- `stripe-payment-links.csv` - the Stripe Payment Links currently connected to the site
- image and document files - logo, product renders, policies, sizing guide, packaging, and lifestyle image

## Stripe Payment Links

Before launch:

The site currently uses one Stripe Payment Link per ring finish. The selected size is added to the checkout URL as `client_reference_id`, for example `obsidian-mirror-size-9`.

For the cleanest fulfilment workflow later, create one Payment Link per finish and size, with names such as `RINGO Obsidian Mirror - Size 9`, then update the `PAYMENT_LINKS` map in `script.js`.
