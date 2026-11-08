# Application Architecture

## Stack

- React 19, Vite 8, JavaScript modules.
- `lucide-react` for UI icons and `recharts` for charts.
- CSS custom properties and responsive media queries; no component framework.
- Client-side hash routing, no router dependency and no server API.

## Structure

```text
Application/
  index.html
  package.json
  public/assets/                 Reference-derived clothing crops
  src/
    main.jsx                     App shell, navigation, screens, panels, dialogs
    styles.css                   RTL theme, layouts, breakpoints
    data/mockData.js             Shared sample business entities
```

The app mounts one React root and uses the URL hash as its route. A persistent RTL sidebar and topbar wrap each module. Local React state owns entities that can change during a demonstration (products, customers, invoices, inventory movements, branches, users, and suppliers). Detail panels and modal forms consume the same entities as the screen lists. Charts use the shared reporting series and mock metrics.

## Routing

`#/login`, `#/dashboard`, `#/pos`, `#/sales`, `#/products`, `#/inventory`, `#/customers`, `#/suppliers`, `#/reports`, `#/users`, `#/admin`, and `#/settings`. The app handles `hashchange` and direct route loads. Unrecognized hashes fall back to Login.

## Responsive behavior

Desktop uses a fixed right sidebar and wide main content. At tablet width, the sidebar becomes a slide-in panel and KPI/card grids collapse. At mobile widths, forms and cards become single-column, product grids become two-column, and settings navigation scrolls horizontally.
