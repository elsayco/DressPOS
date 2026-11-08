# QA Report

Date: 2026-11-08

## Results

- `npm test`: passed, 4 Node built-in unit tests for stock quantity changes, stocktake variance, custody settlement caps/status, and cash variance signs.
- `npm run build`: passed with Vite 8.3.6.
- Browser route smoke review: login, then 20 added module routes were opened. A missing activity-log subroute was found during review and fixed. Route headings were then observed on all added routes; no browser page errors were observed after the fix.
- New-route screenshots are saved in `Deliverables/screenshots/extended/`.
- Existing desktop screenshot/reference comparisons for the original 12 screens are recorded in `SCREEN_COMPLIANCE_MATRIX.md`; the newly added pages have not yet had a detailed side-by-side visual review.
- No TypeScript check applies; this project is JavaScript/JSX.

## Limitations / follow-up

- The production bundle triggers Vite's advisory that its main JavaScript chunk exceeds 500 kB minified. It is not a build failure; code splitting would reduce initial download size.
- Browser checks covered route rendering. The full purchasing, returns, transfer, stocktake, finance, attendance, and responsive-device scenarios were not all exercised end to end in the browser.
- Original screens still use a large `main.jsx`; decomposition is incomplete.
- A number of workflows are intentionally simplified, as detailed in `MOCK_DATA.md` and `KNOWN_LIMITATIONS.md`.
