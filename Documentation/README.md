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

3. Open the local address printed by Vite (normally `http://localhost:5173`). The first screen is the DressPOS sign-in demonstration. Use the demo account `Admin` / `admin` to open the dashboard. This is a front-end showcase login, not production authentication.

To create a production bundle locally, run `npm run build` inside `Application`. The bundle is written to `Application/dist`.

## Included screens

Original: Login, Dashboard, POS, Sales, Products, Inventory, Customers, Suppliers, Reports, Users, Store Administration, and Settings. Added: purchasing list/new invoice/receiving/returns, cashboxes/cashier shifts/payments/expenses/custodies/balances, warehouses/transfers/stocktaking/adjustments, branches, activity, attendance/shift definitions, and customer/supplier statements. The system map reference is documented as an architecture diagram, not an application screen. Several workflows are simplified; use `SCREEN_COMPLIANCE_MATRIX.md` for per-screen status.

## Local demo behavior

- Routes use the URL hash, e.g. `/#/products`, so each view can be refreshed directly.
- Shared product, customer, invoice, supplier, branch, user, and stock mock data lives in `Application/src/data/mockData.js`.
- POS checkout creates a demo invoice, updates the in-memory customer totals, product balances, and inventory movements.
- Purchase receipt updates a selected product balance and adds an inventory movement.
- Extended demo workflows connect receipts/returns to product quantities, supplier payments/returns to supplier statements, expenses/payments to a demo cashbox, and check-ins/settlements to local rows.
- Search, category tabs, detail panels, modal forms, status tabs, sample reports, print preview, and export feedback are simulated locally.
- State resets after a full browser refresh. No business data is persisted.

## Project map

- `Application/src/main.jsx` — original app shell and screens.
- `Application/src/ExtendedModules.jsx` — new route groups and local mock workflows.
- `Application/src/styles.css` — Arabic RTL design system and responsive rules.
- `Application/src/data/mockData.js` — centralized sample entities.
- `Application/src/data/mockDomain.js` — tested pure mock stock, custody, and cash calculations.
- `Application/public/assets` — reference-derived clothing image crops.
- `Documentation` — screen inventory, reference map, architecture, QA, and limitations.
- `Documentation/PRODUCT_ROADMAP.md` — full plan for evolving the showcase into a production POS system.
- `Deliverables/screenshots` — original route captures plus extended screen captures.

See [PRODUCT_ROADMAP.md](PRODUCT_ROADMAP.md), [REFERENCE_INVENTORY.md](REFERENCE_INVENTORY.md), [SCREEN_COMPLIANCE_MATRIX.md](SCREEN_COMPLIANCE_MATRIX.md), [ARCHITECTURE.md](ARCHITECTURE.md), [ROUTES.md](ROUTES.md), [MOCK_DATA.md](MOCK_DATA.md), and [QA_REPORT.md](QA_REPORT.md).
