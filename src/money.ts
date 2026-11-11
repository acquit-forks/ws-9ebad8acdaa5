export type Line = { amount: number };
export function formatTotal(lines: readonly Line[], currency: string): string {
	const sum = lines.reduce((total, line) => total + line.amount, 0);
	const digits = new Intl.NumberFormat("en", { style: "currency", currency }).resolvedOptions().maximumFractionDigits;
	return sum.toFixed(digits);
}
