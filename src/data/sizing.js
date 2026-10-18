export const shirtSizes = [
  { size: 'S', collar: 15, chest: 38, shoulder: 17, length: 28 },
  { size: 'M', collar: 15.5, chest: 40, shoulder: 18, length: 29 },
  { size: 'L', collar: 16, chest: 42, shoulder: 19, length: 30 },
  { size: 'XL', collar: 16.5, chest: 44, shoulder: 20, length: 31 },
  { size: 'XXL', collar: 17, chest: 46, shoulder: 21, length: 31.5 },
];
export const waistSizes = [28, 30, 32, 34, 36, 38, 40];
export const uniformSizes = ['5–6 years', '7–8 years', '9–10 years', '11–12 years', '13–14 years', '15+ years'];
export function sizeOptions(product) {
  if (product.category === 'uniforms') return uniformSizes;
  if (product.category === 'shirts') return shirtSizes.map(s => s.size);
  return waistSizes.map(s => s + ' inch waist');
}
export function recommendSize(type, measurement, unit) {
  const inches = Number(measurement) / (unit === 'cm' ? 2.54 : 1);
  const values = type === 'shirts' ? shirtSizes.map(s => s.chest) : waistSizes;
  // Small conversion tolerance prevents exact centimetre equivalents rounding up a size.
  if (!Number.isFinite(inches) || inches < values[0] - .01 || inches > values[values.length - 1] + .01) return 'Custom measurements';
  const index = values.findIndex(value => value >= inches - .01);
  return type === 'shirts' ? shirtSizes[index].size : waistSizes[index] + ' inch waist';
}
export function buildOrderMessage({ product, color, fit, orderType, size, measurements, notes }) {
  const lines = ['Order enquiry · Royj Tailors', '', 'Piece: ' + product.name, product.priceValue == null ? 'Price: Please provide a quotation' : 'Starting price: ' + product.price, 'Color: ' + color, 'Preferred fit: ' + fit];
  if (orderType === 'standard') lines.push('Size: ' + size);
  else {
    lines.push('Sizing: Custom measurements');
    product.measurements.forEach((label, index) => lines.push(label + ': ' + String(measurements[index] || '').trim() + (label.includes('Age') ? '' : ' inches')));
  }
  if (notes.trim()) lines.push('', 'Notes: ' + notes.trim());
  lines.push('', 'Please confirm fabric availability, final price, completion date and delivery options.');
  return lines.join('\n');
}
