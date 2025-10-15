import { formatDate } from '../dateFormat';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const timestamp = new Date('2024-01-15T10:30:00').getTime();
    const result = formatDate(timestamp);
    expect(result).toBe('15.01.2024. - 10:30');
  });

  it('should add leading zeros to single digit dates and months', () => {
    const timestamp = new Date('2024-03-05T09:05:00').getTime();
    const result = formatDate(timestamp);
    expect(result).toBe('05.03.2024. - 09:05');
  });

  it('should handle December correctly', () => {
    const timestamp = new Date('2024-12-31T23:59:00').getTime();
    const result = formatDate(timestamp);
    expect(result).toBe('31.12.2024. - 23:59');
  });

  it('should handle midnight correctly', () => {
    const timestamp = new Date('2024-06-15T00:00:00').getTime();
    const result = formatDate(timestamp);
    expect(result).toBe('15.06.2024. - 00:00');
  });
});
