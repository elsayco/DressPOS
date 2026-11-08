# Screen Compliance Matrix

**Status vocabulary:** Not Started, In Progress, Implemented, Visually Reviewed, Passed, Blocked. `Passed` is reserved for screens whose visual match and interactions have both been fully checked; none of the newly added screens are marked Passed.

| Screen | Reference | Status | Route / capture | Review notes |
|---|---|---|---|---|
| Login | Yes | Visually Reviewed | `#/login`, `Deliverables/screenshots/login.png` | Original desktop comparison was reviewed earlier; CSS layout approximates the reference photo. |
| Dashboard | Yes | Visually Reviewed | `#/dashboard`, `Deliverables/screenshots/dashboard.png` | Original desktop comparison reviewed earlier. |
| POS | Yes | Visually Reviewed | `#/pos`, `Deliverables/screenshots/pos.png` | Original desktop comparison reviewed earlier; local sample checkout. |
| Sales | Yes | Visually Reviewed | `#/sales`, `Deliverables/screenshots/sales.png` | Original desktop comparison reviewed earlier. |
| Products | Yes | Visually Reviewed | `#/products`, `Deliverables/screenshots/products.png` | Original desktop comparison reviewed earlier. |
| Inventory overview | Yes | Visually Reviewed | `#/inventory`, `Deliverables/screenshots/inventory.png` | Original desktop comparison reviewed earlier. |
| Customers | Yes | Visually Reviewed | `#/customers`, `Deliverables/screenshots/customers.png` | Original desktop comparison reviewed earlier. |
| Suppliers | Yes | Visually Reviewed | `#/suppliers`, `Deliverables/screenshots/suppliers.png` | Original desktop comparison reviewed earlier. |
| Reports | Yes | Visually Reviewed | `#/reports`, `Deliverables/screenshots/reports.png` | Original desktop comparison reviewed earlier. |
| Users and demo roles | Yes | Visually Reviewed | `#/users`, `Deliverables/screenshots/users.png` | Original desktop comparison reviewed earlier; role access is not security. |
| Store administration | Yes | Visually Reviewed | `#/admin`, `Deliverables/screenshots/admin.png` | Original desktop comparison reviewed earlier. |
| Settings | Yes | Visually Reviewed | `#/settings`, `Deliverables/screenshots/settings.png` | Original desktop comparison reviewed earlier. |
| Purchase dashboard / invoice list | Yes | Implemented | `#/purchases`, `Deliverables/screenshots/extended/purchases.png` | Basic list and record detail drawer; no full invoice ledger. |
| New purchase invoice | Yes | Implemented | `#/purchases/new`, `Deliverables/screenshots/extended/purchases-new.png` | One product line; discounts, tax, and date inputs remain absent. |
| Purchase invoice details | Yes | Implemented | Detail drawer from `#/purchases` | No dedicated parameter route, attachment area, or complete audit history. |
| Goods receiving | Yes | Implemented | `#/purchases/receiving`, `Deliverables/screenshots/extended/purchases-receiving.png` | Shared product count and activity row update in mock state. |
| Purchase returns | Yes | Implemented | `#/purchases/returns`, `Deliverables/screenshots/extended/purchases-returns.png` | Stock and supplier statement update; no partial-return limit validation. |
| Cashboxes | Yes | Implemented | `#/finance/cashboxes`, `Deliverables/screenshots/extended/finance-cashboxes.png` | Seeded balances; deposit/withdrawal/transfer forms remain incomplete. |
| Cashier shifts | Yes | Implemented | `#/finance/shifts`, `Deliverables/screenshots/extended/finance-shifts.png` | Open/close status and variance demo; transactions are not reconciled. |
| Payments | Yes | Implemented | `#/finance/payments`, `Deliverables/screenshots/extended/finance-payments.png` | Payment updates demo cashbox and supplier statement. |
| Expenses | Yes | Implemented | `#/finance/expenses`, `Deliverables/screenshots/extended/finance-expenses.png` | Expense updates demo cashbox. |
| Employee custodies | Yes | Implemented | `#/finance/custodies`, `Deliverables/screenshots/extended/finance-custodies.png` | Partial/full settlement demo. |
| Financial balances | Yes | Implemented | `#/finance/balances`, `Deliverables/screenshots/extended/finance-balances.png` | Reuses seeded cashbox figures; bank accounts not modeled. |
| Warehouses | Yes | Implemented | `#/inventory/warehouses`, `Deliverables/screenshots/extended/inventory-warehouses.png` | Summary rows only; no per-warehouse product ledger. |
| Warehouse transfers | Yes | Implemented | `#/inventory/transfers`, `Deliverables/screenshots/extended/inventory-transfers.png` | Create/dispatch/receive status simulation; quantities are not applied to warehouse balances. |
| Stocktaking | Yes | Implemented | `#/inventory/counts`, `Deliverables/screenshots/extended/inventory-counts.png` | Physical count and variance update the first sample product. |
| Inventory adjustments | Yes | Implemented | `#/inventory/adjustments`, `Deliverables/screenshots/extended/inventory-adjustments.png` | Approval changes the first sample product; reason is recorded. |
| Branch list | Yes | Implemented | `#/branches`, `Deliverables/screenshots/extended/branches.png` | List, summary cards, create, and detail drawer. |
| Branch details | Yes | Implemented | Detail drawer from `#/branches` | Employee/warehouse associations are only summary values. |
| Activity log | Yes | Implemented | `#/activity`, `Deliverables/screenshots/extended/activity.png` | Simulated device text; before/after field diff is absent. |
| Attendance / check-in | Yes | Implemented | `#/attendance`, `Deliverables/screenshots/extended/attendance.png` | Simple attendance insertion; leave/absence and hours calculation incomplete. |
| Shift definitions | Yes | Implemented | `#/attendance/shifts`, `Deliverables/screenshots/extended/attendance-shifts.png` | Basic shift definition list; calendar/reassignment incomplete. |
| Customer statement | Yes | Implemented | `#/customers/statement`, `Deliverables/screenshots/extended/customers-statement.png` | Seeded rows and print; filters/export are basic. |
| Supplier statement | Yes | Implemented | `#/suppliers/statement`, `Deliverables/screenshots/extended/suppliers-statement.png` | Seeded rows plus simulated payment/return postings. |

All new captures are desktop route screenshots. A visual comparison against each supplied new reference, mobile/tablet checks, and complete browser E2E scenarios remain outstanding. See `QA_REPORT.md` and `MOCK_DATA.md` for boundaries.
