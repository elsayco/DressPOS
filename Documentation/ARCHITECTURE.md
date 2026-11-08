# Frontend Architecture

DressPOS is a Vite and React single-page demo. The shell and original screens remain in `Application/src/main.jsx`; newer operational views are in `Application/src/ExtendedModules.jsx`. Shared sample entities are seeded from `Application/src/data/mockData.js`, and pure stock/cash/custody calculations live in `Application/src/data/mockDomain.js`.

The hash route selects a screen. The extended screens share mock state while the module component remains mounted. Purchasing receipts, returns, payments, expenses, inventory adjustments, and attendance are local browser-memory simulations. Refreshing the page restores the seed data. No API, production database, real transaction, or authentication service is connected.

This is an integration step, not a completed decomposition: original screens and common controls are still concentrated in `main.jsx`. Role labels and visibility are presentation only and do not protect routes or data.
