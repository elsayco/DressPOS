# QA Report

## Build and launch

- `npm install` completed in `Application` (0 reported vulnerabilities at install time).
- `npm run build` completed successfully with Vite 8.3.6.
- Local development server served `http://127.0.0.1:5173` during browser verification.

## Route and visual review

- Opened all 12 routes: Login, Dashboard, POS, Sales, Products, Inventory, Customers, Suppliers, Reports, Users, Store Administration, and Settings.
- Captured desktop screenshots at 1672×941 in `Deliverables/screenshots`.
- Created a paired design review montage at `Deliverables/design-comparison-contact-sheet.jpg` and a reference inventory montage at `Deliverables/reference-contact-sheet.jpg`.
- Direct hash route loading was checked for all implemented modules. Hash navigation is used so routes survive refresh.

## Workflow checks

- Demo sign-in advanced from Login to Dashboard.
- POS product selection added an item to cart; 14% tax and the total updated. Demo checkout generated `INV-2085`, opened invoice details, and displayed it in Sales.
- A purchase receipt was entered through Suppliers, and the Inventory balance and movement list updated in the same local session.
- Customer chooser displayed customer choices and updated the POS selection.
- Product, invoice, supplier, customer, user, and branch detail panels are connected to shared in-memory entities.

## Caveats

- The screenshots were reviewed side-by-side at contact-sheet scale; this is not a pixel-perfect diff or per-screen visual sign-off.
- Responsive breakpoints are implemented, but tablet and mobile screenshots were not included in this delivery review.
- Browser devtools emitted React missing-key warnings during earlier development iterations; those source keys were improved, but an exhaustive clean-console pass across all routes was not recorded.
- Product pictures are cropped from the supplied design references because no separate product photography files were provided. Several demo catalog items use the closest available garment image.
