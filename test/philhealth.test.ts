import { describe, expect, it } from 'vitest';
import { formatPhilhealthPin, validatePhilhealthPin } from '../src/philhealth';
describe('validatePhilhealthPin', () => {
  it('accepts a valid 12-digit PhilHealth PIN', () => {
    const result = validatePhilhealthPin('12-345678901-2');
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.normalized).toBe('123456789012');
      expect(result.type).toBe('PHILHEALTH_PIN');
    }
  });

   it('rejects empty input', () => {
    const result = validatePhilhealthPin('');
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errorCode).toBe('INVALID_LENGTH');
    }
  });
  it('rejects invalid lengths', () => {
    const result = validatePhilhealthPin('12345');
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errorCode).toBe('INVALID_LENGTH');
    }
  });
  it('rejects non-digit characters', () => {
  const result = validatePhilhealthPin('12-34567AB01-2');
  expect(result.valid).toBe(false);
});
it('normalizes PIN without dashes', () => {
  const result = validatePhilhealthPin('123456789012');
  expect(result.valid).toBe(true);

  if (result.valid) {
    expect(result.normalized).toBe('123456789012');
  }
});
});
describe('formatPhilhealthPin', () => {
  it('formats a 12-digit PhilHealth PIN', () => {
    expect(formatPhilhealthPin('123456789012')).toBe('12-345678901-2');
  });
});