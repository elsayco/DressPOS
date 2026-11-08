# Mock Data Structure

Canonical sample entities are in `Application/src/data/mockData.js`.

| Entity | Fields / links |
|---|---|
| Branch | `id`, `name`, `area`, `manager` |
| Product | `id`, `image`, `name`, `sku`, `barcode`, `category`, `brand`, `price`, `cost`, `stock`, `minimum`, `sizes`, `colors` |
| Customer | `id`, `name`, `phone`, `email`, `type`, `points`, `total`, `visits`, `avatar` |
| Supplier | `id`, `name`, `contact`, `phone`, `email`, `category`, `total`, `balance` |
| User | `id`, `name`, `email`, `role`, `branch`, `status`, `last` |
| Sales invoice | `id`, `customer`, `branch`, `date`, `payment`, `status`, `total`, `items[]` |
| Inventory movement | `id`, `product`, `type`, `qty`, `branch`, `date` |
| Product categories | Shared labels used by POS and Products |

Products are shared by POS, product catalog, stock table, inventory movements, invoice details, and reports. Customer and supplier objects are referenced by invoice and profile views. Branches are available to branch controls and administration screens. Demonstration state is in memory; it resets on refresh and is not stored in a database or browser storage.
