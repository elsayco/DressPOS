# DressPOS — Interactive Frontend Showcase

Arabic RTL frontend demonstration for a clothing store management system. All business data is mock data held in browser memory; there is no backend, authentication provider, payment gateway, POS hardware, or production stock connection.

## Run locally

1. Install Node.js 20 or newer.
2. Open PowerShell and run:

   ```powershell
   cd E:\DressPOS\Application
   npm install
   npm run dev
   ```

3. Open the local address printed by Vite (normally `http://localhost:5173`). The first screen is the DressPOS sign-in demonstration. Enter any non-empty username and password to open the dashboard.

To create a production bundle locally, run `npm run build` inside `Application`. The bundle is written to `Application/dist`.

## Included screens

Login, Dashboard, POS, Sales, Products, Inventory, Customers, Suppliers, Reports, Users, Store Administration, and Settings. The system map reference is documented as an architecture diagram, not a screen.

## Local demo behavior

- Routes use the URL hash, e.g. `/#/products`, so each view can be refreshed directly.
- Shared product, customer, invoice, supplier, branch, user, and stock mock data lives in `Application/src/data/mockData.js`.
- POS checkout creates a demo invoice, updates the in-memory customer totals, product balances, and inventory movements.
- Purchase receipt updates a selected product balance and adds an inventory movement.
- Search, category tabs, detail panels, modal forms, status tabs, sample reports, print preview, and export feedback are simulated locally.
- State resets after a full browser refresh. No business data is persisted.

## Project map

- `Application/src/main.jsx` — app shell, routes, screen views, mock interactions.
- `Application/src/styles.css` — Arabic RTL design system and responsive rules.
- `Application/src/data/mockData.js` — centralized sample entities.
- `Application/public/assets` — reference-derived clothing image crops.
- `Documentation` — screen inventory, reference map, architecture, QA, and limitations.
- `Deliverables/screenshots` — 12 desktop route captures.

See [SCREEN_INVENTORY.md](Documentation/SCREEN_INVENTORY.md), [DESIGN_REFERENCE_MAP.md](Documentation/DESIGN_REFERENCE_MAP.md), and [QA_REPORT.md](Documentation/QA_REPORT.md).
