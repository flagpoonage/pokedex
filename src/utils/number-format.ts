export function formatNumber(value: number, [min, max]: [number, number]) {
  return Intl.NumberFormat(window.navigator.language, {
    maximumFractionDigits: max,
    minimumFractionDigits: min,
  }).format(value);
}
