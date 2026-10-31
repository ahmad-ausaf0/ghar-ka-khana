# 🍛 Ghar Ka Khana

A one-page static showcase site for a home-made North Indian food startup. Ghar jaisa khana, served fresh from a home kitchen.

Built with plain HTML, CSS and JavaScript. No backend, no login, no payment, no build step.

## Features

- **Hero section** with the startup name, a "ghar jaisa khana" tagline, and a button that scrolls to the menu.
- **Menu with 8 dishes**, each card showing name, short description, price in ₹, a pure-veg mark, and a spice level (no spice / mild / medium / spicy): Dal Makhani, Rajma Chawal, Paneer Butter Masala, Aloo Paratha, Chole Bhature, Sarson Da Saag with Makki Di Roti, Baingan Bharta, and Kheer.
- **Enquire flow**: every dish card has an Enquire button that scrolls to the contact section and shows a toast.
- **About the home kitchen** section describing the small-batch, pure-veg, no-preservative approach.
- **How it works** section: choose a dish, enquire, home delivery.
- **Footer** with contact placeholders (phone, WhatsApp, email, delivery area) and kitchen hours.
- **Warm North Indian design**: saffron, haldi and cardamom palette, Baloo 2 + Mulish fonts, fully responsive with a mobile hamburger menu.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The full page: header, hero, menu, about, how it works, footer |
| `styles.css` | All styling, including the responsive mobile layout |
| `script.js` | Menu data (dishes, prices, spice levels) and interactions |
| `README.md` | This file |

## How to run / open it

**Option 1: just open the file.**
Double-click `index.html`, or right-click it and choose "Open with" your browser. Everything works from the file system.

**Option 2: serve it locally (nicer, mirrors hosting).**
From this folder, run any of:

```bash
# Python
python3 -m http.server 8000
# Node
npx serve .
```

Then open http://localhost:8000 in your browser.

**Option 3: deploy it free.**
Push this folder to a GitHub repository and enable GitHub Pages (Settings → Pages → deploy from branch `main`, root folder). Or drop the folder onto Netlify / Vercel for an instant live link.

## Customising

- **Menu**: edit the `DISHES` array at the top of `script.js` (name, description, price, spice level 0–3).
- **Contact details**: replace the placeholders in the footer of `index.html`.
- **Colours and fonts**: all theme variables live in the `:root` block at the top of `styles.css`.

---

Made with ghee, pyaar, and a little CSS. 💛
