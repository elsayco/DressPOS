export function changeStock(product, delta) {
  if (!product || !Number.isFinite(delta)) return product;
  return { ...product, stock: Math.max(0, product.stock + delta) };
}
export function stockVariance(recorded, actual) {
  if (!Number.isFinite(recorded) || !Number.isFinite(actual)) throw new TypeError('Stock quantities must be numbers');
  return actual - recorded;
}
export function settleCustody(custody, amount) {
  const settled = Math.min(custody.issued, custody.settled + Math.max(0, Number(amount) || 0));
  return { ...custody, settled, status: settled >= custody.issued ? 'مغلقة' : settled > 0 ? 'جزئية' : 'مفتوحة' };
}
export function cashVariance(opening, closing) {
  if (!Number.isFinite(opening) || !Number.isFinite(closing)) throw new TypeError('Cash values must be numbers');
  return closing - opening;
}
