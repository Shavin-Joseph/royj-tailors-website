export const timeWindows = [
  { value: 'Morning · 9am–12pm', end: 12 },
  { value: 'Afternoon · 12pm–4pm', end: 16 },
  { value: 'Evening · 4pm–7pm', end: 19 },
];
export function studioDateTime(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Colombo', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23' }).formatToParts(now);
  const part = key => parts.find(p => p.type === key).value;
  return { date: part('year') + '-' + part('month') + '-' + part('day'), hour: Number(part('hour')) };
}
export function availableTimes(date, now = new Date()) {
  const today = studioDateTime(now);
  if (date < today.date) return [];
  return timeWindows.filter(slot => date !== today.date || slot.end > today.hour);
}
