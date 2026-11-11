// ISO 4217 minor units. Currencies not listed here have two minor-unit digits.
// https://www.six-group.com/en/products-services/financial-information/data-standards.html
const MINOR_UNIT_DIGITS: ReadonlyMap<string, number> = new Map([
  ['BIF', 0],
  ['CLP', 0],
  ['DJF', 0],
  ['GNF', 0],
  ['ISK', 0],
  ['JPY', 0],
  ['KMF', 0],
  ['KRW', 0],
  ['PYG', 0],
  ['RWF', 0],
  ['UGX', 0],
  ['UYI', 0],
  ['VND', 0],
  ['VUV', 0],
  ['XAF', 0],
  ['XOF', 0],
  ['XPF', 0],
  ['BHD', 3],
  ['IQD', 3],
  ['JOD', 3],
  ['KWD', 3],
  ['LYD', 3],
  ['OMR', 3],
  ['TND', 3],
  ['CLF', 4],
  ['UYW', 4],
]);

export type Line = { amount: number };
export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(MINOR_UNIT_DIGITS.get(currency) ?? 2);
}
