# DressPOS Reference Inventory

Inventory is limited to the supplied design references and explicitly prepared review composites. Original PNGs were left in place and were not modified. Paths below are relative to the repository root. Generated route screenshots are evidence, not design references.

## Individual reference files

| File | Screen / purpose | Individual or composite | Visible elements | Status and notes |
|---|---|---|---|---|
| `واجهة تسجيل دخول DressPOS الأنيقة.png` | Login | Individual | Boutique hero, hanger brand, Arabic login card, remember me, QR login | Implemented; existing visual review recorded in compliance matrix. The image is a reference only. |
| `لوحة تحكم DressPOS لمتجر الملابس.png` | Dashboard | Individual | KPIs, sales chart, recent activity, stock alerts | Implemented; existing visual review recorded. |
| `واجهة نقطة البيع لمتجر ملابس عربي.png` | POS | Individual | Product catalog, variants, cart, customer and checkout | Implemented; existing visual review recorded. |
| `لوحة مبيعات DressPOS باللغة العربية.png` | Sales | Individual | Sales KPIs, filters, invoice table and statuses | Implemented; existing visual review recorded. |
| `واجهة إدارة المنتجات العربية في DressPOS.png` | Products | Individual | Product list, SKU, price, category and stock | Implemented; existing visual review recorded. |
| `لوحة مخزون DressPOS بالعربية.png` | Inventory | Individual | Stock summary, movements and low-stock indicators | Implemented; existing visual review recorded. |
| `لوحة عملاء DressPOS لإدارة المبيعات والولاء.png` | Customers | Individual | Customer directory, contact details, loyalty and spend | Implemented; existing visual review recorded. |
| `لوحة إدارة الموردين للملابس.png` | Suppliers | Individual | Supplier directory, contact and balances | Implemented; existing visual review recorded. |
| `لوحة تقارير المبيعات الذكية لنظام DressPOS.png` | Reports | Individual | Sales charts, report categories and filters | Implemented; existing visual review recorded. |
| `إدارة المستخدمين في DressPOS.png` | Users and role access | Individual | User list, roles, branches, status and actions | Implemented; demo role visibility only. |
| `لوحة إدارة المتجر بتصميم بنفسجي.png` | Store administration / branches | Individual | Branch cards, branch summary and administration navigation | Implemented; new branch directory is separate. |
| `لوحة إعدادات DressPOS بالعربية.png` | Settings | Individual | Settings categories and store preferences | Implemented; existing visual review recorded. |
| `لوحة مشتريات DressPOS بفواتير الموردين-1.png` | Purchase dashboard/list | Individual | Supplier invoices, invoice statuses and totals | Implemented as a local mock list. |
| `واجهة فاتورة شراء جديدة بنظام DressPOS-4.png` | New purchase invoice | Individual | Supplier, invoice lines, quantity, cost, dates and totals | Implemented as a simplified single-line demo invoice form; tax, discount and date fields remain incomplete. |
| `تفاصيل فاتورة شراء في DressPOS.png` | Purchase invoice detail | Individual | Invoice metadata, supplier, items, payment and history | Record detail drawer is available from the list; a dedicated route and document attachments are not implemented. |
| `استلام بضائع DressPOS — فاتورة ومخزون-2.png` | Goods receiving | Individual | Purchase reference, received quantity and stock update | Implemented; receiving updates shared product stock and activity log. |
| `واجهة مرتجعات المشتريات في DressPOS-3.png` | Purchase returns | Individual | Invoice selection, returned products/quantities and supplier balance | Implemented in mock state; simplified return data and no partial-return guard. |
| `لوحة DressPOS المالية المتكاملة.png` | Finance dashboard / financial overview | Individual | Cash and bank balances, payment and expense summaries | Implemented as cashbox list, payment and expense routes; bank account management is not complete. |
| `واجهة DressPOS لإدارة العهد والأرصدة المالية.png` | Custodies and balances | Individual | Employee advances, settlements and balances | Implemented with partial/full settlement demo. |
| `واجهة إدارة فروع DressPOS بالعربية.png` | Branch list and details | Individual | Branch location, manager, status and performance | List and detail drawer implemented; employee and warehouse relationships are summaries only. |
| `واجهة سجل النشاط بتصميم DressPOS البنفسجي.png` | Activity log | Individual | User, time, event, module, record, branch and device | Implemented; device/network text is simulated and change before/after diff is not complete. |
| `لوحة حضور وورديات DressPOS.png` | Attendance and shift scheduling | Individual | Attendance, lateness, schedules and shift assignments | Implemented as attendance and shift-definition tables; leave/calendar workflows remain incomplete. |
| `واجهة كشف حساب العملاء والموردين.png` | Customer and supplier statements | Individual | Opening balance, debit/credit, running balance and filters | Implemented with demo rows and print; filters and PDF generation are not complete. |
| `خريطة نظام DressPOS لإدارة المتاجر.png` | Architecture / product map | Composite diagram, not an application screen | High-level module relationships | Reference only; used to group the new navigation. |

## Prepared composite review images

These files are collages/crops assembled for review, not additional independent product screens. Their source references above remain preserved.

| File | Contents | Status |
|---|---|---|
| `Deliverables/reference-contact-sheet.jpg` | Thumbnail contact sheet of supplied reference screens | Review aid; individual references listed above. |
| `Deliverables/design-comparison-contact-sheet.jpg` | Existing app/reference comparison montage | Review aid; not a per-screen pixel-diff. |
| `Deliverables/product-image-crops-review.jpg` | Product imagery crops | Asset review aid, not a screen. |

## Other recursive image files

`Application/public/assets/login-boutique.png` and the product-image assets under `Application/public/assets/` are app assets, not reference screenshots. `Application/dist/` is generated build output. `Deliverables/screenshots/` and `Screenshots/` contain generated captures from earlier review sessions and are not original references; neither set was deleted.
