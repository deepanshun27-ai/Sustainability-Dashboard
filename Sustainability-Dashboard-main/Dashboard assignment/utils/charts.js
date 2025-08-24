export function pctToStatus(pct) {
  if (pct <= 70) return { text: 'On Track', color: 'green' };
  if (pct <= 85) return { text: 'Caution', color: 'amber' };
  return { text: 'Critical', color: 'red' };
}

export function prettyNumber(n) {
  if (n === null || n === undefined) return '-';
  if (typeof n === 'number') {
    if (Math.abs(n) >= 1000000) return (n/1000000).toFixed(1) + 'M';
    if (Math.abs(n) >= 1000) return (n/1000).toFixed(1) + 'k';
    return n.toString();
  }
  return n;
}