# Mock Data and Workflow Notes

## Shared seed data

The original dashboard entities (products, customers, suppliers, branches, users, sales invoices, and movements) are seeded in `Application/src/data/mockData.js`. The operational extensions seed purchase invoices/returns, warehouses, transfers, counts, adjustments, cashboxes, cashier shifts, payments, expenses, employee custodies, statements, attendance, work shifts, and activity rows in `Application/src/ExtendedModules.jsx`.

## Connected demo actions

- Purchase invoice draft → receiving increases shared product stock and records a simulated activity row.
- Purchase return decreases shared stock (clamped at zero), adds a returns row and a supplier statement debit.
- Supplier payment decreases the primary cashbox balance and adds a supplier statement transaction.
- Expense decreases the primary cashbox balance.
- Inventory adjustment approval changes the first seeded product quantity.
- Stock count records physical quantity and variance for the first seeded product.
- Custody settlements update settled amount and open/partial/closed status.
- Cashier shift closing records counted amount and cash surplus/shortage.
- Check-in creates an attendance row; activity references show invented demo-device text.

## Known consistency gaps

Extended records are local to the extended module and reset on reload. Several lists are illustrative and are not reconciled with POS invoices or the original supplier/customer totals. Warehouse transfers change status but do not maintain per-warehouse SKU balances. Bank accounts, invoice tax/discount, partial receipt/return validation, customer account posting from credit sales, scheduled absence/leave, CSV generation, and genuine PDF export are not implemented. Do not use the demo totals as bookkeeping data.
