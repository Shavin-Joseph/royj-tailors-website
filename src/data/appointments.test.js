import { studioDateTime, availableTimes } from './appointments';
test('date follows Sri Lanka time across UTC midnight boundaries', () => {
  expect(studioDateTime(new Date('2026-10-07T20:00:00Z'))).toEqual({date:'2026-10-08',hour:1});
});
test('past days and elapsed same-day time windows cannot be requested', () => {
  const now = new Date('2026-10-07T11:30:00Z'); // 5pm in Sri Lanka
  expect(availableTimes('2026-10-06', now)).toEqual([]);
  expect(availableTimes('2026-10-07', now)).toHaveLength(1);
  expect(availableTimes('2026-10-07', now)[0].value).toContain('Evening');
  expect(availableTimes('2026-10-08', now)).toHaveLength(3);
});
test('after closing time only future dates remain available', () => {
  expect(availableTimes('2026-10-07',new Date('2026-10-07T14:00:00Z'))).toEqual([]);
});
