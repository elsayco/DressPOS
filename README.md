# DressPOS — Clothing Store POS Showcase

Arabic RTL interactive frontend prototype for a clothing store point-of-sale and management system. The project is a UI showcase powered by sample data; it does not connect to a production backend, payment provider, or real inventory.

![DressPOS sign-in screen](Deliverables/screenshots/login.png)

## Live demo

https://elsayco.github.io/DressPOS/

## Run locally

Requirements: Node.js 20 or newer.

```powershell
cd Application
npm ci
npm run dev
```

Open the local URL printed by Vite. Use the demo account `Admin` / `admin` to open the demo dashboard. This client-side account is only for the showcase.

Build a production bundle with `npm run build` inside `Application`.

## Modules

Login, dashboard, POS, sales, products, inventory, purchasing, finance, customer and supplier statements, branches, attendance and shifts, activity log, reports, users, store administration, and settings.

The newly added operational modules use mock state and have known workflow gaps; see the [compliance matrix](Documentation/SCREEN_COMPLIANCE_MATRIX.md), [mock data notes](Documentation/MOCK_DATA.md), and [QA report](Documentation/QA_REPORT.md). Browse [desktop captures](Deliverables/screenshots/) and [extended module captures](Deliverables/screenshots/extended/).

## Demo notes

- The UI is Arabic and right-to-left, with responsive layouts.
- POS checkout, receiving stock, search, forms, detail panels, and reports use local sample data.
- Changes reset on page refresh. No real payment is taken and no data is saved to a server.
- New purchase receipts, returns, payments, expenses, adjustments, attendance, and settlements update only the local demonstration state; transfers are status simulations and are not a warehouse ledger.

Run the lightweight domain tests with `npm test` inside `Application`.

## Repository layout

- `Application/` — Vite + React app and local image assets.
- `Documentation/` — screen inventory, design mapping, workflows, QA, and limitations.
- `Deliverables/screenshots/` — desktop captures of the app routes.
- `*.png` at the root — supplied design references.
