# Known Limitations

- This is a frontend-only showcase. Data is local mock state and resets on refresh; there is no persistence, backend, real login, permission enforcement, financial ledger, or production stock source.
- No real payment processing, receipt printer, barcode scanner, customer messaging, or external integration is connected.
- Purchase receipts and sales update in-memory product stock/movement data, but there is no full purchase-invoice ledger, supplier settlement flow, return authorization, or accounting posting.
- Some page-level filter panels, table densities, and exact spacing from the supplied screenshots are simplified. The paired montage documents the current visual approximation.
- Product images are cropped from the supplied UI references. They are not separate original product photos and some sample products use an approximate garment match.
- Login uses a fixed public demo account (`Admin` / `admin`) in front-end code. It is not production authentication and must be removed from a production build.
- The user detail panel lists sample pages by role, but access is not restricted by the list; every route is still reachable in the showcase.
- Login uses a separate photographic boutique asset with a CSS layout. It is not a flattened copy of the supplied reference image.
- English LTR has not been built as a second language mode; Arabic RTL is the implemented presentation.
- Date and branch selectors update displayed state; not every KPI/report metric is recomputed from every filter combination.
