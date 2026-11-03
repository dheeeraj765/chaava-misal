# Chaava Misal website (Kolhapur)
Static site (HTML, CSS, a little JavaScript). No build step, no dependencies.

## Run locally
    cd chaava-misal-website
    python3 -m http.server 8000    # open http://localhost:8000
(or just open index.html in a browser)

## Edit content
- Menu items and prices: the `M`, `S` and `C` lists at the top of `js/main.js`.
- Address, phone, hours: `index.html` (Visit section, footer, JSON-LD in head).
- Images: `assets/`.

## Deploy
Upload the whole folder to any static host (Netlify Drop, Vercel, GitHub Pages, Cloudflare Pages).

## Still to confirm
Founding story, opening days, a share (Open Graph) image URL once a domain exists. The English names under the Marathi menu items are translations added for visitors; please confirm them.
